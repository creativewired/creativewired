import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle } from 'lucide-react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { caseStudies } from '../../data/caseStudies'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) return {}
  return {
    title:       `${cs.headline} — ${cs.client} | Creative Wired`,
    description: cs.subline,
  }
}

const serviceColors: Record<string, string> = {
  'SEO':                     'bg-green-50  text-green-700  border-green-100',
  'Paid Advertising':        'bg-blue-50   text-blue-700   border-blue-100',
  'Web Development':         'bg-purple-50 text-purple-700 border-purple-100',
  'Social Media Management': 'bg-orange-50 text-orange-700 border-orange-100',
  'Software Development':    'bg-rose-50   text-rose-700   border-rose-100',
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) notFound()

  const currentIndex = caseStudies.indexOf(cs)
  const prev = caseStudies[currentIndex - 1] ?? null
  const next = caseStudies[currentIndex + 1] ?? null

  return (
    <div className="w-full bg-white overflow-x-hidden">
      <Header currentPage="case-studies" />

      {/* HERO */}
      <section className="min-h-[55vh] flex flex-col justify-between pt-28 pb-12 px-5 md:px-12 lg:px-20 bg-white border-b border-neutral-100">
        <div className="max-w-6xl mx-auto w-full">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-10">
            <Link href="/case-studies" className="inline-flex items-center gap-1.5 text-[11px] text-neutral-400 hover:text-neutral-900 transition-colors uppercase tracking-[0.15em]">
              <ArrowLeft className="w-3 h-3" />
              Case Studies
            </Link>
            <span className="text-neutral-200">/</span>
            <span className="text-[11px] text-neutral-400 uppercase tracking-[0.15em]">{cs.service}</span>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className={`text-[10px] font-medium px-2.5 py-1 rounded-full border ${serviceColors[cs.service] ?? 'bg-neutral-50 text-neutral-500 border-neutral-100'}`}>
              {cs.service}
            </span>
            <span className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-50 border border-neutral-100 text-neutral-400">
              {cs.location}
            </span>
            <span className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-50 border border-neutral-100 text-neutral-400">
              {cs.industry}
            </span>
          </div>

          <h1 className="font-bold leading-[1.0] tracking-tight text-neutral-900 mb-6" style={{ fontSize: 'clamp(2.4rem, 6vw, 5.5rem)' }}>
            {cs.headline}
          </h1>

          <p className="text-base md:text-xl text-neutral-500 font-light leading-relaxed max-w-2xl mb-10">
            {cs.subline}
          </p>

          {/* Meta strip */}
          <div className="flex flex-wrap gap-6 text-[11px] text-neutral-400 uppercase tracking-wider pt-8 border-t border-neutral-100">
            <div><span className="text-neutral-300">Client</span><br /><span className="text-neutral-700 font-medium normal-case tracking-normal text-xs">{cs.client}</span></div>
            <div><span className="text-neutral-300">Industry</span><br /><span className="text-neutral-700 font-medium normal-case tracking-normal text-xs">{cs.industry}</span></div>
            <div><span className="text-neutral-300">Location</span><br /><span className="text-neutral-700 font-medium normal-case tracking-normal text-xs">{cs.location}</span></div>
            <div><span className="text-neutral-300">Timeline</span><br /><span className="text-neutral-700 font-medium normal-case tracking-normal text-xs">{cs.timeline}</span></div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="py-14 px-5 md:px-12 lg:px-20 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className={`grid grid-cols-2 md:grid-cols-${cs.metrics.length} divide-x divide-neutral-100`}>
            {cs.metrics.map((m, i) => (
              <div key={i} className="px-6 py-4 first:pl-0">
                <div className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-1">{m.value}</div>
                <div className="text-[11px] text-neutral-400 uppercase tracking-wider">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="py-20 md:py-32 px-5 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">

            {/* Main content */}
            <div className="md:col-span-8 space-y-14">

              {/* Challenge */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-4">The Challenge</p>
                <p className="text-base md:text-lg text-neutral-700 leading-relaxed font-light">{cs.challenge}</p>
              </div>

              {/* Approach */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-6">Our Approach</p>
                <div className="space-y-3">
                  {cs.approach.map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-[10px] font-mono text-neutral-300 mt-1 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                      <p className="text-sm text-neutral-600 leading-relaxed font-light">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-6">The Results</p>
                <div className="space-y-3">
                  {cs.results.map((r, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-neutral-300 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-neutral-700 leading-relaxed font-light">{r}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="md:col-span-4 space-y-6">

              {cs.techStack && (
                <div className="rounded-2xl border border-neutral-100 p-6">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-4">Tech & Tools</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cs.techStack.map((t, i) => (
                      <span key={i} className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-50 border border-neutral-100 text-neutral-500">{t}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="rounded-2xl border border-neutral-100 p-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-4">Tags</p>
                <div className="flex flex-wrap gap-1.5">
                  {cs.tags.map((t, i) => (
                    <span key={i} className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-50 border border-neutral-100 text-neutral-500">{t}</span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-neutral-900 p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-3">Get similar results</p>
                <p className="text-white text-sm font-semibold leading-snug mb-4">
                  Want us to do this for your business in UAE or India?
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-neutral-900 text-xs font-semibold px-4 py-2.5 rounded-full hover:bg-neutral-100 transition-colors">
                  Start a Project
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* PREV / NEXT */}
      <section className="py-14 px-5 md:px-12 lg:px-20 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

            {prev ? (
              <Link href={`/case-studies/${prev.slug}`} className="group flex flex-col gap-2 rounded-2xl border border-neutral-100 bg-white p-6 hover:border-neutral-300 hover:shadow-sm transition-all duration-200">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                  <ArrowLeft className="w-3 h-3" /> Previous
                </div>
                <p className="text-sm font-semibold text-neutral-900 group-hover:text-neutral-700 transition-colors leading-snug">{prev.headline}</p>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border w-fit ${serviceColors[prev.service] ?? ''}`}>{prev.service}</span>
              </Link>
            ) : <div />}

            {next ? (
              <Link href={`/case-studies/${next.slug}`} className="group flex flex-col gap-2 rounded-2xl border border-neutral-100 bg-white p-6 hover:border-neutral-300 hover:shadow-sm transition-all duration-200 sm:text-right sm:items-end">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                  Next <ArrowRight className="w-3 h-3" />
                </div>
                <p className="text-sm font-semibold text-neutral-900 group-hover:text-neutral-700 transition-colors leading-snug">{next.headline}</p>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border w-fit ${serviceColors[next.service] ?? ''}`}>{next.service}</span>
              </Link>
            ) : <div />}

          </div>

          <div className="mt-6 text-center">
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-900 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" /> All Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
