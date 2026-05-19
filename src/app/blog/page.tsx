import { ArrowRight, ArrowUpRight, Calendar, Clock, Tag, Filter } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getAllPosts } from '@/lib/blog'

export const metadata = {
  title: 'Digital Marketing Blog - Expert Tips & Insights | Creative Wired',
  description: 'Stay updated with the latest digital marketing trends, SEO tips, social media strategies, and expert insights from Creative Wired.',
}

const categoryColors: Record<string, string> = {
  'SEO':                    'bg-green-50  text-green-700  border-green-100',
  'Paid Advertising':       'bg-blue-50   text-blue-700   border-blue-100',
  'Web Development':        'bg-purple-50 text-purple-700 border-purple-100',
  'Social Media':           'bg-orange-50 text-orange-700 border-orange-100',
  'Software Development':   'bg-rose-50   text-rose-700   border-rose-100',
  'General':                'bg-neutral-50 text-neutral-600 border-neutral-200',
}

export default function BlogPage() {
  const posts       = getAllPosts()
  const featured    = posts.find(p => p.featured) ?? posts[0]
  const restPosts   = posts.filter(p => p.slug !== featured?.slug)
  const categories  = ['All', ...Array.from(new Set(posts.map(p => p.category)))]
  const allTags     = Array.from(new Set(posts.flatMap(p => p.tags))).slice(0, 12)

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header currentPage="blog" />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="min-h-[40vh] flex flex-col justify-between pt-28 pb-12 px-5 md:px-12 lg:px-20 bg-white border-b border-neutral-100">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex items-start justify-between mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">Blog</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
              SEO · Ads · Web · Software
            </span>
          </div>

          <h1
            className="font-bold leading-[1.0] tracking-tight text-neutral-900 mb-6"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6.5rem)' }}
          >
            Insights that<br />
            <span className="text-neutral-300">actually help</span><br />
            you grow.
          </h1>

          <p className="text-base md:text-lg text-neutral-500 font-light leading-relaxed max-w-xl">
            Digital marketing guides, SEO playbooks and web development insights for businesses in{' '}
            <span className="text-neutral-800 font-medium">UAE and India</span>.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CATEGORY FILTER
      ══════════════════════════════════════════ */}
      <section className="py-6 px-5 md:px-12 lg:px-20 border-b border-neutral-100 bg-white sticky top-16 z-40">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2">
          {categories.map((cat, i) => (
            <Link
              key={i}
              href={cat === 'All' ? '/blog' : `/blog?category=${encodeURIComponent(cat)}`}
              className="text-[11px] uppercase tracking-[0.15em] px-3.5 py-1.5 rounded-full border border-neutral-200 text-neutral-500 hover:border-neutral-900 hover:text-neutral-900 transition-all"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURED POST
      ══════════════════════════════════════════ */}
      {featured && (
        <section className="py-14 px-5 md:px-12 lg:px-20 bg-white border-b border-neutral-100">
          <div className="max-w-6xl mx-auto">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-8">Featured</p>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid md:grid-cols-2 gap-8 md:gap-14 items-center"
            >
              {featured.image && (
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`text-[10px] font-medium px-2.5 py-1 rounded-full border ${categoryColors[featured.category] ?? categoryColors['General']}`}>
                    {featured.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-snug tracking-tight mb-3 group-hover:text-neutral-600 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-sm text-neutral-500 font-light leading-relaxed mb-5">
                  {featured.description}
                </p>
                <div className="flex items-center gap-4 text-[11px] text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {new Date(featured.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {featured.readingTime}
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 text-sm text-neutral-400 group-hover:text-neutral-900 group-hover:gap-3 transition-all mt-6">
                  Read article <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════
          POSTS GRID + SIDEBAR
      ══════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-12 lg:px-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-10">

            {/* Posts grid */}
            <div className="lg:col-span-3">
              {restPosts.length === 0 ? (
                <p className="text-sm text-neutral-400 font-light">No more posts yet — check back soon.</p>
              ) : (
                <div className="grid sm:grid-cols-2 gap-3">
                  {restPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group flex flex-col justify-between rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-300 overflow-hidden"
                    >
                      {post.image && (
                        <div className="relative aspect-[16/9] bg-neutral-100 overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className={`text-[10px] font-medium px-2.5 py-1 rounded-full border ${categoryColors[post.category] ?? categoryColors['General']}`}>
                              {post.category}
                            </span>
                            <ArrowUpRight className="w-4 h-4 text-neutral-200 group-hover:text-neutral-900 transition-colors" />
                          </div>
                          <h2 className="text-base font-bold text-neutral-900 leading-snug tracking-tight mb-2 group-hover:text-neutral-600 transition-colors">
                            {post.title}
                          </h2>
                          <p className="text-xs text-neutral-500 font-light leading-relaxed line-clamp-2">
                            {post.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-4 text-[11px] text-neutral-400 pt-4 border-t border-neutral-100">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readingTime}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-5">

              {/* Categories */}
              <div className="rounded-2xl border border-neutral-100 bg-white p-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-4 flex items-center gap-2">
                  <Filter className="w-3 h-3" /> Categories
                </p>
                <div className="space-y-1">
                  {categories.map((cat, i) => (
                    <Link
                      key={i}
                      href={cat === 'All' ? '/blog' : `/blog?category=${encodeURIComponent(cat)}`}
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-xs text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors"
                    >
                      <span>{cat}</span>
                      <span className="text-neutral-300">
                        {cat === 'All' ? posts.length : posts.filter(p => p.category === cat).length}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Tags */}
              {allTags.length > 0 && (
                <div className="rounded-2xl border border-neutral-100 bg-white p-6">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-4 flex items-center gap-2">
                    <Tag className="w-3 h-3" /> Tags
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {allTags.map((tag, i) => (
                      <span key={i} className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-50 border border-neutral-100 text-neutral-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="rounded-2xl bg-neutral-900 p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">Work With Us</p>
                <p className="text-white text-sm font-semibold leading-snug mb-4">
                  Need help growing your business online?
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

      <Footer />
    </div>
  )
}
