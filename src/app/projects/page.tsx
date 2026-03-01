import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { projects } from '../data/projects'

export const metadata: Metadata = {
  title: 'Our Projects | Creative Wired — Web Development Portfolio Dubai & Kerala',
  description: "Browse Creative Wired's project portfolio — websites, web apps and digital platforms built for clients in Dubai, Abu Dhabi, Kerala and India.",
}

const serviceColors: Record<string, string> = {
  'Web Development':         'bg-purple-50 text-purple-700 border-purple-100',
  'SEO':                     'bg-green-50  text-green-700  border-green-100',
  'Paid Advertising':        'bg-blue-50   text-blue-700   border-blue-100',
  'Social Media Management': 'bg-orange-50 text-orange-700 border-orange-100',
  'Software Development':    'bg-rose-50   text-rose-700   border-rose-100',
}

export default function ProjectsPage() {
  const featured = projects.filter(p => p.featured)
  const rest     = projects.filter(p => !p.featured)

  return (
    <div className="w-full bg-white overflow-x-hidden">
      <Header currentPage="projects" />

      {/* HERO */}
      <section className="min-h-[52vh] flex flex-col justify-between pt-28 pb-12 px-5 md:px-12 lg:px-20 bg-white border-b border-neutral-100">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex items-start justify-between mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">Our Work</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">{projects.length} Projects</span>
          </div>
          <h1 className="font-bold leading-[1.0] tracking-tight text-neutral-900 mb-8" style={{ fontSize: 'clamp(2.8rem, 7vw, 6.5rem)' }}>
            Built to perform.<br />
            <span className="text-neutral-300">Designed to convert.</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-16">
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-md font-light">
              A selection of websites, platforms and digital products we've built for clients across{' '}
              <span className="text-neutral-800 font-medium">Dubai, Abu Dhabi, Kerala and India</span>.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-neutral-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-700 transition-colors flex-shrink-0"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-x-8 gap-y-2 mt-12 pt-8 border-t border-neutral-100">
            {[
              { n: '500+', l: 'Projects Delivered' },
              { n: '7+',   l: 'Industries'         },
              { n: 'UAE',  l: '& India Based'      },
              { n: '100%', l: 'Custom Builds'      },
            ].map((s, i) => (
              <div key={i}>
                <span className="text-sm font-bold text-neutral-900">{s.n}</span>
                <span className="text-[11px] text-neutral-400 ml-1.5 uppercase tracking-wider">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED GRID */}
      <section className="py-20 md:py-28 px-5 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-10">Featured Projects</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featured.map((p, i) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className={`group relative rounded-2xl overflow-hidden border border-neutral-100 hover:border-neutral-300 hover:shadow-lg transition-all duration-300 bg-neutral-50 ${i === 0 ? 'md:col-span-2' : ''}`}
              >
                {/* Image */}
                <div className={`relative w-full overflow-hidden bg-neutral-100 ${i === 0 ? 'h-72 md:h-96' : 'h-52 md:h-64'}`}>
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Arrow */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-900" />
                  </div>
                  {/* Year badge */}
                  <div className="absolute top-4 left-4 text-[10px] px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-neutral-500 font-mono">
                    {p.year}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h2 className="text-base font-bold text-neutral-900 group-hover:text-neutral-700 transition-colors">{p.name}</h2>
                      <p className="text-[11px] text-neutral-400 mt-0.5">{p.industry} · {p.location}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-neutral-900 transition-colors flex-shrink-0 mt-0.5" />
                  </div>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed mb-4">{p.tagline}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.services.map((s, si) => (
                      <span key={si} className={`text-[10px] font-medium px-2.5 py-1 rounded-full border ${serviceColors[s] ?? 'bg-neutral-50 text-neutral-500 border-neutral-100'}`}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Rest of projects */}
          {rest.length > 0 && (
            <>
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mt-16 mb-8">More Projects</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {rest.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="group rounded-2xl border border-neutral-100 hover:border-neutral-300 hover:shadow-md transition-all duration-300 overflow-hidden bg-white"
                  >
                    <div className="relative h-40 bg-neutral-100 overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 text-[10px] px-2 py-0.5 rounded-full bg-white/90 text-neutral-500 font-mono">
                        {p.year}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-sm font-bold text-neutral-900 mb-1">{p.name}</h3>
                      <p className="text-[11px] text-neutral-400 mb-3">{p.industry} · {p.location}</p>
                      <div className="flex flex-wrap gap-1">
                        {p.services.map((s, si) => (
                          <span key={si} className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${serviceColors[s] ?? 'bg-neutral-50 text-neutral-500 border-neutral-100'}`}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-5 md:px-12 lg:px-20 bg-neutral-950">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-5">Start a Project</p>
          <h2 className="font-bold text-white leading-tight tracking-tight mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
            Your website could be next.
          </h2>
          <p className="text-neutral-500 font-light mb-8 max-w-lg mx-auto">
            We build fast, beautiful and conversion-focused websites for businesses across Dubai, Abu Dhabi, Kerala and India.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-neutral-900 text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-neutral-100 transition-colors"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 border border-neutral-700 text-neutral-400 text-sm font-medium px-7 py-3.5 rounded-full hover:border-neutral-500 hover:text-neutral-200 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
