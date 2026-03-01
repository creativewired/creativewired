import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/cms-auth'

export async function POST(req: NextRequest) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })

  const { filename, content } = await req.json()

  if (!filename || !content) {
    return NextResponse.json({ error: 'Missing filename or content' }, { status: 400 })
  }

  const path     = `content/blog/${filename}.mdx`
  const encoded  = Buffer.from(content).toString('base64')
  const apiUrl   = `https://api.github.com/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/contents/${path}`

  // Check if file already exists (for updates)
  let sha: string | undefined
  try {
    const check = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept:        'application/vnd.github+json',
      },
    })
    if (check.ok) {
      const existing = await check.json()
      sha = existing.sha
    }
  } catch {}

  // Commit to GitHub
  const response = await fetch(apiUrl, {
    method:  'PUT',
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept:        'application/vnd.github+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: sha ? `Update blog post: ${filename}` : `Add blog post: ${filename}`,
      content: encoded,
      branch:  process.env.GITHUB_BRANCH ?? 'main',
      ...(sha ? { sha } : {}),
    }),
  })

  if (!response.ok) {
    const err = await response.json()
    return NextResponse.json({ error: err.message ?? 'GitHub commit failed' }, { status: 500 })
  }

  return NextResponse.json({ success: true, path })
}
