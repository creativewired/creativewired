import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { caseStudies } from '../data/caseStudies'

export const metadata = {
  title: 'Case Studies | SEO, Web Dev & Paid Ads Results | Creative Wired',
  description: 'Real results from Creative Wired clients across Dubai, Abu Dhabi and Kochi. SEO, paid advertising, web development and social media case studies.',
}

const serviceColors: Record<string, string> = {
  'SEO':                    'bg-green-50  text-green-700  border-green-100',
  'Paid Advertising':       'bg-blue-50   text-blue-700   border-blue-100',
  'Web Development':        'bg-purple-50 text-purple-700 border-purple-100',
  'Social Media Management':'bg-orange-50 text-orange-700 border-orange-100',
  'Software Development':   'bg-rose-50   text-rose-700   border-rose-100',
}

export default function CaseStudiesPage() {

  const services = ['All', 'SEO', 'Paid Advertising', 'Web Development', 'Social Media Management', 'Software Development']

  return (
    <div className="w-full bg-white overflow-x-hidden">
      <Header currentPage="case-studies" />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="min-h-[45vh] flex flex-col justify-between pt-28 pb-12 px-5 md:px-12 lg:px-20 bg-white border-b border-neutral-100">
        <div className="max-w-6xl mx-auto w-full">

          <div className="flex items-start justify-between mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
              Case Studies
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
              Dubai · Abu Dhabi · Kochi
            </span>
          </div>

          <h1
            className="font-bold leading-[1.0] tracking-tight text-neutral-900 mb-8"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6.5rem)' }}
          >
            Results we're<br />
            <span className="text-neutral-300">proud to put</span><br />
            our name on.
          </h1>

          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-16">
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-lg font-light">
              Real clients. Real numbers. No stock results.
              Every case study below is a business in{' '}
              <span className="text-neutral-800 font-medium">UAE or India</span>{' '}
              that trusted us with their growth.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-700 transition-colors flex-shrink-0"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-100 mt-12 pt-8 border-t border-neutral-100">
            {[
              { n: '8',    l: 'Case Studies'       },
              { n: '5',    l: 'Services'            },
              { n: 'UAE',  l: '& India Clients'     },
              { n: '100%', l: 'Verified Results'    },
            ].map((s, i) => (
              <div key={i} className="px-5 py-3 first:pl-0">
                <div className="text-2xl font-bold text-neutral-900 tracking-tight">{s.n}</div>
                <div className="text-[11px] text-neutral-400 mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICE FILTER (static labels, no JS)
      ══════════════════════════════════════════ */}
      <section className="py-8 px-5 md:px-12 lg:px-20 border-b border-neutral-100 bg-white sticky top-16 z-40">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {services.map((s, i) => (
              <Link
                key={i}
                href={s === 'All' ? '/case-studies' : `/case-studies?service=${encodeURIComponent(s)}`}
                className="text-[11px] uppercase tracking-[0.15em] px-3.5 py-1.5 rounded-full border border-neutral-200 text-neutral-500 hover:border-neutral-900 hover:text-neutral-900 transition-all"
              >
                {s}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CASE STUDIES BENTO GRID
      ══════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-12 lg:px-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

            {caseStudies.map((cs, index) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className={`group relative flex flex-col justify-between rounded-2xl p-7 bg-white border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-300 overflow-hidden min-h-[280px]
                  ${index === 0 ? 'md:col-span-2' : ''}
                  ${index === 5 ? 'md:col-span-2' : ''}
                `}
              >
                {/* Ghost number */}
                <span className="absolute right-4 bottom-2 text-[90px] font-black text-neutral-50 leading-none select-none pointer-events-none">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex flex-wrap gap-2">
                      <span className={`text-[10px] font-medium px-2.5 py-1 rounded-full border ${serviceColors[cs.service] ?? 'bg-neutral-50 text-neutral-500 border-neutral-100'}`}>
                        {cs.service}
                      </span>
                      <span className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-50 border border-neutral-100 text-neutral-400">
                        {cs.location}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-200 group-hover:text-neutral-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-2" />
                  </div>

                  <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">{cs.industry}</p>
                  <h2 className="text-xl md:text-2xl font-bold text-neutral-900 leading-snug tracking-tight mb-2">
                    {cs.headline}
                  </h2>
                  <p className="text-sm text-neutral-500 font-light leading-relaxed">
                    {cs.subline}
                  </p>
                </div>

                {/* Metrics strip */}
                <div className="relative z-10 flex flex-wrap gap-4 mt-6 pt-5 border-t border-neutral-100">
                  {cs.metrics.slice(0, 3).map((m, i) => (
                    <div key={i}>
                      <div className="text-lg font-bold text-neutral-900 tracking-tight">{m.value}</div>
                      <div className="text-[10px] text-neutral-400">{m.label}</div>
                    </div>
                  ))}
                </div>
              </Link>
            ))}

            {/* CTA card */}
            <Link
              href="/contact"
              className="group flex flex-col justify-between rounded-2xl border border-neutral-100 shadow-sm p-7 min-h-[280px] bg-white hover:shadow-md hover:border-neutral-300 transition-all duration-300"
            >
              <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">Work With Us</span>
              <div>
                <p className="text-neutral-900 font-semibold text-xl leading-snug mb-3">
                  Want to be<br />our next case study?
                </p>
                <div className="inline-flex items-center gap-2 text-sm text-neutral-400 group-hover:text-neutral-900 group-hover:gap-3 transition-all">
                  Start a project
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
