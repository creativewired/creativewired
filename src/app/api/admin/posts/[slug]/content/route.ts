import { NextResponse } from 'next/server'
import { getSession } from '@/lib/cms-auth'
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'

const contentDir = join(process.cwd(), 'content/blog')

export async function POST(
  req: Request,
<<<<<<< HEAD
  { params }: { params: Promise<{ slug: string }> }
=======
  { params }: { params: { slug: string } }
>>>>>>> 0a3e213644fd2188dca9293836780d225b9d8bb4
) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

<<<<<<< HEAD
  const { slug } = await params
  const { content } = await req.json()
  const filePath = join(contentDir, `${slug}.mdx`)
=======
  const { content } = await req.json()
  const filePath = join(contentDir, `${params.slug}.mdx`)
>>>>>>> 0a3e213644fd2188dca9293836780d225b9d8bb4

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
<<<<<<< HEAD
}
=======
}
>>>>>>> 0a3e213644fd2188dca9293836780d225b9d8bb4
