'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Gauge,
  Globe2,
  Loader2,
  Search,
  Share2,
  XCircle,
} from 'lucide-react'
import { seoToolPageList, seoToolPages, type SeoToolPageConfig } from './tool-content'

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

type SeoReport = {
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

const statusStyles: Record<Status, { label: string; dot: string; text: string; bg: string; icon: React.ReactNode }> = {
  good: {
    label: 'Good',
    dot: 'bg-emerald-500',
    text: 'text-emerald-700',
    bg: 'bg-emerald-50 border-emerald-100',
    icon: <CheckCircle2 className="w-3.5 h-3.5" />,
  },
  'needs-improvement': {
    label: 'Needs improvement',
    dot: 'bg-amber-500',
    text: 'text-amber-700',
    bg: 'bg-amber-50 border-amber-100',
    icon: <AlertTriangle className="w-3.5 h-3.5" />,
  },
  bad: {
    label: 'Bad',
    dot: 'bg-rose-500',
    text: 'text-rose-700',
    bg: 'bg-rose-50 border-rose-100',
    icon: <XCircle className="w-3.5 h-3.5" />,
  },
}

const recommendedRanges: Record<string, { min: number; max: number; hardMax: number }> = {
  title: { min: 30, max: 60, hardMax: 75 },
  description: { min: 70, max: 160, hardMax: 190 },
}

function StatusBadge({ status }: { status: Status }) {
  const styles = statusStyles[status]
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium ${styles.bg} ${styles.text}`}>
      {styles.icon}
      {styles.label}
    </span>
  )
}

function ScoreRing({ score }: { score: number }) {
  const background = `conic-gradient(#111827 ${score * 3.6}deg, #f5f5f5 0deg)`

  return (
    <div className="relative h-32 w-32 rounded-full p-2" style={{ background }}>
      <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-white">
        <span className="text-4xl font-bold tracking-tight text-neutral-900">{score}</span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">Score</span>
      </div>
    </div>
  )
}

function CharacterBar({ check }: { check: Check }) {
  if (typeof check.length !== 'number') return null

  const range = recommendedRanges[check.id]
  if (!range) return null

  const width = Math.min((check.length / range.hardMax) * 100, 100)
  const goodStart = (range.min / range.hardMax) * 100
  const goodWidth = ((range.max - range.min) / range.hardMax) * 100

  return (
    <div className="mt-4">
      <div className="mb-1.5 flex items-center justify-between text-[11px] text-neutral-400">
        <span>{check.length} characters</span>
        <span>{range.min}-{range.max} ideal</span>
      </div>
      <div className="relative h-2 overflow-hidden rounded-full bg-neutral-100">
        <div
          className="absolute top-0 h-full rounded-full bg-emerald-100"
          style={{ left: `${goodStart}%`, width: `${goodWidth}%` }}
        />
        <div
          className={`relative h-full rounded-full ${statusStyles[check.status].dot}`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

function CheckCard({ check }: { check: Check }) {
  return (
    <div className="rounded-lg border border-neutral-100 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-sm font-semibold text-neutral-900">{check.label}</h3>
          <p className="mt-1 text-xs leading-relaxed text-neutral-500">{check.message}</p>
        </div>
        <StatusBadge status={check.status} />
      </div>

      <div className="mt-4 rounded-lg bg-neutral-50 px-3 py-2">
        <p className="break-words text-xs leading-relaxed text-neutral-700">
          {check.value || 'Missing'}
        </p>
      </div>

      <CharacterBar check={check} />

      <p className="mt-3 text-[11px] leading-relaxed text-neutral-400">
        Best practice: {check.ideal}
      </p>
    </div>
  )
}

function ScoreBreakdown({ report }: { report: SeoReport }) {
  const total = report.checks.length

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {(['good', 'needs-improvement', 'bad'] as Status[]).map(status => {
        const count = report.counts[status]
        const width = total ? Math.round((count / total) * 100) : 0
        const styles = statusStyles[status]

        return (
          <div key={status} className="rounded-lg border border-neutral-100 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <span className={`text-xs font-medium ${styles.text}`}>{styles.label}</span>
              <span className="text-lg font-bold text-neutral-900">{count}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-neutral-100">
              <div className={`h-full rounded-full ${styles.dot}`} style={{ width: `${width}%` }} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

function PreviewCards({ report }: { report: SeoReport }) {
  const og = report.extracted.openGraph
  const twitter = report.extracted.twitter
  const serpTitle = report.extracted.title || 'Missing title tag'
  const serpDescription = report.extracted.description || 'Missing meta description'
  const socialTitle = og['og:title'] || report.extracted.title || 'Missing social title'
  const socialDescription = og['og:description'] || report.extracted.description || 'Missing social description'
  const socialImage = og['og:image'] || twitter['twitter:image']

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-lg border border-neutral-100 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-neutral-400">
          <Search className="h-3.5 w-3.5" />
          Search Preview
        </div>
        <p className="truncate text-[13px] text-emerald-700">{report.finalUrl}</p>
        <p className="mt-1 line-clamp-2 text-xl font-medium leading-snug text-blue-700">{serpTitle}</p>
        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-neutral-600">{serpDescription}</p>
      </div>

      <div className="overflow-hidden rounded-lg border border-neutral-100 bg-white shadow-sm">
        {socialImage ? (
          <div
            className="aspect-[1.91/1] bg-neutral-100 bg-cover bg-center"
            style={{ backgroundImage: `url(${socialImage})` }}
          />
        ) : (
          <div className="flex aspect-[1.91/1] items-center justify-center bg-neutral-100 text-neutral-300">
            <Share2 className="h-8 w-8" />
          </div>
        )}
        <div className="p-5">
          <div className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-neutral-400">
            <Share2 className="h-3.5 w-3.5" />
            Social Preview
          </div>
          <p className="line-clamp-2 text-base font-semibold text-neutral-900">{socialTitle}</p>
          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-neutral-500">{socialDescription}</p>
          <p className="mt-3 truncate text-[11px] uppercase tracking-[0.15em] text-neutral-300">{new URL(report.finalUrl).hostname}</p>
        </div>
      </div>
    </div>
  )
}

function MetaTable({ title, tags }: { title: string; tags: Record<string, string> }) {
  const entries = Object.entries(tags)

  return (
    <div className="rounded-lg border border-neutral-100 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-sm font-semibold text-neutral-900">{title}</h3>
      {entries.length === 0 ? (
        <p className="text-xs text-neutral-400">No tags found.</p>
      ) : (
        <div className="space-y-2">
          {entries.map(([key, value]) => (
            <div key={key} className="grid gap-2 rounded-lg bg-neutral-50 p-3 md:grid-cols-[180px_1fr]">
              <code className="text-[11px] text-neutral-500">{key}</code>
              <p className="break-words text-xs leading-relaxed text-neutral-700">{value}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

type SeoToolClientProps = {
  config?: SeoToolPageConfig
}

export default function SeoToolClient({ config = seoToolPages.audit }: SeoToolClientProps) {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [report, setReport] = useState<SeoReport | null>(null)

  const primaryChecks = useMemo(() => {
    if (!report) return []
    return report.checks.filter(check => config.focusCheckIds.includes(check.id))
  }, [config.focusCheckIds, report])

  async function analyze(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    setReport(null)

    try {
      const response = await fetch('/api/seo/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.error ?? 'Could not analyze that URL.')
      setReport(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not analyze that URL.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="bg-white">
      <section className="border-b border-neutral-100 px-5 pb-12 pt-28 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-start justify-between gap-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">{config.eyebrow}</span>
            <span className="text-right text-[10px] uppercase tracking-[0.25em] text-neutral-400">{config.kicker}</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-end">
            <div>
              <h1
                className="font-bold leading-[1.0] tracking-tight text-neutral-900"
                style={{ fontSize: 'clamp(2.8rem, 7vw, 6.5rem)' }}
              >
                {config.headline[0]}<br />
                <span className="text-neutral-300">{config.headline[1]}</span><br />
                {config.headline[2]}
              </h1>
              <p className="mt-7 max-w-xl text-base font-light leading-relaxed text-neutral-500 md:text-lg">
                {config.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {seoToolPageList.map(page => (
                  <Link
                    key={page.key}
                    href={page.path}
                    className={`rounded-full border px-3 py-1.5 text-[11px] font-medium transition-colors ${
                      page.key === config.key
                        ? 'border-neutral-900 bg-neutral-900 text-white'
                        : 'border-neutral-200 text-neutral-500 hover:border-neutral-900 hover:text-neutral-900'
                    }`}
                  >
                    {page.navLabel}
                  </Link>
                ))}
              </div>
            </div>

            <form onSubmit={analyze} className="rounded-lg border border-neutral-100 bg-neutral-50 p-4 shadow-sm">
              <label htmlFor="seo-url" className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                {config.formLabel}
              </label>
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  id="seo-url"
                  type="text"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                  placeholder={config.placeholder}
                  className="min-h-11 flex-1 rounded-full border border-neutral-200 bg-white px-4 text-sm text-neutral-900 outline-none focus:border-neutral-900"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 disabled:opacity-50"
                >
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
                  Analyze
                </button>
              </div>
              {error && (
                <p className="mt-3 rounded-lg border border-rose-100 bg-rose-50 px-3 py-2 text-xs text-rose-600">
                  {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {report ? (
        <section className="px-5 py-12 md:px-12 md:py-16 lg:px-20">
          <div className="mx-auto max-w-6xl space-y-8">
            <div className="grid gap-6 lg:grid-cols-[180px_1fr] lg:items-center">
              <div className="flex justify-center lg:justify-start">
                <ScoreRing score={report.score} />
              </div>
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 py-1 text-[11px] text-neutral-500">
                    <Globe2 className="h-3.5 w-3.5" />
                    HTTP {report.statusCode}
                  </span>
                  <Link
                    href={report.finalUrl}
                    target="_blank"
                    className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-neutral-200 px-3 py-1 text-[11px] text-neutral-500 hover:border-neutral-900 hover:text-neutral-900"
                  >
                    <span className="truncate">{report.finalUrl}</span>
                    <ExternalLink className="h-3 w-3 flex-shrink-0" />
                  </Link>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-neutral-900 md:text-4xl">
                  Metadata report is ready.
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                  Scores are based on common search and social preview signals. Use the flagged rows as a practical cleanup list before publishing or sharing the page.
                </p>
              </div>
            </div>

            <ScoreBreakdown report={report} />
            <PreviewCards report={report} />

            <div>
              <div className="mb-4 flex items-center gap-2">
                <Gauge className="h-4 w-4 text-neutral-400" />
                <h2 className="text-lg font-bold tracking-tight text-neutral-900">Priority Checks</h2>
              </div>
              <div className="grid gap-3 lg:grid-cols-2">
                {primaryChecks.map(check => (
                  <CheckCard key={check.id} check={check} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-lg font-bold tracking-tight text-neutral-900">Technical Signals</h2>
              <div className="grid gap-3 lg:grid-cols-2">
                {report.checks.filter(check => !primaryChecks.includes(check)).map(check => (
                  <CheckCard key={check.id} check={check} />
                ))}
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <MetaTable title="Open Graph Tags" tags={report.extracted.openGraph} />
              <MetaTable title="Twitter/X Tags" tags={report.extracted.twitter} />
            </div>

            <div className="rounded-lg border border-neutral-100 bg-neutral-900 p-6 text-white">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">Need the fixes handled?</p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight">Creative Wired can clean this up.</h2>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
                >
                  Get SEO Help
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="px-5 py-12 md:px-12 md:py-16 lg:px-20">
          <div className="mx-auto max-w-6xl space-y-10">
            <div className="grid gap-3 md:grid-cols-3">
              {config.emptyCards.map(([title, text]) => (
                <div key={title} className="rounded-lg border border-neutral-100 bg-neutral-50 p-6">
                  <h2 className="text-sm font-semibold text-neutral-900">{title}</h2>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-500">{text}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-8 lg:grid-cols-[0.75fr_1fr]">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">How it works</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900">
                  A practical page check, not a vanity score.
                </h2>
              </div>
              <div className="grid gap-3">
                {config.guide.map(section => (
                  <div key={section.title} className="rounded-lg border border-neutral-100 bg-white p-5 shadow-sm">
                    <h3 className="text-sm font-semibold text-neutral-900">{section.title}</h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-neutral-500">{section.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
