import { MetadataRoute } from 'next'
import { readdirSync, existsSync } from 'fs'
import { join } from 'path'

const domain = 'https://creativewired.com'

function getSlugs(folder: string): string[] {
  const dir = join(process.cwd(), folder)
  if (!existsSync(dir)) return []
  return readdirSync(dir)
    .filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
    .map(f => f.replace(/\.mdx?$/, ''))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogSlugs      = getSlugs('content/blog')        // ← updated
  const caseStudySlugs = getSlugs('content/case-studies') // ← updated

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${domain}`,                                          priority: 1.0, changeFrequency: 'daily'   },
    { url: `${domain}/services`,                                 priority: 0.9, changeFrequency: 'weekly'  },
    { url: `${domain}/services/seo`,                             priority: 0.9, changeFrequency: 'weekly'  },
    { url: `${domain}/services/web-development`,                 priority: 0.9, changeFrequency: 'weekly'  },
    { url: `${domain}/services/paid-advertising`,                priority: 0.9, changeFrequency: 'weekly'  },
    { url: `${domain}/services/social-media-management`,         priority: 0.9, changeFrequency: 'weekly'  },
    { url: `${domain}/services/software-development`,            priority: 0.9, changeFrequency: 'weekly'  },
    { url: `${domain}/projects`,                                 priority: 0.8, changeFrequency: 'weekly'  },
    { url: `${domain}/case-studies`,                             priority: 0.8, changeFrequency: 'weekly'  },
    { url: `${domain}/blog`,                                     priority: 0.8, changeFrequency: 'daily'   },
    { url: `${domain}/contact`,                                  priority: 0.7, changeFrequency: 'monthly' },
  ]

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map(slug => ({
    url:             `${domain}/blog/${slug}`,
    priority:        0.8,
    changeFrequency: 'weekly' as const,
  }))

  const caseStudyPages: MetadataRoute.Sitemap = caseStudySlugs.map(slug => ({
    url:             `${domain}/case-studies/${slug}`,
    priority:        0.7,
    changeFrequency: 'monthly' as const,
  }))

  return [...staticPages, ...blogPages, ...caseStudyPages]
}
