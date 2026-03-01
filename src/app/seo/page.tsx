import {
  ArrowRight, ArrowUpRight, Phone, Search, TrendingUp,
  Target, BarChart3, Globe, Shield, Clock, Award, Users, CheckCircle, Star
} from 'lucide-react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'SEO Agency Dubai, Abu Dhabi & Kochi | #1 SEO Services UAE & India | Creative Wired',
  description: 'Top-rated SEO agency in Dubai, Abu Dhabi, Sharjah, Kochi and Kerala. Technical SEO, local SEO, link building and content strategy that gets you to page one. Free SEO audit.',
  keywords: 'SEO agency Dubai, SEO services Abu Dhabi, local SEO Dubai, SEO company Kochi, SEO agency Kerala, technical SEO UAE, link building India, Google ranking Dubai, organic traffic UAE, SEO consultant Sharjah',
}

export default function SEOPage() {

  const stats = [
    { n: '500+',  l: 'SEO Campaigns',         d: 'Successfully delivered across UAE & India'   },
    { n: '340%',  l: 'Avg Traffic Growth',     d: 'Organic traffic increase for our clients'    },
    { n: '15+',   l: 'SEO Specialists',        d: 'Google certified in-house experts'           },
    { n: '60',    l: 'Days to First Results',  d: 'Average time to see ranking improvements'    },
  ]

  const services = [
    {
      no: '01',
      title: 'Keyword Research & Strategy',
      desc: 'In-depth keyword research targeting high-intent search terms for your market — Dubai, Abu Dhabi, Kochi, Kerala and India-wide. We map search intent to every stage of your funnel.',
      features: ['Competitor Keyword Gap Analysis', 'Long-Tail Keyword Research', 'Search Intent Mapping', 'Keyword Difficulty Assessment'],
      tags: ['SEO Strategy Dubai', 'Keyword Research UAE', 'Search Intent'],
      href: '/contact',
    },
    {
      no: '02',
      title: 'On-Page SEO Optimisation',
      desc: 'Complete on-page optimisation of your website — titles, meta tags, content structure, internal linking and schema markup — for maximum visibility on Google in UAE and India.',
      features: ['Title & Meta Tag Optimisation', 'Content Structure & Headings', 'Internal Linking Strategy', 'Schema Markup Implementation'],
      tags: ['On-Page SEO UAE', 'Meta Optimisation', 'Schema Markup'],
      href: '/contact',
    },
    {
      no: '03',
      title: 'Technical SEO Audit',
      desc: 'Deep technical audit to find and fix everything stopping Google from ranking your site — Core Web Vitals, crawlability, page speed, mobile indexing and site architecture.',
      features: ['Core Web Vitals Optimisation', 'Mobile-First Indexing', 'Crawl Error Resolution', 'Site Speed & Performance'],
      tags: ['Technical SEO Dubai', 'Core Web Vitals', 'Page Speed SEO'],
      href: '/contact',
    },
    {
      no: '04',
      title: 'Link Building Campaigns',
      desc: 'White-hat link acquisition from high-authority domains in your niche. Guest posts, digital PR and editorial links that build domain authority and push rankings in UAE and India markets.',
      features: ['High-Authority Backlink Acquisition', 'Guest Posting Campaigns', 'Digital PR & HARO', 'Broken Link Building'],
      tags: ['Link Building UAE', 'Backlinks India', 'Domain Authority'],
      href: '/contact',
    },
    {
      no: '05',
      title: 'Local SEO Optimisation',
      desc: 'Dominate local search in Dubai, Abu Dhabi, Sharjah, Kochi and across Kerala. Google Business Profile, local citations, reviews and geo-targeted content that drives foot traffic and calls.',
      features: ['Google Business Profile Optimisation', 'Local Citation Building', 'Review Management Strategy', 'Geo-Targeted Content'],
      tags: ['Local SEO Dubai', 'Local SEO Kochi', 'Google Business Profile'],
      href: '/contact',
    },
    {
      no: '06',
      title: 'SEO Analytics & Reporting',
      desc: 'Custom dashboards tracking rankings, traffic, conversions and ROI — so you see exactly what your SEO investment is returning every month, in real time.',
      features: ['Custom Analytics Dashboard', 'Monthly Ranking Reports', 'Conversion Tracking Setup', 'Competitor Rank Monitoring'],
      tags: ['SEO Reporting', 'Rank Tracking UAE', 'SEO ROI'],
      href: '/contact',
    },
  ]

  const process = [
    {
      no: '01',
      title: 'SEO Audit & Analysis',
      desc: 'Full technical, on-page and off-page audit of your current SEO. We benchmark against top competitors in your market — Dubai, Kochi or nationwide India.',
    },
    {
      no: '02',
      title: 'Strategy Development',
      desc: 'Custom SEO roadmap built around your goals, target keywords, audience locations and competitive landscape across UAE and India.',
    },
    {
      no: '03',
      title: 'Implementation',
      desc: 'On-page optimisation, technical fixes, content creation and link building executed in priority order for fastest ranking improvement.',
    },
    {
      no: '04',
      title: 'Monitor & Compound',
      desc: 'Continuous ranking monitoring, algorithm update response and monthly optimisation — SEO compounds over time and so do your results.',
    },
  ]

  const faqs = [
    {
      q: 'How long does SEO take to show results in Dubai or Kochi?',
      a: 'Most clients see measurable ranking improvements within 60–90 days. Competitive markets like Dubai may take 4–6 months for page one results. We set clear milestones upfront.',
    },
    {
      q: 'Do you do SEO for both UAE and India markets?',
      a: 'Yes — we run simultaneous SEO campaigns targeting Dubai, Abu Dhabi, Sharjah and Indian markets including Kochi, Kerala and nationwide. Separate keyword strategies, one team.',
    },
    {
      q: 'What is local SEO and do I need it?',
      a: 'Local SEO helps your business appear when people search "near me" or for services in a specific city. Essential for businesses in Dubai, Kochi or any UAE/India location targeting local customers.',
    },
    {
      q: 'Do you guarantee first page rankings?',
      a: 'No ethical SEO agency can guarantee specific rankings — Google\'s algorithm is not for sale. We guarantee consistent work, transparent reporting and measurable traffic growth.',
    },
    {
      q: 'What\'s included in a free SEO audit?',
      a: 'A full review of your technical health, on-page optimisation gaps, backlink profile, keyword rankings and top competitor comparison — delivered within 48 hours, no commitment required.',
    },
  ]

  const results = [
    {
      span: 'md:col-span-2',
      tag: 'Local SEO + Content · Dubai Real Estate Agency',
      n: '420%',
      label: 'Organic traffic growth in 5 months',
      detail: 'Moved from page 6 to position #1 for "property for sale Dubai". Leads from organic search became their primary acquisition channel.',
    },
    {
      span: '',
      tag: 'Technical SEO · Kerala E-Commerce',
      n: '#1',
      label: 'Google ranking for 12 target keywords',
      detail: 'Full technical audit and on-page overhaul pushed 12 priority keywords to page one within 90 days.',
    },
    {
      span: '',
      tag: 'Local SEO · Abu Dhabi Restaurant Chain',
      n: '2×',
      label: 'Walk-in customers from Google Maps',
      detail: '',
    },
    {
      span: '',
      tag: 'Link Building · Kochi SaaS Startup',
      n: '180',
      label: 'High-authority backlinks acquired',
      detail: '',
    },
    {
      span: '',
      tag: 'Your Business',
      n: '?',
      label: 'What could your organic growth look like?',
      detail: '',
      isCta: true,
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
          aria-label="Contact Creative Wired SEO Agency"
        >
          <Phone className="w-4 h-4 text-white" />
        </Link>
      </div>

      <Header currentPage="seo" />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section
        className="min-h-[55vh] flex flex-col justify-between pt-28 pb-12 px-5 md:px-12 lg:px-20 bg-white border-b border-neutral-100"
        aria-label="SEO Agency Dubai, Abu Dhabi, Kochi & Kerala — Creative Wired"
      >
        <div className="max-w-6xl mx-auto w-full">

          <div className="flex items-start justify-between mb-12 fu">
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">SEO Services</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">Dubai · Abu Dhabi · Kochi</span>
          </div>

          <h1
            className="font-bold leading-[1.0] tracking-tight text-neutral-900 mb-8 fu2"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6.5rem)' }}
          >
            Get found on Google<br />
            <span className="text-neutral-300">before your</span><br />
            competitors do.
          </h1>

          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-16 fu3">
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-lg font-light">
              Technical SEO, local SEO, link building and content strategy for businesses in{' '}
              <span className="text-neutral-800 font-medium">Dubai, Abu Dhabi, Sharjah, Kochi and Kerala</span>.
              Average client traffic growth: <span className="text-neutral-800 font-medium">340%</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-700 transition-colors"
              >
                Get Free SEO Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://calendly.com/creativewiredagency/30min"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 border border-neutral-200 text-neutral-700 text-sm font-medium px-6 py-3 rounded-full hover:border-neutral-400 transition-colors"
              >
                Book Strategy Call
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2 mt-12 pt-8 border-t border-neutral-100 fu4">
            {[
              'Free SEO audit', 'No lock-in contracts',
              'UAE & India campaigns', 'Results in 60 days', 'Google certified team',
            ].map((t, i) => (
              <span key={i} className="text-[11px] text-neutral-400 uppercase tracking-wider">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS — light version ── */}
<section className="py-16 md:py-20 px-5 md:px-12 lg:px-20 bg-white border-y border-neutral-100">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-100">
      {stats.map((s, i) => (
        <div key={i} className="px-6 py-6 first:pl-0">
          <div className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-1">{s.n}</div>
          <div className="text-xs font-semibold text-neutral-700 mb-1">{s.l}</div>
          <div className="text-[11px] text-neutral-400 leading-snug">{s.d}</div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ══════════════════════════════════════════
          SERVICES — Bento Grid
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-32 px-5 md:px-12 lg:px-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto">

          <div className="mb-14 md:mb-20">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">SEO Services</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 leading-tight tracking-tight">
                Six SEO services.<br />One expert team.
              </h2>
              <p className="text-sm text-neutral-500 max-w-xs leading-relaxed md:text-right font-light">
                Everything from technical audits to link building — for businesses in UAE and India.
              </p>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

            {/* 01 — Keyword Research (wide 2-col) */}
            <Link
              href="/contact"
              className="group sm:col-span-2 relative flex flex-col justify-between rounded-2xl p-7 md:p-9 bg-white border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-300 overflow-hidden min-h-[260px]"
            >
              <span className="absolute right-5 bottom-3 text-[120px] font-black text-neutral-50 leading-none select-none pointer-events-none">01</span>
              <div className="relative z-10 flex items-start justify-between">
                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">Keyword Research & Strategy</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-200 group-hover:text-neutral-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-snug mb-3 tracking-tight">
                  Target keywords that<br />actually bring buyers.
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed max-w-md font-light">
                  High-intent keyword research for Dubai, Abu Dhabi, Kochi and India-wide markets. Search intent mapping across every stage of your customer funnel.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {['Competitor Gap Analysis', 'Long-Tail Keywords', 'Search Intent Mapping', 'Keyword Difficulty'].map((t, i) => (
                    <span key={i} className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-400">{t}</span>
                  ))}
                </div>
              </div>
            </Link>

            {/* 02 — On-Page SEO (tall row-span-2) */}
            <Link
              href="/contact"
              className="group sm:row-span-2 relative flex flex-col justify-between rounded-2xl p-7 bg-white border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-300 overflow-hidden min-h-[340px] h-full"
            >
              <span className="absolute right-4 bottom-2 text-[110px] font-black text-neutral-50 leading-none select-none pointer-events-none">02</span>
              <div className="relative z-10 flex items-start justify-between">
                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">On-Page SEO</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-200 group-hover:text-neutral-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-neutral-900 leading-snug mb-3 tracking-tight">
                  Every page optimised to rank and convert.
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed font-light mb-4">
                  Titles, meta tags, content structure, internal linking and schema markup — complete on-page SEO for your entire website, built for Google UAE and India.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['Title & Meta Optimisation', 'Content Structure', 'Internal Linking', 'Schema Markup'].map((t, i) => (
                    <span key={i} className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-400">{t}</span>
                  ))}
                </div>
              </div>
            </Link>

            {/* 03 — Technical SEO */}
            <Link
              href="/contact"
              className="group relative flex flex-col justify-between rounded-2xl p-7 bg-white border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-300 overflow-hidden min-h-[220px]"
            >
              <span className="absolute right-4 bottom-2 text-[100px] font-black text-neutral-50 leading-none select-none pointer-events-none">03</span>
              <div className="relative z-10 flex items-start justify-between">
                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">Technical SEO Audit</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-200 group-hover:text-neutral-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-neutral-900 leading-snug mb-2 tracking-tight">
                  Fix what's stopping Google from ranking you.
                </h3>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {['Core Web Vitals', 'Page Speed', 'Mobile Indexing'].map((t, i) => (
                    <span key={i} className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-400">{t}</span>
                  ))}
                </div>
              </div>
            </Link>

            {/* 04 — Link Building */}
            <Link
              href="/contact"
              className="group relative flex flex-col justify-between rounded-2xl p-7 bg-white border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-300 overflow-hidden min-h-[220px]"
            >
              <span className="absolute right-4 bottom-2 text-[100px] font-black text-neutral-50 leading-none select-none pointer-events-none">04</span>
              <div className="relative z-10 flex items-start justify-between">
                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">Link Building</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-200 group-hover:text-neutral-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-neutral-900 leading-snug mb-2 tracking-tight">
                  Build authority. Outrank competitors.
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-light">
                  White-hat backlink acquisition from high-DA domains through guest posts, digital PR and editorial links.
                </p>
              </div>
            </Link>

            {/* 05 — Local SEO (wide 2-col) */}
            <Link
              href="/contact"
              className="group sm:col-span-2 lg:col-span-2 relative flex flex-col sm:flex-row items-start sm:items-end justify-between rounded-2xl p-7 md:p-9 bg-white border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-300 overflow-hidden min-h-[200px] gap-6"
            >
              <span className="absolute right-4 bottom-0 text-[120px] font-black text-neutral-50 leading-none select-none pointer-events-none">05</span>
              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 block mb-3">Local SEO</span>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-snug tracking-tight">
                  #1 in Dubai, Abu Dhabi,<br className="hidden md:block" /> Kochi & Kerala.
                </h3>
              </div>
              <div className="relative z-10 flex-shrink-0">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {['Google Business Profile', 'Local Citations', 'Review Management', 'Maps Optimisation'].map((t, i) => (
                    <span key={i} className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-400">{t}</span>
                  ))}
                </div>
                <div className="inline-flex items-center gap-2 text-sm text-neutral-400 group-hover:text-neutral-900 group-hover:gap-3 transition-all">
                  Dominate local search <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* 06 — Analytics */}
            <Link
              href="/contact"
              className="group relative flex flex-col justify-between rounded-2xl p-7 bg-white border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-300 overflow-hidden min-h-[200px]"
            >
              <span className="absolute right-4 bottom-2 text-[100px] font-black text-neutral-50 leading-none select-none pointer-events-none">06</span>
              <div className="relative z-10 flex items-start justify-between">
                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">SEO Analytics & Reporting</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-200 group-hover:text-neutral-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-neutral-900 leading-snug mb-2 tracking-tight">
                  See every ranking move, in real time.
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-light">
                  Custom dashboards, monthly reports and ROI tracking — full transparency, always.
                </p>
              </div>
            </Link>

            {/* CTA card */}
            <Link
              href="/contact"
              className="group flex flex-col justify-between rounded-2xl border border-neutral-100 shadow-sm p-7 min-h-[200px] bg-white hover:shadow-md hover:border-neutral-300 transition-all duration-300"
            >
              <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">Free Audit</span>
              <div>
                <p className="text-neutral-900 font-semibold text-lg leading-snug mb-3">
                  Not sure where<br />your SEO stands?
                </p>
                <div className="inline-flex items-center gap-2 text-sm text-neutral-400 group-hover:text-neutral-900 group-hover:gap-3 transition-all">
                  Get a free SEO audit
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ── RESULTS — light bento ── */}
<section className="py-20 md:py-28 px-5 md:px-12 lg:px-20 bg-neutral-50">
  <div className="max-w-6xl mx-auto">
    <div className="mb-12">
      <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">Client Results</p>
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight tracking-tight">
        Real rankings.<br />Real businesses.
      </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

      <div className="md:col-span-2 rounded-2xl bg-white border border-neutral-100 shadow-sm p-8 md:p-10 flex flex-col justify-between min-h-[220px]">
        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
          Local SEO + Content · Dubai Real Estate Agency
        </span>
        <div>
          <div className="text-5xl md:text-7xl font-bold text-neutral-900 tracking-tight mt-3">
            420<span className="text-neutral-300">%</span>
          </div>
          <p className="text-neutral-500 text-sm mt-1 font-light">Organic traffic growth in 5 months</p>
          <p className="text-neutral-400 text-xs mt-4 max-w-sm leading-relaxed">
            Moved from page 6 to position #1 for "property for sale Dubai". Organic leads became their primary acquisition channel.
          </p>
        </div>
      </div>

      <div className="rounded-2xl bg-white border border-neutral-100 shadow-sm p-7 flex flex-col justify-between min-h-[220px]">
        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
          Technical SEO · Kerala E-Commerce
        </span>
        <div>
          <div className="text-5xl font-bold text-neutral-900 tracking-tight">#1</div>
          <p className="text-neutral-500 text-sm mt-1 font-light">Google ranking — 12 keywords</p>
          <p className="text-neutral-400 text-xs mt-3 leading-relaxed">
            Technical audit + on-page overhaul pushed 12 priority keywords to page one in 90 days.
          </p>
        </div>
      </div>

      <div className="rounded-2xl bg-white border border-neutral-100 shadow-sm p-7 flex flex-col justify-between min-h-[180px]">
        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
          Local SEO · Abu Dhabi Restaurant Chain
        </span>
        <div>
          <div className="text-4xl font-bold text-neutral-900 tracking-tight">
            2<span className="text-neutral-300">×</span>
          </div>
          <p className="text-neutral-500 text-sm mt-1 font-light">Walk-in customers from Google Maps</p>
        </div>
      </div>

      <div className="rounded-2xl bg-white border border-neutral-100 shadow-sm p-7 flex flex-col justify-between min-h-[180px]">
        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
          Link Building · Kochi SaaS Startup
        </span>
        <div>
          <div className="text-4xl font-bold text-neutral-900 tracking-tight">
            180<span className="text-neutral-300">+</span>
          </div>
          <p className="text-neutral-500 text-sm mt-1 font-light">High-authority backlinks acquired</p>
        </div>
      </div>

      <Link
        href="/contact"
        className="rounded-2xl border border-neutral-200 shadow-sm bg-white p-7 flex flex-col justify-between min-h-[180px] hover:shadow-md hover:border-neutral-300 transition-all group"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">Your Business</span>
        <div>
          <p className="text-neutral-900 font-semibold text-base leading-snug mb-2">
            What could your organic growth look like?
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-neutral-400 group-hover:text-neutral-900 transition-colors">
            Get a free audit <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </Link>

    </div>
  </div>
</section>

      {/* ══════════════════════════════════════════
          PROCESS
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-5 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight tracking-tight">
              From audit to<br />page one rankings.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {process.map((p, i) => (
              <div
                key={i}
                className="rounded-2xl border border-neutral-100 bg-white shadow-sm p-6 hover:shadow-md hover:border-neutral-300 transition-all duration-200 relative"
              >
                <span className="text-[10px] text-neutral-300 font-mono block mb-4">{p.no}</span>
                <h3 className="text-sm font-semibold text-neutral-900 mb-2">{p.title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-light">{p.desc}</p>
                {i < process.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-2 top-8 w-4 h-4 text-neutral-200 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-5 md:px-12 lg:px-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-10 md:gap-16">
            <div className="md:col-span-2">
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight tracking-tight mb-5">
                SEO questions answered.
              </h2>
              <p className="text-sm text-neutral-500 font-light leading-relaxed mb-6">
                Common questions from businesses in Dubai, Kochi and across India about our SEO services.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:gap-3 transition-all"
              >
                Ask us anything <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="md:col-span-3 divide-y divide-neutral-100">
              {faqs.map((faq, i) => (
                <div key={i} className="py-6 first:pt-0">
                  <div className="flex items-start gap-4">
                    <span className="text-[10px] text-neutral-300 font-mono mt-1 flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-900 mb-2">{faq.q}</h3>
                      <p className="text-xs text-neutral-500 leading-relaxed font-light">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA — light version ── */}
<section className="py-28 md:py-40 px-5 md:px-12 lg:px-20 bg-neutral-50 border-t border-neutral-100">
  <div className="max-w-5xl mx-auto">
    <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-5">Get Started</p>
    <h2
      className="font-bold text-neutral-900 leading-[1.0] tracking-tight mb-8"
      style={{ fontSize: 'clamp(2.4rem, 7vw, 6rem)' }}
    >
      Ready to rank<br />
      <span className="text-neutral-300">above every</span><br />
      competitor?
    </h2>
    <p className="text-base md:text-lg text-neutral-500 font-light leading-relaxed max-w-lg mb-10">
      Free SEO audit for businesses in{' '}
      <span className="text-neutral-800 font-medium">Dubai, Abu Dhabi, Kochi and India</span>.
      We'll show you exactly why you're not ranking and what it takes to fix it.
    </p>
    <div className="flex flex-col sm:flex-row gap-3">
      <Link
        href="/contact"
        className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-neutral-700 transition-colors"
      >
        Get Free SEO Audit <ArrowRight className="w-4 h-4" />
      </Link>
      <Link
        href="https://calendly.com/creativewiredagency/30min"
        target="_blank"
        className="inline-flex items-center justify-center gap-2 border border-neutral-200 text-neutral-600 text-sm font-medium px-7 py-3.5 rounded-full hover:border-neutral-400 transition-colors"
      >
        Book Free Strategy Call
      </Link>
    </div>
    <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10 pt-10 border-t border-neutral-200">
      {['Free SEO audit', 'No lock-in contracts', 'Google certified', 'UAE & India based', 'Results in 60 days'].map((t, i) => (
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
              { h: 'SEO Agency Dubai',           p: 'Expert SEO services in Dubai. Keyword research, technical SEO, link building and local SEO to get your business to page one of Google UAE.'          },
              { h: 'SEO Services Abu Dhabi',      p: 'Professional SEO agency in Abu Dhabi. On-page optimisation, content strategy and authority building for Abu Dhabi businesses.'                     },
              { h: 'Local SEO Sharjah',           p: 'Local SEO experts in Sharjah. Google Business Profile optimisation, local citations and geo-targeted content to dominate Sharjah search results.'  },
              { h: 'SEO Agency Kochi',            p: 'Top-rated SEO agency in Kochi, Kerala. Organic search strategies that drive traffic, leads and revenue for businesses across Kerala.'              },
              { h: 'Technical SEO India',         p: 'Technical SEO services for Indian businesses. Site speed, Core Web Vitals, crawlability and mobile-first indexing optimisation nationwide.'        },
              { h: 'Link Building UAE',           p: 'White-hat link building for UAE businesses. High-authority backlinks through guest posting, digital PR and editorial outreach.'                    },
            ].map((c, i) => (
              <div key={i}>
                <h3 className="text-[11px] font-semibold text-neutral-700 mb-1.5">{c.h}</h3>
                <p className="text-[10px] text-neutral-400 leading-relaxed">{c.p}</p>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-neutral-300 leading-relaxed max-w-4xl">
            Creative Wired is a certified SEO agency serving businesses in Dubai, Abu Dhabi, Sharjah, Kochi, Kerala and across India.
            Our SEO services include keyword research, on-page SEO optimisation, technical SEO audits, link building, local SEO and
            SEO analytics. We help businesses rank on Google for high-intent search terms in UAE and India markets, driving sustainable
            organic traffic and measurable revenue growth. Free SEO audit available with no commitment required.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
