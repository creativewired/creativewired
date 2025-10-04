interface StructuredDataProps {
  post: {
    title: string
    excerpt?: string
    content: string
    featured_image?: string
    author_name?: string
    published_at?: string
    updated_at: string
    slug: string
    schema_type: string
    faq_items?: Array<{ question: string; answer: string }>
    reading_time?: number
  }
}

export default function StructuredData({ post }: StructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://creativewired.agency'
  
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': post.schema_type || 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.featured_image,
    author: {
      '@type': 'Person',
      name: post.author_name || 'Creative Wired',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Creative Wired',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    datePublished: post.published_at,
    dateModified: post.updated_at,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/blog/${post.slug}`,
    },
    ...(post.reading_time && {
      timeRequired: `PT${post.reading_time}M`,
    }),
  }

  const faqSchema = post.faq_items && post.faq_items.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq_items.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  )
}
