'use client'

import {
  ArrowRight, ArrowUpRight, Phone, CheckCircle,
  Search, Code, Megaphone, Share2,
  TrendingUp, Users, Star, Award
} from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// ── REVEAL ────────────────────────────────────────────────────
function Reveal({
  children, delay = 0, className = '',
}: {
  children: React.ReactNode; delay?: number; className?: string
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
        transform: vis ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export default function ServicesPage() {
  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  const stats = [
    { n: '500+', l: 'Projects Delivered',  d: 'Across UAE and India'            },
    { n: '250+', l: 'Clients Worldwide',   d: 'From startups to enterprises'    },
    { n: '99%',  l: 'Client Retention',    d: 'Month-to-month, no lock-in'      },
    { n: '4.9',  l: 'Average Rating',      d: 'Across 200+ client reviews'      },
  ]

  const services = [
    {
      no: '01',
      icon: <Search className="w-5 h-5" />,
      title: 'Search Engine Optimisation',
      short: 'SEO Services',
      subtitle: 'Rank #1 on Google. Dubai, Abu Dhabi & Kochi.',
      desc: 'Technical SEO, content strategy and link building that drives sustainable organic growth across UAE and India. We combine keyword research, on-page optimisation and high-authority link acquisition to get you to page one — and keep you there.',
      features: [
        'Complete SEO Audit',
        'Keyword Research & Strategy',
        'On-Page Optimisation',
        'Technical SEO Fixes',
        'Quality Link Building',
        'Monthly Performance Reports',
      ],
      tags: ['Local SEO UAE', 'Technical SEO', 'SEO India', 'Keyword Strategy'],
      href: '/seo',
    },
    {
      no: '02',
      icon: <Code className="w-5 h-5" />,
      title: 'Web Development',
      short: 'Web Development',
      subtitle: 'Websites that convert, not just impress.',
      desc: 'Custom websites and web apps built on modern stacks — fast, accessible and optimised to turn visitors into customers. From landing pages to full-scale platforms for businesses in UAE and India.',
      features: [
        'Custom UI/UX Design',
        'Responsive Development',
        'E-Commerce Solutions',
        'CMS Integration',
        'Performance Optimisation',
        'Security Implementation',
      ],
      tags: ['Next.js', 'E-Commerce', 'CMS', 'Performance'],
      href: '/web-development',
    },
    {
      no: '03',
      icon: <Megaphone className="w-5 h-5" />,
      title: 'Paid Advertising',
      short: 'PPC & Paid Ads',
      subtitle: 'Every dirham working harder.',
      desc: 'Google Ads, Meta and LinkedIn campaigns built on data, not guesswork. Every dirham and rupee tracked and optimised for maximum return across UAE and Indian markets. Average client ROAS: 400%.',
      features: [
        'Google Ads Management',
        'Meta Ads (Facebook & Instagram)',
        'LinkedIn Advertising',
        'Retargeting Campaigns',
        'A/B Testing & Optimisation',
        'Custom Analytics Dashboard',
      ],
      tags: ['Google Ads Dubai', 'Meta Ads', 'PPC UAE', 'Performance Marketing'],
      href: '/paid-advertising',
    },
    {
      no: '04',
      icon: <Share2 className="w-5 h-5" />,
      title: 'Social Media Management',
      short: 'Social Media',
      subtitle: 'Followers into customers.',
      desc: 'Strategic content creation and community management that builds brand equity and real engagement. We turn passive followers into active buyers with platform-native content for UAE and India audiences.',
      features: [
        'Content Strategy & Calendar',
        'Community Management',
        'Influencer Partnerships',
        'Social Advertising',
        'Analytics & Reporting',
        'Brand Monitoring',
      ],
      tags: ['Content Strategy', 'Instagram', 'LinkedIn', 'Brand Building'],
      href: '/social-media-management',
    },
  ]

  return (
    <div className="w-full bg-white overflow-x-hidden">

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fu  { animation: fadeUp 0.7s ease 0.1s both; }
        .fu2 { animation: fadeUp 0.7s ease 0.25s both; }
        .fu3 { animation: fadeUp 0.7s ease 0.4s both; }
        .fu4 { animation: fadeUp 0.7s ease 0.55s both; }
      `}</style>

      {/* WhatsApp float */}
      <div className="fixed bottom-6 right-5 md:bottom-8 md:right-8 z-50">
        <Link
          href="https://wa.me/+918129191617"
          className="w-11 h-11 rounded-full bg-neutral-900 flex items-center justify-center shadow-lg hover:bg-neutral-700 transition-colors"
          aria-label="Contact Creative Wired"
        >
          <Phone className="w-4 h-4 text-white" />
        </Link>
      </div>

      <Header currentPage="services" />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="min-h-[55vh] flex flex-col justify-between pt-28 pb-12 px-5 md:px-12 lg:px-20 bg-white border-b border-neutral-100">
        <div className="max-w-6xl mx-auto w-full">

          <div className="flex items-start justify-between mb-12 fu">
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
              Our Services
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
              Dubai · Abu Dhabi · Kochi
            </span>
          </div>

          <h1
            className="font-bold leading-[1.0] tracking-tight text-neutral-900 mb-8 fu2"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6.5rem)' }}
          >
            Six services.<br />
            <span className="text-neutral-300">One focused</span><br />
            team.
          </h1>

          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-16 fu3">
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-lg font-light">
              Everything your brand needs to grow online —{' '}
              <span className="text-neutral-800 font-medium">SEO, web development, paid ads, social media, software and brand identity</span>{' '}
              — all in one place, for businesses in{' '}
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
                href="https://calendly.com/creativewiredagency/30min"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 border border-neutral-200 text-neutral-700 text-sm font-medium px-6 py-3 rounded-full hover:border-neutral-400 transition-colors"
              >
                Book Free Call
              </Link>
            </div>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap gap-x-8 gap-y-2 mt-12 pt-8 border-t border-neutral-100 fu4">
            {[
              'Free consultation',
              'No lock-in contracts',
              'UAE & India based',
              '500+ projects delivered',
            ].map((t, i) => (
              <span key={i} className="text-[11px] text-neutral-400 uppercase tracking-wider">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS — light bordered band
      ══════════════════════════════════════════ */}
      <section className="py-14 px-5 md:px-12 lg:px-20 bg-white border-b border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-100">
            {stats.map((s, i) => (
              <div key={i} className="px-6 py-4 first:pl-0">
                <div className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-1">{s.n}</div>
                <div className="text-xs font-semibold text-neutral-700 mb-0.5">{s.l}</div>
                <div className="text-[11px] text-neutral-400 leading-snug">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES — alternating full-width rows
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-5 md:px-12 lg:px-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto space-y-4">

          {services.map((s, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-300 overflow-hidden">

                {/* Card header */}
                <div className="flex items-start justify-between p-7 md:p-9 pb-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-neutral-100 flex items-center justify-center text-neutral-400">
                      {s.icon}
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">{s.short}</span>
                    <span className="text-[10px] text-neutral-200 font-mono">{s.no}</span>
                  </div>
                  <Link
                    href={s.href}
                    className="group w-8 h-8 rounded-full border border-neutral-100 flex items-center justify-center hover:border-neutral-900 hover:bg-neutral-900 transition-all"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-white transition-colors" />
                  </Link>
                </div>

                {/* Card body */}
                <div className="grid lg:grid-cols-5 gap-0 p-7 md:p-9 pt-5">

                  {/* Left — headline + desc + CTA */}
                  <div className="lg:col-span-3 lg:pr-12 lg:border-r lg:border-neutral-100">
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-snug tracking-tight mb-2">
                      {s.title}
                    </h2>
                    <p className="text-sm font-medium text-neutral-400 mb-4">{s.subtitle}</p>
                    <p className="text-sm text-neutral-500 leading-relaxed font-light mb-6 max-w-xl">
                      {s.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {s.tags.map((t, j) => (
                        <span key={j} className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-50 border border-neutral-100 text-neutral-400">
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={s.href}
                      className="inline-flex items-center gap-2 bg-neutral-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-neutral-700 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* Right — features checklist */}
                  <div className="lg:col-span-2 lg:pl-10 mt-7 lg:mt-0">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-4">
                      What's included
                    </p>
                    <ul className="space-y-3">
                      {s.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <CheckCircle className="w-3.5 h-3.5 text-neutral-400 mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-neutral-600 leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </Reveal>
          ))}

        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY ONE AGENCY
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-5 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">

          <Reveal className="mb-14">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">
                  Why One Agency
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight tracking-tight">
                  Everything connected.<br />
                  <span className="text-neutral-400">Nothing siloed.</span>
                </h2>
              </div>
              <p className="text-sm text-neutral-500 max-w-xs leading-relaxed md:text-right font-light">
                One team seeing the full picture beats six agencies each optimising their own slice.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {[
              {
                no: '01',
                t: 'UAE & India Presence',
                d: 'Physical offices in Kochi with clients across Dubai, Abu Dhabi and Sharjah. We know your market.',
              },
              {
                no: '02',
                t: 'No Lock-in Contracts',
                d: 'Month-to-month always. We earn your business every single month — no retainer traps.',
              },
              {
                no: '03',
                t: 'Radical Transparency',
                d: 'Full dashboard access. Every metric, every spend, every result — always visible to you.',
              },
              {
                no: '04',
                t: 'Results Guaranteed',
                d: 'We set clear targets and keep working until they\'re hit. No exceptions, no excuses.',
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="border-t border-neutral-100 pt-5 h-full">
                  <span className="text-[10px] text-neutral-300 font-mono">{item.no}</span>
                  <h3 className="text-sm font-semibold text-neutral-900 mt-3 mb-2">{item.t}</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed font-light">{item.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BENTO — quick nav to all services
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-5 md:px-12 lg:px-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto">

          <Reveal className="mb-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">
              Quick Navigate
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight tracking-tight">
              Jump to any service.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

            {/* SEO — wide */}
            <Reveal delay={0} className="sm:col-span-2">
              <Link
                href="/seo"
                className="group relative flex flex-col justify-between rounded-2xl p-7 bg-white border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-300 overflow-hidden min-h-[180px]"
              >
                <span className="absolute right-5 bottom-2 text-[100px] font-black text-neutral-50 leading-none select-none pointer-events-none">01</span>
                <div className="relative z-10 flex items-start justify-between">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">SEO Services</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-200 group-hover:text-neutral-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight">
                    Rank #1 on Google in Dubai, Abu Dhabi & Kochi.
                  </h3>
                </div>
              </Link>
            </Reveal>

            {/* Web Dev — tall */}
            <Reveal delay={40} className="sm:row-span-2">
              <Link
                href="/web-development"
                className="group relative flex flex-col justify-between rounded-2xl p-7 bg-white border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-300 overflow-hidden h-full min-h-[280px]"
              >
                <span className="absolute right-4 bottom-2 text-[100px] font-black text-neutral-50 leading-none select-none pointer-events-none">02</span>
                <div className="relative z-10 flex items-start justify-between">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">Web Development</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-200 group-hover:text-neutral-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-neutral-900 tracking-tight leading-snug">
                    Websites that convert, not just impress.
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {['Next.js', 'E-Commerce', 'CMS'].map((t, i) => (
                      <span key={i} className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-400">{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* Paid Ads */}
            <Reveal delay={60}>
              <Link
                href="/paid-advertising"
                className="group relative flex flex-col justify-between rounded-2xl p-7 bg-white border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-300 overflow-hidden min-h-[160px]"
              >
                <span className="absolute right-4 bottom-1 text-[90px] font-black text-neutral-50 leading-none select-none pointer-events-none">03</span>
                <div className="relative z-10 flex items-start justify-between">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">Paid Advertising</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-200 group-hover:text-neutral-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-neutral-900 tracking-tight">
                    Every dirham working harder.
                  </h3>
                </div>
              </Link>
            </Reveal>

            {/* Social Media */}
            <Reveal delay={80}>
              <Link
                href="/social-media-management"
                className="group relative flex flex-col justify-between rounded-2xl p-7 bg-white border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-300 overflow-hidden min-h-[160px]"
              >
                <span className="absolute right-4 bottom-1 text-[90px] font-black text-neutral-50 leading-none select-none pointer-events-none">04</span>
                <div className="relative z-10 flex items-start justify-between">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">Social Media</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-200 group-hover:text-neutral-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-neutral-900 tracking-tight">
                    Followers into customers.
                  </h3>
                </div>
              </Link>
            </Reveal>

            {/* CTA card */}
            <Reveal delay={100}>
              <Link
                href="/contact"
                className="group flex flex-col justify-between rounded-2xl border border-neutral-200 shadow-sm p-7 min-h-[160px] bg-white hover:shadow-md hover:border-neutral-300 transition-all duration-300"
              >
                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">Free Consultation</span>
                <div>
                  <p className="text-neutral-900 font-semibold text-base leading-snug mb-3">
                    Not sure where<br />to start?
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm text-neutral-400 group-hover:text-neutral-900 group-hover:gap-3 transition-all">
                    Talk to our team
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA — light
      ══════════════════════════════════════════ */}
      <section className="py-28 md:py-36 px-5 md:px-12 lg:px-20 bg-white border-t border-neutral-100">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-5">Let's Get Started</p>
          </Reveal>
          <Reveal delay={100}>
            <h2
              className="font-bold text-neutral-900 leading-[1.0] tracking-tight mb-8"
              style={{ fontSize: 'clamp(2.4rem, 7vw, 6rem)' }}
            >
              Ready to grow<br />
              <span className="text-neutral-300">your business</span><br />
              online?
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-base md:text-lg text-neutral-500 font-light leading-relaxed max-w-lg mb-10">
              Join 250+ businesses across{' '}
              <span className="text-neutral-800 font-medium">Dubai, Abu Dhabi, Kochi and India</span>{' '}
              who trust Creative Wired to drive their digital growth.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-neutral-700 transition-colors"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://calendly.com/creativewiredagency/30min"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 border border-neutral-200 text-neutral-600 text-sm font-medium px-7 py-3.5 rounded-full hover:border-neutral-400 transition-colors"
              >
                Book a Free 30-Min Call
              </Link>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10 pt-10 border-t border-neutral-100">
              {[
                'Free consultation',
                'No lock-in contracts',
                'UAE & India based',
                '500+ projects delivered',
              ].map((t, i) => (
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
            {[
              { h: 'Digital Marketing Agency Dubai',    p: 'Full-service digital marketing in Dubai — SEO, paid ads, social media and web development for UAE businesses.'     },
              { h: 'SEO Agency Kochi Kerala',           p: 'Top SEO agency in Kochi. Organic search strategies for Kerala businesses targeting local and national audiences.'  },
              { h: 'Web Development UAE',               p: 'Custom website and web app development for businesses in Dubai, Abu Dhabi and Sharjah on modern tech stacks.'      },
              { h: 'Google Ads Agency Dubai',           p: 'Certified Google Ads management in Dubai. Search, Shopping and Display campaigns built for maximum ROI.'          },
              { h: 'Social Media Management India',     p: 'Social media management for Indian businesses. Content creation, community management and social advertising.'    },
              { h: 'Software Development Kerala',       p: 'Custom software and mobile app development in Kerala. Bespoke solutions for startups and enterprises in India.'   },
            ].map((c, i) => (
              <div key={i}>
                <h3 className="text-[11px] font-semibold text-neutral-700 mb-1.5">{c.h}</h3>
                <p className="text-[10px] text-neutral-400 leading-relaxed">{c.p}</p>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-neutral-300 leading-relaxed max-w-4xl">
            Creative Wired is a full-service digital marketing and web development agency serving businesses across Dubai, Abu Dhabi,
            Sharjah, Kochi, Kerala and India. Our services include SEO, paid advertising (Google Ads, Meta Ads, LinkedIn Ads),
            social media management, web development, custom software development and brand identity design.
            Free consultation available. No lock-in contracts.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
