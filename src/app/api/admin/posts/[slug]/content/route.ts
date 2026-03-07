import { NextResponse } from 'next/server'
import { getSession } from '@/lib/cms-auth'
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'

const contentDir = join(process.cwd(), 'content/blog')

export async function POST(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { content } = await req.json()
  const filePath = join(contentDir, `${params.slug}.mdx`)

  if (!existsSync(filePath)) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 })
  }

  // Preserve frontmatter, only replace body content
  const existing    = readFileSync(filePath, 'utf-8')
  const frontmatter = existing.match(/^---[\s\S]*?---/)
  const newContent  = frontmatter
    ? `${frontmatter[0]}\n\n${content}`
    : content

  writeFileSync(filePath, newContent)

  return NextResponse.json({ success: true })
}