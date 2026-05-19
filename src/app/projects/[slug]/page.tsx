import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle, ExternalLink } from 'lucide-react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { projects } from '../../data/projects'

export const dynamic    = 'force-dynamic'
export const revalidate = 0

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = projects.find(p => p.slug === slug)
  if (!p) return {}
  return {
    title:       `${p.name} — ${p.industry} | Creative Wired Portfolio`,
    description: p.description,
  }
}

const serviceColors: Record<string, string> = {
  'Web Development':         'bg-purple-50 text-purple-700 border-purple-100',
  'SEO':                     'bg-green-50  text-green-700  border-green-100',
  'Paid Advertising':        'bg-blue-50   text-blue-700   border-blue-100',
  'Social Media Management': 'bg-orange-50 text-orange-700 border-orange-100',
  'Software Development':    'bg-rose-50   text-rose-700   border-rose-100',
}

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = projects.find(p => p.slug === slug)
  if (!p) notFound()

  const currentIndex = projects.indexOf(p)
  const prev = projects[currentIndex - 1] ?? null
  const next = projects[currentIndex + 1] ?? null

  const waText = encodeURIComponent(`Hi, I saw your project "${p.name}" on Creative Wired and I'd like to build something similar for my business.`)
  const waUrl  = `https://wa.me/918431373779?text=${waText}`

  return (
    <div className="w-full bg-white overflow-x-hidden">
      <Header currentPage="projects" />

      {/* HERO */}
      <section className="pt-24 pb-0 bg-white border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-5 md:px-12 lg:px-20 pt-6">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-10">
            <Link href="/projects" className="inline-flex items-center gap-1.5 text-[11px] text-neutral-400 hover:text-neutral-900 transition-colors uppercase tracking-[0.15em]">
              <ArrowLeft className="w-3 h-3" /> Projects
            </Link>
            <span className="text-neutral-200">/</span>
            <span className="text-[11px] text-neutral-400 uppercase tracking-[0.15em]">{p.industry}</span>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {p.services.map((s, i) => (
              <span key={i} className={`text-[10px] font-medium px-2.5 py-1 rounded-full border ${serviceColors[s] ?? 'bg-neutral-50 text-neutral-500 border-neutral-100'}`}>{s}</span>
            ))}
            <span className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-50 border border-neutral-100 text-neutral-400">{p.location}</span>
            <span className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-50 border border-neutral-100 text-neutral-400">{p.year}</span>
          </div>

          <h1 className="font-bold leading-[1.0] tracking-tight text-neutral-900 mb-4" style={{ fontSize: 'clamp(2.4rem, 6vw, 5.5rem)' }}>
            {p.name}
          </h1>

          <p className="text-base md:text-xl text-neutral-500 font-light leading-relaxed max-w-2xl mb-8">
            {p.tagline}
          </p>

          {/* ✅ PRIMARY ACTION BUTTONS — always visible, full width on mobile */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            {p.liveUrl ? (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-neutral-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View Website
              </a>
            ) : (
              <span className="inline-flex items-center justify-center gap-2 bg-neutral-100 text-neutral-400 text-sm font-semibold px-7 py-3.5 rounded-full cursor-not-allowed">
                <ExternalLink className="w-4 h-4" />
                Website Coming Soon
              </span>
            )}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-green-600 transition-colors"
            >
              <WhatsAppIcon />
              Build Something Similar
            </a>
          </div>

          {/* Meta strip */}
          <div className="flex flex-wrap gap-6 text-[11px] text-neutral-400 uppercase tracking-wider pb-8 border-b border-neutral-100">
            <div><span className="text-neutral-300">Industry</span><br /><span className="text-neutral-700 font-medium normal-case tracking-normal text-xs">{p.industry}</span></div>
            <div><span className="text-neutral-300">Location</span><br /><span className="text-neutral-700 font-medium normal-case tracking-normal text-xs">{p.location}</span></div>
            <div><span className="text-neutral-300">Year</span><br /><span className="text-neutral-700 font-medium normal-case tracking-normal text-xs">{p.year}</span></div>
            {p.liveUrl && (
              <div>
                <span className="text-neutral-300">Live URL</span><br />
                <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 transition-colors normal-case tracking-normal font-medium">
                  {p.liveUrl.replace('https://', '')} <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Hero image — full width */}
        <div className="relative w-full h-72 md:h-[500px] bg-neutral-100 mt-8">
          <Image
            src={p.image}
            alt={p.name}
            fill
            className="object-cover"
            priority
          />
          {/* Floating View Website over image */}
          {p.liveUrl && (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-5 right-5 inline-flex items-center gap-2 bg-white text-neutral-900 text-sm font-bold px-5 py-3 rounded-full hover:bg-neutral-100 transition-colors shadow-xl"
            >
              <ExternalLink className="w-4 h-4" />
              View Website
            </a>
          )}
        </div>
      </section>

      {/* BODY */}
      <section className="py-20 md:py-32 px-5 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">

            {/* Main */}
            <div className="md:col-span-8 space-y-14">

              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-4">Project Overview</p>
                <p className="text-base md:text-lg text-neutral-700 leading-relaxed font-light">{p.description}</p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-6">Key Features</p>
                <div className="space-y-3">
                  {p.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-neutral-300 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-neutral-700 leading-relaxed font-light">{f}</p>
                    </div>
                  ))}
                </div>
              </div>

              {p.gallery && p.gallery.length > 0 && (
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-6">Screenshots</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {p.gallery.map((img, i) => (
                      <div key={i} className="relative h-48 rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-100">
                        <Image src={img} alt={`${p.name} screenshot ${i + 1}`} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="md:col-span-4 space-y-5">

              {/* ✅ View Website — top of sidebar, bold */}
              {p.liveUrl && (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl bg-neutral-900 p-5 hover:bg-neutral-800 transition-all"
                >
                  <div>
                    <p className="text-sm font-bold text-white">View Website</p>
                    <p className="text-[11px] text-neutral-400 mt-0.5 truncate">{p.liveUrl.replace('https://', '')}</p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <ExternalLink className="w-4 h-4 text-neutral-900" />
                  </div>
                </a>
              )}

              <div className="rounded-2xl border border-neutral-100 p-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-4">Tech Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.techStack.map((t, i) => (
                    <span key={i} className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-50 border border-neutral-100 text-neutral-500">{t}</span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-100 p-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-4">Services Delivered</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.services.map((s, i) => (
                    <span key={i} className={`text-[10px] font-medium px-2.5 py-1 rounded-full border ${serviceColors[s] ?? 'bg-neutral-50 text-neutral-500 border-neutral-100'}`}>{s}</span>
                  ))}
                </div>
              </div>

              {p.caseStudy && (
                <Link href={p.caseStudy} className="group flex items-center justify-between rounded-2xl border border-neutral-100 p-5 hover:border-neutral-900 transition-all">
                  <div>
                    <p className="text-xs font-semibold text-neutral-900">Read Case Study</p>
                    <p className="text-[11px] text-neutral-400 mt-0.5">Results & full breakdown</p>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-neutral-100 flex items-center justify-center group-hover:border-neutral-900 group-hover:bg-neutral-900 transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
                  </div>
                </Link>
              )}

              {/* Sidebar CTA */}
              <div className="rounded-2xl bg-neutral-50 border border-neutral-100 p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-3">Build something similar</p>
                <p className="text-neutral-900 text-sm font-semibold leading-snug mb-4">Want a website like this for your business?</p>
                <div className="flex flex-col gap-2">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-green-500 text-white text-xs font-semibold px-4 py-2.5 rounded-full hover:bg-green-600 transition-colors"
                  >
                    <WhatsAppIcon />
                    WhatsApp Us
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white text-xs font-semibold px-4 py-2.5 rounded-full hover:bg-neutral-700 transition-colors"
                  >
                    Get a Free Quote
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA 2 — WhatsApp banner above footer */}
      <section className="py-20 px-5 md:px-12 lg:px-20 bg-neutral-950">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-3">Like what you see?</p>
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight tracking-tight mb-2">
              Let's build yours next.
            </h2>
            <p className="text-neutral-500 font-light text-sm max-w-md">
              Chat with us on WhatsApp and we'll send you a free proposal within 24 hours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-green-600 transition-colors"
            >
              <WhatsAppIcon />
              WhatsApp Us Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-neutral-700 text-neutral-400 text-sm font-medium px-7 py-3.5 rounded-full hover:border-neutral-500 hover:text-neutral-200 transition-colors"
            >
              View All Services
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PREV / NEXT */}
      <section className="py-14 px-5 md:px-12 lg:px-20 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {prev ? (
              <Link href={`/projects/${prev.slug}`} className="group flex flex-col gap-2 rounded-2xl border border-neutral-100 bg-white p-6 hover:border-neutral-300 hover:shadow-sm transition-all">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                  <ArrowLeft className="w-3 h-3" /> Previous
                </div>
                <p className="text-sm font-semibold text-neutral-900 group-hover:text-neutral-700 transition-colors">{prev.name}</p>
                <p className="text-[11px] text-neutral-400">{prev.industry}</p>
              </Link>
            ) : <div />}

            {next ? (
              <Link href={`/projects/${next.slug}`} className="group flex flex-col gap-2 rounded-2xl border border-neutral-100 bg-white p-6 hover:border-neutral-300 hover:shadow-sm transition-all sm:text-right sm:items-end">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                  Next <ArrowRight className="w-3 h-3" />
                </div>
                <p className="text-sm font-semibold text-neutral-900 group-hover:text-neutral-700 transition-colors">{next.name}</p>
                <p className="text-[11px] text-neutral-400">{next.industry}</p>
              </Link>
            ) : <div />}
          </div>

          <div className="mt-6 text-center">
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-900 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" /> All Projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
