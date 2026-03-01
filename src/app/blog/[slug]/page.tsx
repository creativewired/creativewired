import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag, ArrowUpRight } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { getAllPosts, getPostBySlug } from '../../../lib/blog'

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title:       `${post.title} | Creative Wired Blog`,
    description: post.description,
    openGraph: {
      title:       post.title,
      description: post.description,
      images:      post.image ? [post.image] : [],
    },
  }
}

const categoryColors: Record<string, string> = {
  'SEO':                    'bg-green-50  text-green-700  border-green-100',
  'Paid Advertising':       'bg-blue-50   text-blue-700   border-blue-100',
  'Web Development':        'bg-purple-50 text-purple-700 border-purple-100',
  'Social Media':           'bg-orange-50 text-orange-700 border-orange-100',
  'Software Development':   'bg-rose-50   text-rose-700   border-rose-100',
  'General':                'bg-neutral-50 text-neutral-600 border-neutral-200',
}

const components = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-bold text-neutral-900 tracking-tight mt-12 mb-4 pb-2 border-b border-neutral-100" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-semibold text-neutral-900 tracking-tight mt-8 mb-3" {...props} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-base font-semibold text-neutral-900 mt-6 mb-2" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-base text-neutral-600 leading-relaxed font-light mb-5" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="space-y-2 mb-5 pl-5" {...props} />
  ),
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="space-y-2 mb-5 pl-5 list-decimal" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-base text-neutral-600 font-light leading-relaxed list-disc" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition-all" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-2 border-neutral-200 pl-5 my-6 text-neutral-500 italic font-light" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-neutral-100 text-neutral-700 text-sm px-1.5 py-0.5 rounded font-mono" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-neutral-950 text-neutral-100 rounded-2xl p-6 overflow-x-auto text-sm font-mono my-6 leading-relaxed" {...props} />
  ),
  hr:  () => <hr className="border-neutral-100 my-10" />,
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img className="rounded-2xl w-full h-auto my-6" {...props} />
  ),
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const allPosts   = getAllPosts()
  const currentIdx = allPosts.findIndex(p => p.slug === post.slug)
  const related    = allPosts.filter(p => p.slug !== post.slug && p.category === post.category).slice(0, 3)
  const prev       = allPosts[currentIdx - 1] ?? null
  const next       = allPosts[currentIdx + 1] ?? null

  // Structured data
  const articleSchema = {
    '@context':        'https://schema.org',
    '@type':           'Article',
    headline:          post.title,
    description:       post.description,
    image:             post.image,
    author:            { '@type': 'Person', name: post.author },
    publisher:         { '@type': 'Organization', name: 'Creative Wired', logo: { '@type': 'ImageObject', url: 'https://creativewired.agency/logo.png' } },
    datePublished:     post.date,
    mainEntityOfPage:  { '@type': 'WebPage', '@id': `https://creativewired.agency/blog/${post.slug}` },
  }

  return (
    <div className="w-full bg-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <Header currentPage="blog" />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="pt-28 pb-12 px-5 md:px-12 lg:px-20 bg-white border-b border-neutral-100">
        <div className="max-w-6xl mx-auto">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-[11px] text-neutral-400 hover:text-neutral-900 transition-colors uppercase tracking-[0.15em]"
            >
              <ArrowLeft className="w-3 h-3" /> Blog
            </Link>
            <span className="text-neutral-200">/</span>
            <span className="text-[11px] text-neutral-400 uppercase tracking-[0.15em]">{post.category}</span>
          </div>

          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-5">
              <span className={`text-[10px] font-medium px-2.5 py-1 rounded-full border ${categoryColors[post.category] ?? categoryColors['General']}`}>
                {post.category}
              </span>
              {post.tags.slice(0, 3).map((t, i) => (
                <span key={i} className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-50 border border-neutral-100 text-neutral-400">
                  {t}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 leading-tight tracking-tight mb-5">
              {post.title}
            </h1>
            <p className="text-base md:text-lg text-neutral-500 font-light leading-relaxed mb-7">
              {post.description}
            </p>

            <div className="flex flex-wrap items-center gap-5 text-[11px] text-neutral-400 pt-6 border-t border-neutral-100">
              <span className="font-medium text-neutral-700 text-xs">{post.author}</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3 h-3" />
                {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3 h-3" />
                {post.readingTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured image */}
      {post.image && (
        <div className="px-5 md:px-12 lg:px-20 py-10 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-neutral-100">
              <Image src={post.image} alt={post.title} fill className="object-cover" priority />
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════
          CONTENT + SIDEBAR
      ══════════════════════════════════════════ */}
      <section className="py-14 px-5 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">

            <article className="md:col-span-8" id="blog-article">
              <MDXRemote source={post.content} components={components} />

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-neutral-100">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-3.5 h-3.5 text-neutral-400" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">Tags</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-50 border border-neutral-100 text-neutral-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="md:col-span-4 space-y-5">
              <div className="rounded-2xl bg-neutral-900 p-6 sticky top-24">
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">Work With Us</p>
                <p className="text-white text-sm font-semibold leading-snug mb-4">
                  Need help with {post.category} for your UAE or India business?
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-neutral-900 text-xs font-semibold px-4 py-2.5 rounded-full hover:bg-neutral-100 transition-colors"
                >
                  Get Free Consultation
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          RELATED POSTS
      ══════════════════════════════════════════ */}
      {related.length > 0 && (
        <section className="py-16 px-5 md:px-12 lg:px-20 bg-neutral-50 border-t border-neutral-100">
          <div className="max-w-6xl mx-auto">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-8">Related Articles</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all p-6"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-medium px-2.5 py-1 rounded-full border ${categoryColors[p.category] ?? categoryColors['General']}`}>
                      {p.category}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-200 group-hover:text-neutral-900 transition-colors" />
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 leading-snug mb-2 group-hover:text-neutral-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-neutral-500 font-light line-clamp-2">{p.description}</p>
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-neutral-100 text-[11px] text-neutral-400">
                    <span>{new Date(p.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    <span>{p.readingTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════
          PREV / NEXT
      ══════════════════════════════════════════ */}
      <section className="py-10 px-5 md:px-12 lg:px-20 bg-white border-t border-neutral-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
          {prev ? (
            <Link href={`/blog/${prev.slug}`} className="group flex flex-col gap-2 rounded-2xl border border-neutral-100 bg-white p-6 hover:border-neutral-300 hover:shadow-sm transition-all">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                <ArrowLeft className="w-3 h-3" /> Previous
              </div>
              <p className="text-sm font-semibold text-neutral-900 group-hover:text-neutral-600 transition-colors leading-snug">
                {prev.title}
              </p>
            </Link>
          ) : <div />}

          {next ? (
            <Link href={`/blog/${next.slug}`} className="group flex flex-col gap-2 rounded-2xl border border-neutral-100 bg-white p-6 hover:border-neutral-300 hover:shadow-sm transition-all sm:items-end sm:text-right">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                Next <ArrowRight className="w-3 h-3" />
              </div>
              <p className="text-sm font-semibold text-neutral-900 group-hover:text-neutral-600 transition-colors leading-snug">
                {next.title}
              </p>
            </Link>
          ) : <div />}
        </div>
      </section>

      <Footer />
    </div>
  )
}
