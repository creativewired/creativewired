export interface TOCItem {
  id: string
  text: string
  level: number
}

export function generateTOC(htmlContent: string): TOCItem[] {
  if (typeof window === 'undefined') return []

  const parser = new DOMParser()
  const doc = parser.parseFromString(htmlContent, 'text/html')
  const headings = doc.querySelectorAll('h1, h2, h3')
  
  const toc: TOCItem[] = []
  
  headings.forEach((heading, index) => {
    const text = heading.textContent || ''
    const level = parseInt(heading.tagName.substring(1))
    const id = `heading-${index}-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
    
    // Add ID to heading for anchor links
    heading.id = id
    
    toc.push({ id, text, level })
  })
  
  return toc
}

export function calculateReadingTime(htmlContent: string): number {
  const text = htmlContent.replace(/<[^>]*>/g, '') // Strip HTML
  const words = text.trim().split(/\s+/).length
  const wordsPerMinute = 200
  return Math.ceil(words / wordsPerMinute)
}
