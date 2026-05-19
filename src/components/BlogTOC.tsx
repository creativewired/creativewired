'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

type TOCItem = { id: string; text: string; level: number }

export default function BlogTOC() {
  const [toc, setToc] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // Find headings in rendered content
    const container = document.getElementById('blog-article')
    if (!container) return

    const headings = Array.from(container.querySelectorAll('h2, h3')) as HTMLElement[]

    const items: TOCItem[] = headings.map((h, idx) => {
      // Ensure each heading has an id
      if (!h.id) {
        const slug = h.innerText.toLowerCase().replace(/[^a-z0-9]+/g, '-')
        h.id = `${slug}-${idx}`
      }
      return {
        id: h.id,
        text: h.innerText,
        level: h.tagName === 'H2' ? 2 : 3,
      }
    })

    setToc(items)

    // Observe headings for active state
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1))
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '0px 0px -70% 0px', threshold: [0, 1] }
    )

    headings.forEach((h) => observer.observe(h))
    return () => observer.disconnect()
  }, [])

  if (toc.length === 0) {
    return null
  }

  return (
    <nav className="sticky top-24 max-h-[70vh] overflow-auto pr-4">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">On this page</h3>
      <ul className="space-y-2">
        {toc.map((item) => (
          <li key={item.id} className={`text-sm ${item.level === 3 ? 'ml-4' : ''}`}>
            <a
              href={`#${item.id}`}
              className={`block hover:text-yellow-600 transition-colors ${
                activeId === item.id ? 'text-yellow-600 font-medium' : 'text-gray-600'
              }`}
              onClick={(e) => {
                e.preventDefault()
                const target = document.getElementById(item.id)
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  history.replaceState(null, '', `#${item.id}`)
                }
              }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
