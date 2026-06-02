import {
  ArrowRight, ArrowUpRight, Phone, CheckCircle,
  Camera, Calendar, MessageCircle, TrendingUp,
  Users, BarChart3, Heart
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export const metadata = {
  title: 'Social Media Management Dubai, Kochi & UAE | Creative Wired',
  description: 'Professional social media management in Dubai, Abu Dhabi, Kochi and Kerala. Instagram, Facebook, LinkedIn and TikTok management that builds communities and drives real business results.',
  keywords: 'social media management Dubai, Instagram management UAE, Facebook marketing Dubai, social media agency Kochi, content creation UAE, social media marketing Kerala, LinkedIn management Dubai',
}

// ── REVEAL ────────────────────────────────────────────────────
function Reveal({
  children, delay = 0, className = '',
}: {
  children: React.ReactNode; delay?: number; className?: string
}) {
  'use client'
  // Using CSS-only approach for server component compatibility
  return (
    <div className={className} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function SocialMediaManagementPage() {

  const stats = [
    { n: '200+', l: 'Brands Managed',       d: 'Across UAE and India'              },
    { n: '150%', l: 'Avg Follower Growth',   d: 'Within the first 6 months'        },
    { n: '8.5%', l: 'Avg Engagement Rate',  d: 'Across all managed platforms'     },
    { n: '4.9',  l: 'Client Rating',         d: 'From 200+ brand reviews'          },
  ]

  const services = [
    {
      no: '01',
      icon: <Camera className="w-5 h-5" />,
      title: 'Content Creation & Design',
      short: 'Content Creation',
      subtitle: 'Visuals that stop the scroll.',
      desc: 'Eye-catching posts, stories, reels and graphics designed to captivate your audience across all platforms — with a consistent brand voice and visual identity.',
      features: [
        'Custom graphic design',
        'Photo & video editing',
        'Brand-consistent visuals',
        'Story templates & highlights',
        'Reel & short-form video',
        'Monthly content calendar',
      ],
      tags: ['Graphic Design', 'Reels', 'Brand Visuals', 'Content Calendar'],
    },
    {
      no: '02',
      icon: <Calendar className="w-5 h-5" />,
      title: 'Social Media Strategy',
      short: 'Strategy & Planning',
      subtitle: 'A plan built for your brand.',
      desc: 'Comprehensive platform-specific strategies tailored to your brand goals and target audience in UAE and India. No copy-paste templates — every plan is unique to your business.',
      features: [
        'Content pillar development',
        'Platform-specific strategies',
        'Competitor analysis',
        'Growth optimisation plan',
        'Posting frequency strategy',
        'Audience persona mapping',
      ],
      tags: ['Strategy', 'Competitor Analysis', 'Growth Planning', 'Audience Research'],
    },
    {
      no: '03',
      icon: <MessageCircle className="w-5 h-5" />,
      title: 'Community Management',
      short: 'Community Management',
      subtitle: 'Turn followers into advocates.',
      desc: 'Active daily engagement — responding to comments, DMs and reviews to build real relationships with your audience and protect your brand reputation across all platforms.',
      features: [
        'Comment & DM management',
        'Community engagement',
        'Customer service support',
        'Reputation monitoring',
        'Review management',
        'Crisis response protocol',
      ],
      tags: ['Daily Engagement', 'DM Management', 'Reputation', 'Customer Support'],
    },
    {
      no: '04',
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Social Media Advertising',
      short: 'Paid Social Ads',
      subtitle: 'Every dirham reaching the right person.',
      desc: 'Targeted Instagram, Facebook, LinkedIn and TikTok ad campaigns that reach new audiences and drive measurable conversions — tracked and optimised weekly for UAE and Indian markets.',
      features: [
        'Instagram & Facebook Ads',
        'LinkedIn advertising',
        'TikTok ad campaigns',
        'Audience targeting & lookalikes',
        'A/B creative testing',
        'Weekly performance reports',
      ],
      tags: ['Meta Ads', 'LinkedIn Ads', 'TikTok Ads', 'Performance Marketing'],
    },
    {
      no: '05',
      icon: <Users className="w-5 h-5" />,
      title: 'Influencer Marketing',
      short: 'Influencer Campaigns',
      subtitle: 'Trusted voices, amplified reach.',
      desc: 'We identify and manage partnerships with relevant influencers in UAE and India to amplify your brand reach, build credibility and drive awareness with audiences that matter.',
      features: [
        'Influencer identification',
        'Partnership negotiations',
        'Campaign management',
        'Performance tracking',
        'Content approval workflow',
        'ROI measurement',
      ],
      tags: ['UAE Influencers', 'India Influencers', 'Campaign Management', 'Brand Collab'],
    },
    {
      no: '06',
      icon: <BarChart3 className="w-5 h-5" />,
      title: 'Analytics & Reporting',
      short: 'Analytics',
      subtitle: 'Data you can actually act on.',
      desc: 'Detailed monthly reports covering follower growth, engagement rates, reach, impressions and ROI — with clear recommendations so you always know what\'s working and what to improve.',
      features: [
        'Monthly performance reports',
        'Growth analytics dashboard',
        'Engagement rate tracking',
        'ROI measurement',
        'Competitor benchmarking',
        'Custom KPI tracking',
      ],
      tags: ['Monthly Reports', 'ROI Tracking', 'Growth Analytics', 'KPI Dashboard'],
    },
  ]

  const platforms = [
    {
      name: 'Instagram',
      desc: 'Visual storytelling & engagement',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
      tags: ['Feed Posts', 'Stories', 'Reels', 'Shopping Tags'],
    },
    {
      name: 'Facebook',
      desc: 'Community building & advertising',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png',
      tags: ['Page Management', 'Groups', 'Facebook Ads', 'Events'],
    },
    {
      name: 'LinkedIn',
      desc: 'Professional networking & B2B',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
      tags: ['Company Pages', 'Thought Leadership', 'Lead Generation'],
    },
    {
      name: 'TikTok',
      desc: 'Viral content & Gen Z engagement',
      logo: 'https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg',
      tags: ['Short-form Videos', 'Trend Creation', 'Hashtag Challenges'],
    },
    {
      name: 'YouTube',
      desc: 'Long-form content & education',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg',
      tags: ['Channel Management', 'Video SEO', 'YouTube Shorts'],
    },
    {
      name: 'Twitter / X',
      desc: 'Real-time engagement & news',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg',
      tags: ['Tweet Strategy', 'Thread Creation', 'Trend Participation'],
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Brand Discovery & Audit',
      desc: 'We study your brand voice, audit your current presence across platforms, and identify quick wins and long-term opportunities.',
    },
    {
      step: '02',
      title: 'Strategy Development',
      desc: 'Platform-specific content strategy, content pillars, posting schedule and engagement tactics tailored to your audience in UAE or India.',
    },
    {
      step: '03',
      title: 'Content Creation & Scheduling',
      desc: 'Our design and copy team creates all content, gets your approval, then schedules and publishes across all platforms.',
    },
    {
      step: '04',
      title: 'Engage & Optimise',
      desc: 'Daily community management, monthly performance reviews and continuous content optimisation to keep improving results.',
    },
  ]

  const testimonials = [
    {
      name: 'Emma Thompson',
      role: 'Brand Manager',
      company: 'Boutique Fashion Brand',
      content: 'Creative Wired transformed our Instagram presence. Follower count tripled and sales from social media increased by 400% in 6 months.',
      result: '400% sales increase',
      platform: 'Instagram',
    },
    {
      name: 'Marcus Johnson',
      role: 'Marketing Director',
      company: 'B2B Tech Company',
      content: 'Their LinkedIn strategy generated more qualified leads than our entire sales team. The thought leadership content positioned us as industry experts overnight.',
      result: '300+ qualified leads',
      platform: 'LinkedIn',
    },
    {
      name: 'Sofia Rodriguez',
      role: 'Owner',
      company: 'Local Restaurant, Kochi',
      content: 'Our TikTok went viral and brought hundreds of new customers in weeks. The team genuinely understands what\'s trending and how to make it work for your brand.',
      result: 'Viral TikTok campaign',
      platform: 'TikTok',
    },
  ]

  return (
    <div className="w-full bg-white overflow-x-hidden">

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

      <Header currentPage="social-media-management" />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="min-h-[55vh] flex flex-col justify-between pt-28 pb-12 px-5 md:px-12 lg:px-20 bg-white border-b border-neutral-100">
        <div className="max-w-6xl mx-auto w-full">

          <div className="flex items-start justify-between mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
              Social Media Management
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
              Dubai · Abu Dhabi · Kochi
            </span>
          </div>

          <h1
            className="font-bold leading-[1.0] tracking-tight text-neutral-900 mb-8"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6.5rem)' }}
          >
            Build communities.<br />
            <span className="text-neutral-300">Drive real</span><br />
            engagement.
          </h1>

          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-16">
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-lg font-light">
              Strategic social media management for brands in{' '}
              <span className="text-neutral-800 font-medium">Dubai, Abu Dhabi, Kochi and India</span> —
              content creation, community management, paid social and influencer campaigns that turn followers into customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-700 transition-colors"
              >
                Get Free Social Audit
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
          <div className="flex flex-wrap gap-x-8 gap-y-2 mt-12 pt-8 border-t border-neutral-100">
            {[
              'Free social audit',
              'No lock-in contracts',
              'UAE & India based',
              '200+ brands managed',
            ].map((t, i) => (
              <span key={i} className="text-[11px] text-neutral-400 uppercase tracking-wider">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS
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
          SERVICES — full card rows
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-5 md:px-12 lg:px-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto">

          <div className="mb-14">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">What We Do</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight tracking-tight">
                Six services.<br />
                <span className="text-neutral-400">Every platform covered.</span>
              </h2>
              <p className="text-sm text-neutral-500 max-w-xs leading-relaxed md:text-right font-light">
                From content creation to paid social — one team handles everything.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-300 overflow-hidden"
              >
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
                    href="/contact"
                    className="group w-8 h-8 rounded-full border border-neutral-100 flex items-center justify-center hover:border-neutral-900 hover:bg-neutral-900 transition-all"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-white transition-colors" />
                  </Link>
                </div>

                {/* Card body */}
                <div className="grid lg:grid-cols-5 gap-0 p-7 md:p-9 pt-5">
                  <div className="lg:col-span-3 lg:pr-12 lg:border-r lg:border-neutral-100">
                    <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-snug tracking-tight mb-2">
                      {s.title}
                    </h3>
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
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-neutral-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-neutral-700 transition-colors"
                    >
                      Get Started
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

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
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PLATFORMS — bento grid
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-5 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">

          <div className="mb-14">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">Platforms We Manage</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight tracking-tight">
                Every platform.<br />
                <span className="text-neutral-400">One strategy.</span>
              </h2>
              <p className="text-sm text-neutral-500 max-w-xs leading-relaxed md:text-right font-light">
                Platform-native content and strategy — not the same post copy-pasted everywhere.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {platforms.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-300 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Image
                      src={p.logo}
                      alt={p.name}
                      width={36}
                      height={36}
                      className="object-contain max-h-9"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900">{p.name}</h3>
                    <p className="text-[11px] text-neutral-400">{p.desc}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t, j) => (
                    <span key={j} className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-50 border border-neutral-100 text-neutral-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROCESS
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-5 md:px-12 lg:px-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto">

          <div className="mb-14">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">How We Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight tracking-tight">
              Our process.<br />
              <span className="text-neutral-400">Simple. Systematic.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {process.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-6"
              >
                <span className="text-[10px] text-neutral-300 font-mono">{item.step}</span>
                <h3 className="text-sm font-bold text-neutral-900 mt-3 mb-2">{item.title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-5 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">

          <div className="mb-14">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">Client Results</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight tracking-tight">
                Real brands.<br />
                <span className="text-neutral-400">Real results.</span>
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:gap-3 transition-all"
              >
                Work with us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-50 border border-neutral-100 text-neutral-400">
                      {t.platform}
                    </span>
                    <span className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-900 text-white font-medium">
                      {t.result}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed italic mb-6">
                    "{t.content}"
                  </p>
                </div>
                <div className="border-t border-neutral-50 pt-4">
                  <p className="text-xs font-semibold text-neutral-900">{t.name}</p>
                  <p className="text-[11px] text-neutral-400 mt-0.5">{t.role} · {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY US
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-24 px-5 md:px-12 lg:px-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto">

          <div className="mb-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">Why Creative Wired</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight tracking-tight">
              The agency that<br />
              <span className="text-neutral-400">shows its work.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { no: '01', t: 'UAE & India Presence',    d: 'We know your market. Physical presence in Dubai and Kochi — not just a remote team working in the wrong time zone.' },
              { no: '02', t: 'No Lock-in Contracts',    d: 'Month-to-month only. We earn your business every single month with results — no 12-month retainer traps.'          },
              { no: '03', t: 'Platform-Native Content', d: 'We create for Instagram like it\'s Instagram, for LinkedIn like it\'s LinkedIn. No lazy cross-posting.'            },
              { no: '04', t: 'Transparent Reporting',   d: 'Full analytics access. Every metric — reach, engagement, follower growth, ROI — always visible to you.'            },
            ].map((item, i) => (
              <div key={i} className="border-t border-neutral-100 pt-5">
                <span className="text-[10px] text-neutral-300 font-mono">{item.no}</span>
                <h3 className="text-sm font-semibold text-neutral-900 mt-3 mb-2">{item.t}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-light">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA — light
      ══════════════════════════════════════════ */}
      <section className="py-28 md:py-36 px-5 md:px-12 lg:px-20 bg-white border-t border-neutral-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-5">Get Started</p>
          <h2
            className="font-bold text-neutral-900 leading-[1.0] tracking-tight mb-8"
            style={{ fontSize: 'clamp(2.4rem, 7vw, 6rem)' }}
          >
            Ready to grow<br />
            <span className="text-neutral-300">your social</span><br />
            presence?
          </h2>
          <p className="text-base md:text-lg text-neutral-500 font-light leading-relaxed max-w-lg mb-10">
            Free social media audit for brands in{' '}
            <span className="text-neutral-800 font-medium">Dubai, Abu Dhabi, Kochi and India</span>.
            We'll review your current presence and show you exactly how to grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-neutral-700 transition-colors"
            >
              Get Free Social Audit
              <Heart className="w-4 h-4" />
            </Link>
            <Link
              href="https://calendly.com/creativewiredagency/30min"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 border border-neutral-200 text-neutral-600 text-sm font-medium px-7 py-3.5 rounded-full hover:border-neutral-400 transition-colors"
            >
              Book a Free 30-Min Call
            </Link>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10 pt-10 border-t border-neutral-100">
            {['Free social audit', 'No lock-in contracts', 'UAE & India based', '200+ brands managed'].map((t, i) => (
              <span key={i} className="text-[11px] text-neutral-400 uppercase tracking-wider">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SEO TEXT BLOCK
      ══════════════════════════════════════════ */}
      <section className="py-14 px-5 md:px-12 lg:px-20 bg-white border-t border-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
            {[
              { h: 'Social Media Agency Dubai',       p: 'Full-service social media management in Dubai. Instagram, Facebook, LinkedIn and TikTok for UAE businesses.'           },
              { h: 'Instagram Management UAE',         p: 'Professional Instagram management for UAE brands. Content creation, Reels, Stories and community management.'        },
              { h: 'Social Media Marketing Kochi',    p: 'Top social media marketing agency in Kochi. Organic growth and paid social for Kerala and Indian businesses.'         },
              { h: 'LinkedIn Marketing Dubai',         p: 'B2B LinkedIn marketing for Dubai companies. Thought leadership, lead generation and company page management.'        },
              { h: 'TikTok Marketing UAE',             p: 'TikTok marketing and content creation for UAE brands. Viral short-form video strategy for Gen Z audiences.'          },
              { h: 'Content Creation Kerala',          p: 'Professional content creation for social media in Kerala. Graphic design, video editing and copywriting.'            },
            ].map((c, i) => (
              <div key={i}>
                <h3 className="text-[11px] font-semibold text-neutral-700 mb-1.5">{c.h}</h3>
                <p className="text-[10px] text-neutral-400 leading-relaxed">{c.p}</p>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-neutral-300 leading-relaxed max-w-4xl">
            Creative Wired is a social media management agency serving businesses in Dubai, Abu Dhabi, Sharjah, Kochi, Kerala and India.
            Our services include Instagram management, Facebook marketing, LinkedIn advertising, TikTok content creation, influencer marketing,
            community management and social media analytics. Free consultation available. No lock-in contracts.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
