import { NextRequest, NextResponse } from 'next/server'
import * as cheerio from 'cheerio'
import dns from 'dns/promises'
import net from 'net'

export const runtime = 'nodejs'

type Status = 'good' | 'needs-improvement' | 'bad'

type Check = {
  id: string
  label: string
  value: string
  length?: number
  status: Status
  score: number
  message: string
  ideal: string
}

type MetaReport = {
  requestedUrl: string
  finalUrl: string
  statusCode: number
  contentType: string
  fetchedAt: string
  score: number
  counts: Record<Status, number>
  checks: Check[]
  extracted: {
    title: string
    description: string
    canonical: string
    robots: string
    viewport: string
    h1: string[]
    openGraph: Record<string, string>
    twitter: Record<string, string>
  }
}

const MAX_HTML_BYTES = 1_000_000
const FETCH_TIMEOUT_MS = 10_000
const MAX_REDIRECTS = 4

function normalizeWhitespace(value: string | undefined | null) {
  return (value ?? '').replace(/\s+/g, ' ').trim()
}

function charCount(value: string) {
  return Array.from(value.trim()).length
}

function normalizeInputUrl(input: string) {
  const trimmed = input.trim()
  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`
  const url = new URL(withProtocol)

  if (!['http:', 'https:'].includes(url.protocol)) {
    throw new Error('Only http and https URLs can be checked.')
  }

  if (url.username || url.password) {
    throw new Error('URLs with usernames or passwords are not allowed.')
  }

  url.hash = ''
  return url
}

function isPrivateIp(ip: string) {
  const version = net.isIP(ip)

  if (version === 4) {
    const parts = ip.split('.').map(Number)
    const [a, b] = parts

    return (
      a === 0 ||
      a === 10 ||
      a === 127 ||
      (a === 100 && b >= 64 && b <= 127) ||
      (a === 169 && b === 254) ||
      (a === 172 && b >= 16 && b <= 31) ||
      (a === 192 && b === 168) ||
      (a === 192 && b === 0) ||
      (a === 198 && (b === 18 || b === 19)) ||
      a >= 224
    )
  }

  if (version === 6) {
    const lower = ip.toLowerCase()
    return (
      lower === '::1' ||
      lower === '::' ||
      lower.startsWith('fc') ||
      lower.startsWith('fd') ||
      lower.startsWith('fe80') ||
      lower.startsWith('::ffff:127.') ||
      lower.startsWith('::ffff:10.') ||
      lower.startsWith('::ffff:192.168.')
    )
  }

  return true
}

async function assertPublicUrl(url: URL) {
  const host = url.hostname.toLowerCase()

  if (
    host === 'localhost' ||
    host.endsWith('.localhost') ||
    host === '0.0.0.0' ||
    host === '::1'
  ) {
    throw new Error('Local and private network URLs cannot be checked.')
  }

  const addresses = await dns.lookup(host, { all: true, verbatim: true })
  if (addresses.length === 0 || addresses.some(record => isPrivateIp(record.address))) {
    throw new Error('Local and private network URLs cannot be checked.')
  }
}

async function readLimitedHtml(response: Response) {
  const reader = response.body?.getReader()
  if (!reader) return ''

  const chunks: Uint8Array[] = []
  let total = 0

  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    if (!value) continue

    total += value.byteLength
    if (total > MAX_HTML_BYTES) {
      reader.cancel()
      throw new Error('The page HTML is too large to analyze.')
    }

    chunks.push(value)
  }

  const merged = new Uint8Array(total)
  let offset = 0
  for (const chunk of chunks) {
    merged.set(chunk, offset)
    offset += chunk.byteLength
  }

  return new TextDecoder('utf-8').decode(merged)
}

async function fetchHtml(startUrl: URL) {
  let currentUrl = startUrl

  for (let redirectCount = 0; redirectCount <= MAX_REDIRECTS; redirectCount += 1) {
    await assertPublicUrl(currentUrl)

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS)

    try {
      const response = await fetch(currentUrl, {
        redirect: 'manual',
        signal: controller.signal,
        headers: {
          'Accept': 'text/html,application/xhtml+xml',
          'User-Agent': 'CreativeWired-SEOTool/1.0 (+https://creativewired.com/seo-tools)',
        },
      })

      const location = response.headers.get('location')
      if ([301, 302, 303, 307, 308].includes(response.status) && location) {
        currentUrl = new URL(location, currentUrl)
        continue
      }

      const contentType = response.headers.get('content-type') ?? ''
      if (contentType && !contentType.toLowerCase().includes('text/html')) {
        throw new Error('The URL did not return an HTML page.')
      }

      return {
        html: await readLimitedHtml(response),
        finalUrl: currentUrl.toString(),
        statusCode: response.status,
        contentType,
      }
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        throw new Error('The page took too long to respond.')
      }
      throw error
    } finally {
      clearTimeout(timeout)
    }
  }

  throw new Error('Too many redirects.')
}

function getMeta($: cheerio.CheerioAPI, key: string) {
  const expected = key.toLowerCase()
  let value = ''

  $('meta').each((_, element) => {
    if (value) return
    const name = ($(element).attr('name') ?? $(element).attr('property') ?? '').toLowerCase()
    if (name === expected) value = normalizeWhitespace($(element).attr('content'))
  })

  return value
}

function collectMeta($: cheerio.CheerioAPI, prefix: string) {
  const values: Record<string, string> = {}
  const normalizedPrefix = prefix.toLowerCase()

  $('meta').each((_, element) => {
    const key = ($(element).attr('property') ?? $(element).attr('name') ?? '').toLowerCase()
    const content = normalizeWhitespace($(element).attr('content'))
    if (key.startsWith(normalizedPrefix) && content && !values[key]) {
      values[key] = content
    }
  })

  return values
}

function rangeCheck(
  id: string,
  label: string,
  value: string,
  ranges: {
    good: [number, number]
    improveLow: [number, number]
    improveHigh: [number, number]
    ideal: string
    missing: string
  },
) {
  const length = charCount(value)

  if (!value) {
    return {
      id,
      label,
      value,
      length,
      status: 'bad' as const,
      score: 0,
      message: ranges.missing,
      ideal: ranges.ideal,
    }
  }

  const [goodMin, goodMax] = ranges.good
  const [improveLowMin, improveLowMax] = ranges.improveLow
  const [improveHighMin, improveHighMax] = ranges.improveHigh

  if (length >= goodMin && length <= goodMax) {
    return {
      id,
      label,
      value,
      length,
      status: 'good' as const,
      score: 100,
      message: `${label} length is in the recommended range.`,
      ideal: ranges.ideal,
    }
  }

  if (
    (length >= improveLowMin && length <= improveLowMax) ||
    (length >= improveHighMin && length <= improveHighMax)
  ) {
    return {
      id,
      label,
      value,
      length,
      status: 'needs-improvement' as const,
      score: 65,
      message: `${label} is present, but the length can be tightened.`,
      ideal: ranges.ideal,
    }
  }

  return {
    id,
    label,
    value,
    length,
    status: 'bad' as const,
    score: 25,
    message: `${label} is outside the recommended range.`,
    ideal: ranges.ideal,
  }
}

function presenceCheck(id: string, label: string, value: string | undefined, ideal: string, required = true): Check {
  const normalized = value ?? ''

  if (normalized) {
    return {
      id,
      label,
      value: normalized,
      status: 'good',
      score: 100,
      message: `${label} is present.`,
      ideal,
    }
  }

  return {
    id,
    label,
    value: normalized,
    status: required ? 'bad' : 'needs-improvement',
    score: required ? 0 : 55,
    message: `${label} is missing.`,
    ideal,
  }
}

function scoreChecks(checks: Check[]) {
  const score = Math.round(checks.reduce((sum, check) => sum + check.score, 0) / checks.length)
  const counts: Record<Status, number> = {
    good: 0,
    'needs-improvement': 0,
    bad: 0,
  }

  checks.forEach(check => {
    counts[check.status] += 1
  })

  return { score, counts }
}

function analyzeHtml(html: string, requestedUrl: string, finalUrl: string, statusCode: number, contentType: string): MetaReport {
  const $ = cheerio.load(html)

  const title = normalizeWhitespace($('head > title').first().text())
  const description = getMeta($, 'description')
  const canonical = normalizeWhitespace($('link[rel="canonical"]').first().attr('href'))
  const robots = getMeta($, 'robots')
  const viewport = getMeta($, 'viewport')
  const h1 = $('h1').toArray().map(element => normalizeWhitespace($(element).text())).filter(Boolean)
  const openGraph = collectMeta($, 'og:')
  const twitter = collectMeta($, 'twitter:')

  const twitterTitle = twitter['twitter:title'] || openGraph['og:title']
  const twitterDescription = twitter['twitter:description'] || openGraph['og:description']
  const twitterImage = twitter['twitter:image'] || openGraph['og:image']

  const checks: Check[] = [
    rangeCheck('title', 'Title tag', title, {
      good: [30, 60],
      improveLow: [20, 29],
      improveHigh: [61, 70],
      ideal: '30-60 characters, unique, descriptive, and aligned with page intent.',
      missing: 'Every indexable page needs a unique title element.',
    }),
    rangeCheck('description', 'Meta description', description, {
      good: [70, 160],
      improveLow: [50, 69],
      improveHigh: [161, 180],
      ideal: '70-160 characters, specific, useful, and written like search-result copy.',
      missing: 'A meta description helps search engines generate better snippets.',
    }),
    presenceCheck('canonical', 'Canonical URL', canonical, 'Use an absolute canonical URL for duplicate-control signals.', false),
    presenceCheck('viewport', 'Viewport tag', viewport, 'Include a responsive viewport tag for mobile rendering.', true),
    {
      id: 'h1',
      label: 'H1 heading',
      value: h1.join(' | '),
      status: h1.length === 1 ? 'good' : h1.length === 0 ? 'bad' : 'needs-improvement',
      score: h1.length === 1 ? 100 : h1.length === 0 ? 0 : 65,
      message: h1.length === 1 ? 'Exactly one H1 was found.' : h1.length === 0 ? 'No H1 was found.' : `${h1.length} H1 headings were found.`,
      ideal: 'Use one clear H1 that matches the main topic of the page.',
    },
    presenceCheck('og:title', 'Open Graph title', openGraph['og:title'], 'Set og:title for social previews.', true),
    presenceCheck('og:description', 'Open Graph description', openGraph['og:description'], 'Set og:description for social previews.', true),
    presenceCheck('og:image', 'Open Graph image', openGraph['og:image'], 'Use a strong crawlable image, commonly 1200 x 630 px.', true),
    presenceCheck('og:url', 'Open Graph URL', openGraph['og:url'], 'Set og:url to the canonical page URL.', false),
    presenceCheck('twitter:card', 'Twitter/X card type', twitter['twitter:card'], 'Use summary or summary_large_image.', true),
    {
      ...presenceCheck('twitter:title', 'Twitter/X title', twitterTitle, 'Set twitter:title or provide og:title fallback.', true),
      status: twitter['twitter:title'] ? 'good' : twitterTitle ? 'needs-improvement' : 'bad',
      score: twitter['twitter:title'] ? 100 : twitterTitle ? 70 : 0,
      message: twitter['twitter:title'] ? 'Twitter/X title is present.' : twitterTitle ? 'Using Open Graph title as fallback.' : 'Twitter/X title is missing.',
    },
    {
      ...presenceCheck('twitter:description', 'Twitter/X description', twitterDescription, 'Set twitter:description or provide og:description fallback.', true),
      status: twitter['twitter:description'] ? 'good' : twitterDescription ? 'needs-improvement' : 'bad',
      score: twitter['twitter:description'] ? 100 : twitterDescription ? 70 : 0,
      message: twitter['twitter:description'] ? 'Twitter/X description is present.' : twitterDescription ? 'Using Open Graph description as fallback.' : 'Twitter/X description is missing.',
    },
    {
      ...presenceCheck('twitter:image', 'Twitter/X image', twitterImage, 'Set twitter:image or provide og:image fallback.', true),
      status: twitter['twitter:image'] ? 'good' : twitterImage ? 'needs-improvement' : 'bad',
      score: twitter['twitter:image'] ? 100 : twitterImage ? 70 : 0,
      message: twitter['twitter:image'] ? 'Twitter/X image is present.' : twitterImage ? 'Using Open Graph image as fallback.' : 'Twitter/X image is missing.',
    },
  ]

  const { score, counts } = scoreChecks(checks)

  return {
    requestedUrl,
    finalUrl,
    statusCode,
    contentType,
    fetchedAt: new Date().toISOString(),
    score,
    counts,
    checks,
    extracted: {
      title,
      description,
      canonical,
      robots,
      viewport,
      h1,
      openGraph,
      twitter,
    },
  }
}

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json()

    if (typeof url !== 'string' || !url.trim()) {
      return NextResponse.json({ error: 'Enter a URL to analyze.' }, { status: 400 })
    }

    const normalizedUrl = normalizeInputUrl(url)
    const fetched = await fetchHtml(normalizedUrl)

    if (!fetched.html.trim()) {
      return NextResponse.json({ error: 'The URL returned empty HTML.' }, { status: 422 })
    }

    return NextResponse.json(
      analyzeHtml(
        fetched.html,
        normalizedUrl.toString(),
        fetched.finalUrl,
        fetched.statusCode,
        fetched.contentType,
      ),
    )
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Could not analyze that URL.'
    const status = message.includes('Local and private') ? 400 : 422
    return NextResponse.json({ error: message }, { status })
  }
}
