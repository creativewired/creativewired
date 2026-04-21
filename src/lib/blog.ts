import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export type BlogPost = {
  slug:        string
  title:       string
  description: string
  date:        string
  author:      string
  category:    string
  tags:        string[]
  image:       string
  featured:    boolean
  readingTime: string
  content:     string
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'))
  return files
    .map((file) => {
      const slug   = file.replace('.mdx', '')
      const source = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8')
      const { data, content } = matter(source)
      return {
        slug,
        title:       data.title       ?? '',
        description: data.description ?? '',
        date:        data.date        ?? '',
        author:      data.author      ?? 'Creative Wired',
        category:    data.category    ?? 'General',
        tags:        data.tags        ?? [],
        image:       data.image       ?? '',
        featured:    data.featured    ?? false,
        readingTime: readingTime(content).text,
        content,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const source = fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`), 'utf8')
    const { data, content } = matter(source)
    return {
      slug,
      title:       data.title       ?? '',
      description: data.description ?? '',
      date:        data.date        ?? '',
      author:      data.author      ?? 'Creative Wired',
      category:    data.category    ?? 'General',
      tags:        data.tags        ?? [],
      image:       data.image       ?? '',
      featured:    data.featured    ?? false,
      readingTime: readingTime(content).text,
      content,
    }
  } catch { return null }
}
