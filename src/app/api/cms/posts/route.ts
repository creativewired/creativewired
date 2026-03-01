import { NextResponse } from 'next/server'
import { getSession } from '@/lib/cms-auth'
import { getAllPosts } from '@/lib/blog'

export async function GET() {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })

  const posts = getAllPosts().map(({ slug, title, category, date, featured, readingTime }) => ({
    slug, title, category, date, featured, readingTime,
  }))

  return NextResponse.json({ posts })
}
