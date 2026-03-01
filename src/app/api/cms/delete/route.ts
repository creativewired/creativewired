import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/cms-auth'

export async function POST(req: NextRequest) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })

  const { filename } = await req.json()
  const path   = `content/blog/${filename}.mdx`
  const apiUrl = `https://api.github.com/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/contents/${path}`

  // Get SHA first
  const check = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept:        'application/vnd.github+json',
    },
  })
  if (!check.ok) return NextResponse.json({ error: 'File not found' }, { status: 404 })

  const { sha } = await check.json()

  const response = await fetch(apiUrl, {
    method:  'DELETE',
    headers: {
      Authorization:  `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept:         'application/vnd.github+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: `Delete blog post: ${filename}`,
      sha,
      branch: process.env.GITHUB_BRANCH ?? 'main',
    }),
  })

  if (!response.ok) {
    return NextResponse.json({ error: 'Delete failed' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
