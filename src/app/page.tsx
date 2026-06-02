'use client'

import {
  ArrowRight, ArrowUpRight, Phone, Star,
  ChevronLeft, ChevronRight
} from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

// ── COUNTER ──────────────────────────────────────────────────
function Counter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [n, setN] = useState(0)
  const [on, setOn] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setOn(true); o.disconnect() }
    }, { threshold: 0.1 })
    if (ref.current) o.observe(ref.current)
    return () => o.disconnect()
  }, [])
  useEffect(() => {
    if (!on) return
    let s: number | null = null
    const tick = (t: number) => {
      if (!s) s = t
      const p = Math.min((t - s) / 1800, 1)
      setN(Math.floor(p * end))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [on, end])
  return <span ref={ref}>{n}{suffix}</span>
}

// ── REVEAL ────────────────────────────────────────────────────
function Reveal({
  children, delay = 0, y = 24, className = '',
}: {
  children: React.ReactNode; delay?: number; y?: number; className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); o.disconnect() }
    }, { threshold: 0.08 })
    if (ref.current) o.observe(ref.current)
    return () => o.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// ── TESTIMONIALS ──────────────────────────────────────────────
function Testimonials() {
  const [i, setI] = useState(0)
  const list = [
    {
      q: 'Their SEO strategy took us from page 8 to rank #1 in Dubai within 4 months. Organic inquiries tripled.',
      name: 'Sarah Williams', role: 'CEO, TechStart Inc.',
    },
    {
      q: 'The web development team built something genuinely beautiful. Fast, converts well, and delivered on time.',
      name: 'Rahul N S', role: 'Marketing Director, Meraki PTE LTD',
    },
    {
      q: "Best digital marketing agency we've worked with in Kochi. Transparent, results-driven, no fluff.",
      name: 'Relish A J', role: 'CMO, Nutono LLC',
    },
    {
      q: 'The custom software they built automated 60% of our operations. ROI was visible within 6 weeks.',
      name: 'Pranav', role: 'Founder, Benfica Technologies',
    },
  ]
  useEffect(() => {
    const t = setInterval(() => setI(p => (p + 1) % list.length), 5500)
    return () => clearInterval(t)
  }, [])
  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${i * 100}%)` }}
      >
        {list.map((t, idx) => (
          <div key={idx} className="w-full flex-shrink-0 px-1">
            <div className="flex gap-0.5 mb-5">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-3.5 h-3.5 fill-neutral-800 text-neutral-800" />
              ))}
            </div>
            <p className="text-lg md:text-2xl font-light leading-relaxed text-neutral-800 mb-6 italic">
              "{t.q}"
            </p>
            <div>
              <p className="text-sm font-semibold text-neutral-900">{t.name}</p>
              <p className="text-xs text-neutral-400 mt-0.5">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4 mt-8">
        <button
          onClick={() => setI(p => (p - 1 + list.length) % list.length)}
          className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center hover:border-neutral-800 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 text-neutral-600" />
        </button>
        <button
          onClick={() => setI(p => (p + 1) % list.length)}
          className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center hover:border-neutral-800 transition-colors"
        >
          <ChevronRight className="w-4 h-4 text-neutral-600" />
        </button>
        <div className="flex gap-1.5">
          {list.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className="transition-all duration-300"
              style={{
                width: idx === i ? '20px' : '6px',
                height: '6px',
                borderRadius: '3px',
                backgroundColor: idx === i ? '#0a0a0a' : '#d4d4d4',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// ── MARQUEE ───────────────────────────────────────────────────
function Marquee() {
  const items = [
    'SEO Agency', 'Wesite Development Service', 'Digital Marketing Services',
    'Software Development Services', 'Social Media Management Services',
    'Website Design Services', 'Branding Services', 'Paid Advertising Services',
    'Dubai, Abu Dhabi, Sharjah, UAE, Kochi, Kerala',
  ]
  return (
    <div className="w-full overflow-hidden border-y border-neutral-100 py-3.5">
      <div
        className="flex w-max gap-10"
        style={{ animation: 'marquee 30s linear infinite' }}
      >
        {[...items, ...items].map((t, i) => (
          <span key={i} className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 whitespace-nowrap">
            {t} <span className="text-neutral-200 mx-2">—</span>
          </span>
        ))}
      </div>
    </div>
  )
}

// ── PAGE ──────────────────────────────────────────────────────
export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    setMounted(true)
    const t = setTimeout(() => setHeroVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  if (!mounted) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-5 h-5 rounded-full border border-neutral-300 border-t-neutral-900 animate-spin" />
    </div>
  )

  const stats = [
    { n: 500, s: '+', l: 'Projects Delivered' },
    { n: 250, s: '+', l: 'Clients Worldwide'  },
    { n: 99,  s: '%', l: 'Client Retention'   },
    { n: 12,  s: '+', l: 'Countries Served'   },
  ]

  const locations = [
    { city: 'Dubai',     country: 'UAE',   desc: 'Digital marketing & web development agency in Dubai, UAE' },
    { city: 'Abu Dhabi', country: 'UAE',   desc: 'SEO & software development services in Abu Dhabi'        },
    { city: 'Sharjah',   country: 'UAE',   desc: 'Web design & digital marketing agency in Sharjah'        },
    { city: 'Kochi',     country: 'India', desc: 'Top-rated web development & SEO agency in Kochi'         },
    { city: 'Kerala',    country: 'India', desc: 'Digital marketing & branding agency across Kerala'       },
    { city: 'India',     country: 'India', desc: 'Nationwide SEO & software development services'          },
  ]

  return (
    <div className="w-full bg-white overflow-x-hidden">

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      {/* WhatsApp float */}
      <div className="fixed bottom-6 right-5 md:bottom-8 md:right-8 z-50">
        <Link
          href="https://wa.me/+918431373779"
          className="w-11 h-11 rounded-full bg-neutral-900 flex items-center justify-center shadow-lg hover:bg-neutral-700 transition-colors"
          aria-label="Contact Creative Wired on WhatsApp"
        >
          <Phone className="w-4 h-4 text-white" />
        </Link>
      </div>

      <Header currentPage="home" />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section
        className="min-h-screen flex flex-col justify-between pt-24 pb-12 px-5 md:px-12 lg:px-20 bg-white"
        aria-label="Creative Wired — Digital Marketing Agency Dubai & Kochi"
      >
        <div className="flex items-start justify-between">
          <div
            className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 transition-all duration-700"
            style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'none' : 'translateY(-8px)' }}
          >
            Digital Marketing Agency
          </div>
          <div
            className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 transition-all duration-700"
            style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'none' : 'translateY(-8px)', transitionDelay: '100ms' }}
          >
            Dubai · Abu Dhabi · Kochi
          </div>
        </div>

        <div className="py-12 md:py-0">
          <h1
            className="font-bold leading-[1.0] tracking-tight text-neutral-900 transition-all duration-1000"
            style={{
              fontSize: 'clamp(2.8rem, 8vw, 7.5rem)',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'none' : 'translateY(30px)',
              transitionDelay: '150ms',
            }}
          >
            We build brands<br />
            <span className="text-neutral-300">that get found,</span><br />
            <span>loved & chosen.</span>
          </h1>

          <div
            className="mt-8 md:mt-10 flex flex-col md:flex-row md:items-end gap-6 md:gap-16 transition-all duration-1000"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'none' : 'translateY(20px)',
              transitionDelay: '300ms',
            }}
          >
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-md font-light">
              Full-service{' '}
              <span className="text-neutral-800 font-medium">SEO, web development, software, paid ads</span>{' '}
              and social media for businesses in{' '}
              <span className="text-neutral-800 font-medium">UAE and India</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-700 transition-colors"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://calendly.com/swarajns79/30min"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 border border-neutral-200 text-neutral-700 text-sm font-medium px-6 py-3 rounded-full hover:border-neutral-400 transition-colors"
              >
                Book Free Call
              </Link>
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-neutral-100 transition-all duration-1000"
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? 'none' : 'translateY(16px)',
            transitionDelay: '500ms',
          }}
        >
          {stats.map((s, i) => (
            <div key={i} className="py-4">
              <div className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight">
                <Counter end={s.n} suffix={s.s} />
              </div>
              <div className="text-[11px] uppercase tracking-[0.15em] text-neutral-400 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <Marquee />

      {/* ══════════════════════════════════════════
          SERVICES — All-White Bento Grid
      ══════════════════════════════════════════ */}
      <section id="services" className="py-20 md:py-32 px-5 md:px-12 lg:px-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <Reveal className="mb-12 md:mb-16">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">
                  What We Do
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 leading-tight tracking-tight">
                  Six services.<br />
                  One focused team.
                </h2>
              </div>
              <p className="text-sm text-neutral-500 max-w-xs leading-relaxed md:text-right font-light">
                Everything your brand needs to grow — SEO, web, software, ads, social and brand.
              </p>
            </div>
          </Reveal>

          {/* ── BENTO GRID — all white cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

            {/* 01 — SEO (wide 2-col) */}
            <Reveal delay={0} className="sm:col-span-2">
              <Link
                href="/seo"
                className="group relative flex flex-col justify-between rounded-2xl p-7 md:p-9 overflow-hidden min-h-[260px] bg-white border border-neutral-100 hover:border-neutral-300 hover:shadow-md transition-all duration-300"
              >
                <span className="absolute right-5 bottom-3 text-[120px] font-black text-neutral-50 leading-none select-none pointer-events-none">
                  01
                </span>
                <div className="relative z-10 flex items-start justify-between">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                    Search Engine Optimisation
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-200 group-hover:text-neutral-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-snug mb-3 tracking-tight">
                    Rank #1 on Google.<br />Dubai, Abu Dhabi & Kochi.
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed max-w-md font-light">
                    Technical SEO, content strategy and link building that drives sustainable organic growth across UAE and India.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {['Local SEO UAE', 'Technical SEO', 'SEO India', 'Keyword Strategy'].map((t, i) => (
                      <span key={i} className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* 02 — Web Dev (tall 1-col, spans 2 rows) */}
            <Reveal delay={60} className="sm:row-span-2">
              <Link
                href="/web-development"
                className="group relative flex flex-col justify-between rounded-2xl p-7 overflow-hidden h-full min-h-[340px] bg-white border border-neutral-100 hover:border-neutral-300 hover:shadow-md transition-all duration-300"
              >
                <span className="absolute right-4 bottom-2 text-[110px] font-black text-neutral-50 leading-none select-none pointer-events-none">
                  02
                </span>
                <div className="relative z-10 flex items-start justify-between">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                    Web Development
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-200 group-hover:text-neutral-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-neutral-900 leading-snug mb-3 tracking-tight">
                    Websites that convert, not just impress.
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed font-light mb-4">
                    Custom websites and web apps on modern stacks — fast, accessible and built to turn visitors into customers.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Next.js', 'E-Commerce', 'CMS', 'Performance'].map((t, i) => (
                      <span key={i} className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* 03 — Software Dev */}
            <Reveal delay={80}>
              <Link
                href="/services/software-development"
                className="group relative flex flex-col justify-between rounded-2xl p-7 overflow-hidden min-h-[220px] bg-white border border-neutral-100 hover:border-neutral-300 hover:shadow-md transition-all duration-300"
              >
                <span className="absolute right-4 bottom-2 text-[100px] font-black text-neutral-50 leading-none select-none pointer-events-none">
                  03
                </span>
                <div className="relative z-10 flex items-start justify-between">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                    Software Development
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-200 group-hover:text-neutral-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-neutral-900 leading-snug mb-2 tracking-tight">
                    Custom software & apps built for your operations.
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {['Mobile Apps', 'SaaS', 'Automation'].map((t, i) => (
                      <span key={i} className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* 04 — Paid Ads */}
            <Reveal delay={100}>
              <Link
                href="/paid-advertising"
                className="group relative flex flex-col justify-between rounded-2xl p-7 overflow-hidden min-h-[220px] bg-white border border-neutral-100 hover:border-neutral-300 hover:shadow-md transition-all duration-300"
              >
                <span className="absolute right-4 bottom-2 text-[100px] font-black text-neutral-50 leading-none select-none pointer-events-none">
                  04
                </span>
                <div className="relative z-10 flex items-start justify-between">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                    Paid Advertising
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-200 group-hover:text-neutral-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-neutral-900 leading-snug mb-2 tracking-tight">
                    Every dirham working harder.
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed font-light">
                    Google Ads & Meta campaigns tracked and optimised for maximum ROI across UAE and India.
                  </p>
                </div>
              </Link>
            </Reveal>

            {/* 05 — Social Media */}
            <Reveal delay={120}>
              <Link
                href="/social-media-management"
                className="group relative flex flex-col justify-between rounded-2xl p-7 overflow-hidden min-h-[220px] bg-white border border-neutral-100 hover:border-neutral-300 hover:shadow-md transition-all duration-300"
              >
                <span className="absolute right-4 bottom-2 text-[100px] font-black text-neutral-50 leading-none select-none pointer-events-none">
                  05
                </span>
                <div className="relative z-10 flex items-start justify-between">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                    Social Media Management
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-200 group-hover:text-neutral-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-neutral-900 leading-snug mb-2 tracking-tight">
                    Followers into customers.
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed font-light">
                    Strategic content and community management that builds real brand equity.
                  </p>
                </div>
              </Link>
            </Reveal>

            {/* 06 — Branding (wide 2-col) */}
            <Reveal delay={140} className="sm:col-span-2">
              <Link
                href="/services"
                className="group relative flex flex-col sm:flex-row items-start sm:items-end justify-between rounded-2xl p-7 md:p-9 overflow-hidden min-h-[200px] gap-6 bg-white border border-neutral-100 hover:border-neutral-300 hover:shadow-md transition-all duration-300"
              >
                <span className="absolute right-4 bottom-0 text-[120px] font-black text-neutral-50 leading-none select-none pointer-events-none">
                  06
                </span>
                <div className="relative z-10">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 block mb-3">
                    Brand Identity Design
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-snug tracking-tight">
                    A brand that signals quality<br className="hidden md:block" /> before a word is read.
                  </h3>
                </div>
                <div className="relative z-10 flex-shrink-0">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {['Logo Design', 'Visual Identity', 'Brand Guidelines'].map((t, i) => (
                      <span key={i} className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-400">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm text-neutral-400 group-hover:text-neutral-900 group-hover:gap-3 transition-all">
                    Explore branding
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* CTA card */}
            <Reveal delay={160}>
              <Link
                href="/services"
                className="group flex flex-col justify-between rounded-2xl border border-neutral-100 p-7 min-h-[200px] bg-white hover:border-neutral-300 hover:shadow-md transition-all duration-300"
              >
                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                  All Services
                </span>
                <div>
                  <p className="text-neutral-900 font-semibold text-lg leading-snug mb-3">
                    Not sure where<br />to start?
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm text-neutral-400 group-hover:text-neutral-900 group-hover:gap-3 transition-all">
                    See everything we do
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
    RESULTS
══════════════════════════════════════════ */}
<section className="py-20 md:py-32 px-5 md:px-12 lg:px-20 bg-white border-y border-neutral-100">
  <div className="max-w-6xl mx-auto">
    <Reveal className="mb-14">
      <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">
        Proven Results
      </p>
      <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 leading-tight tracking-tight">
        Numbers that<br />don't lie.
      </h2>
    </Reveal>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

      <Reveal delay={0} className="md:col-span-2">
        <div className="rounded-2xl bg-white border border-neutral-100 shadow-sm p-7 md:p-10 h-full flex flex-col justify-between min-h-[220px] hover:border-neutral-300 hover:shadow-md transition-all duration-300">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
              SEO + Paid Ads · Dubai E-Commerce
            </span>
            <div className="text-5xl md:text-7xl font-bold text-neutral-900 mt-3 tracking-tight">
              312<span className="text-neutral-200">%</span>
            </div>
            <p className="text-neutral-400 text-sm mt-1 font-light">Revenue growth in 90 days</p>
          </div>
          <p className="text-neutral-400 text-xs mt-6 leading-relaxed max-w-sm font-light">
            Dubai-based e-commerce brand was invisible on Google. Combined SEO strategy and performance ads turned it into their primary revenue channel.
          </p>
        </div>
      </Reveal>

      <Reveal delay={60}>
        <div className="rounded-2xl bg-white border border-neutral-100 shadow-sm p-7 h-full flex flex-col justify-between min-h-[220px] hover:border-neutral-300 hover:shadow-md transition-all duration-300">
          <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
            Local SEO · Kerala Restaurant Chain
          </span>
          <div>
            <div className="text-5xl md:text-6xl font-bold text-neutral-900 tracking-tight">
              #1
            </div>
            <p className="text-neutral-400 text-sm mt-1 font-light">Google ranking achieved</p>
            <p className="text-neutral-400 text-xs mt-4 leading-relaxed font-light">
              Moved from page 10 to rank #1. Inquiries doubled within 60 days.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={40}>
        <div className="rounded-2xl bg-white border border-neutral-100 shadow-sm p-7 h-full flex flex-col justify-between min-h-[180px] hover:border-neutral-300 hover:shadow-md transition-all duration-300">
          <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
            Social Media · Abu Dhabi Fintech
          </span>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
              25<span className="text-neutral-200">×</span>
            </div>
            <p className="text-neutral-400 text-sm mt-1 font-light">Audience growth</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="rounded-2xl bg-white border border-neutral-100 shadow-sm p-7 h-full flex flex-col justify-between min-h-[180px] hover:border-neutral-300 hover:shadow-md transition-all duration-300">
          <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
            Software Dev · Kochi Startup
          </span>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
              60<span className="text-neutral-200">%</span>
            </div>
            <p className="text-neutral-400 text-sm mt-1 font-light">Operations automated</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <Link
          href="/contact"
          className="rounded-2xl border border-neutral-100 shadow-sm p-7 h-full flex flex-col justify-between min-h-[180px] bg-white hover:border-neutral-300 hover:shadow-md transition-all duration-300 group"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">Your Business</span>
          <div>
            <p className="text-neutral-900 text-lg font-semibold leading-snug mb-3">
              What could your result look like?
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-neutral-400 group-hover:text-neutral-900 group-hover:gap-3 transition-all">
              Let's find out <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </Link>
      </Reveal>

    </div>
  </div>
</section>


      {/* ══════════════════════════════════════════
          LOCATIONS
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-32 px-5 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">Where We Work</p>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 leading-tight tracking-tight">
              UAE & India.<br />Local expertise,{' '}
              <br className="md:hidden" />global standards.
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-12">
            {locations.map((loc, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="rounded-xl border border-neutral-100 p-5 hover:border-neutral-300 hover:shadow-sm transition-all duration-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-neutral-900">{loc.city}</span>
                    <span className="text-[9px] uppercase tracking-widest text-neutral-300 bg-neutral-50 px-2 py-0.5 rounded-full">
                      {loc.country}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-snug">{loc.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {[
                { t: 'SEO Agency Dubai',           h: '/seo/dubai'                   },
                { t: 'Web Development Dubai',       h: '/web-development/dubai'       },
                { t: 'Digital Marketing Abu Dhabi', h: '/digital-marketing/abu-dhabi' },
                { t: 'SEO Services Sharjah',        h: '/seo/sharjah'                 },
                { t: 'Web Development Kochi',       h: '/web-development/kochi'       },
                { t: 'SEO Agency Kochi',            h: '/seo/kochi'                   },
                { t: 'Digital Marketing Kerala',    h: '/digital-marketing/kerala'    },
                { t: 'Software Development India',  h: '/software-development/india'  },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.h}
                  className="text-[11px] px-3 py-1.5 rounded-full border border-neutral-100 text-neutral-400 hover:border-neutral-300 hover:text-neutral-700 transition-all"
                >
                  {link.t}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-32 px-5 md:px-12 lg:px-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 md:gap-24 items-center">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">Client Stories</p>
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 leading-tight tracking-tight mb-5">
                250+ businesses<br />trust us to grow.
              </h2>
              <p className="text-sm text-neutral-500 leading-relaxed font-light max-w-sm">
                From Dubai startups to established brands in Kerala — here's what they say about working with Creative Wired.
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:gap-3 transition-all"
                >
                  Work with us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <Testimonials />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY US
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-32 px-5 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">Why Creative Wired</p>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 leading-tight tracking-tight">
              The agency that<br />shows its work.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { n: '01', t: 'UAE & India Presence',  d: 'Physical presence in Dubai and Kochi. We know your market — not just your brief.'      },
              { n: '02', t: 'No Lock-in Contracts',  d: 'Month-to-month only. We earn your business every single month.'                        },
              { n: '03', t: 'Radical Transparency',  d: 'Full reporting access. Every metric, every spend — always visible to you.'             },
              { n: '04', t: 'Results Guaranteed',    d: "We set clear targets and keep working until they're hit. No exceptions."               },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="border-t border-neutral-100 pt-5">
                  <span className="text-[10px] text-neutral-300 font-mono">{item.n}</span>
                  <h3 className="text-sm font-semibold text-neutral-900 mt-3 mb-2">{item.t}</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed font-light">{item.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
    CTA
══════════════════════════════════════════ */}
<section className="py-28 md:py-40 px-5 md:px-12 lg:px-20 bg-neutral-50 border-t border-neutral-100">
  <div className="max-w-5xl mx-auto">

    <Reveal>
      <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-5">
        Let's Build Something
      </p>
      <h2
        className="font-bold text-neutral-900 leading-[1.0] tracking-tight mb-8"
        style={{ fontSize: 'clamp(2.4rem, 7vw, 6.5rem)' }}
      >
        Ready to grow<br />
        <span className="text-neutral-300">your business</span><br />
        online?
      </h2>
    </Reveal>

    <Reveal delay={100}>
      <p className="text-base md:text-lg text-neutral-500 font-light leading-relaxed max-w-lg mb-10">
        Join 250+ businesses across{' '}
        <span className="text-neutral-800 font-medium">Dubai, Abu Dhabi, Kochi and India</span>{' '}
        who trust Creative Wired for SEO, web development and digital growth.
      </p>
    </Reveal>

    <Reveal delay={180} className="flex flex-col sm:flex-row gap-3">
      <Link
        href="/contact"
        className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-neutral-700 transition-colors"
      >
        Start Your Project <ArrowRight className="w-4 h-4" />
      </Link>
      <Link
        href="https://calendly.com/swarajns79/30min"
        target="_blank"
        className="inline-flex items-center justify-center gap-2 border border-neutral-200 text-neutral-600 text-sm font-medium px-7 py-3.5 rounded-full hover:border-neutral-400 transition-colors"
      >
        Book a Free 30-Min Call
      </Link>
    </Reveal>

    <Reveal delay={240}>
      <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10 pt-10 border-t border-neutral-200">
        {['No lock-in contracts', 'UAE & India based', '250+ clients', '500+ projects'].map((t, i) => (
          <span key={i} className="text-[11px] text-neutral-400 uppercase tracking-wider">{t}</span>
        ))}
      </div>
    </Reveal>

  </div>
</section>

      {/* ══════════════════════════════════════════
          SEO TEXT BLOCK
      ══════════════════════════════════════════ */}
      <section className="py-14 px-5 md:px-12 lg:px-20 bg-white border-t border-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-10">
            {[
              { h: 'SEO Agency Dubai',            p: 'Data-driven SEO services in Dubai helping businesses rank on Google and generate consistent organic traffic.'         },
              { h: 'Web Development Dubai',        p: 'Custom website and web app development for Dubai businesses built on modern, high-performance technology.'          },
              { h: 'Digital Marketing Abu Dhabi',  p: 'Full-service digital marketing in Abu Dhabi — SEO, paid ads and social media for measurable business growth.'       },
              { h: 'SEO Agency Kochi',             p: "Kerala's leading SEO agency helping Kochi businesses dominate local and national search rankings."                  },
              { h: 'Web Development Kerala',       p: 'Professional web development across Kerala delivering beautiful, fast and conversion-optimised websites.'           },
              { h: 'Software Development India',   p: 'Custom software and mobile app development for Indian startups and enterprises across all industries.'             },
            ].map((c, i) => (
              <div key={i}>
                <h3 className="text-[11px] font-semibold text-neutral-700 mb-1.5">{c.h}</h3>
                <p className="text-[10px] text-neutral-400 leading-relaxed">{c.p}</p>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-neutral-300 leading-relaxed max-w-4xl">
            Creative Wired is a full-service digital marketing and web development agency with offices in Dubai and Kochi, India.
            We specialise in SEO services, paid advertising, social media management, web development, custom software development
            and brand identity design for businesses across UAE (Dubai, Abu Dhabi, Sharjah) and India (Kerala, Kochi, nationwide).
            Our strategies are built on data, accountability and measurable business outcomes.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
