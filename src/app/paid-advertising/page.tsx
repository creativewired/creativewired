import {
  ArrowRight, ArrowUpRight, Phone,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Paid Advertising Agency Dubai & Kochi | Google Ads, Meta Ads | Creative Wired',
  description: 'Top-rated paid advertising agency in Dubai, Abu Dhabi and Kochi. Google Ads, Facebook Ads, Instagram Ads and PPC management that maximises ROI. Free ad audit.',
  keywords: 'paid advertising agency Dubai, Google Ads management Dubai, Facebook Ads agency Kochi, PPC agency UAE, Meta Ads India, paid search Dubai, performance marketing agency Kerala, Google Ads Abu Dhabi',
}

export default function PaidAdvertisingPage() {

  const stats = [
    { n: '400%', l: 'Average ROAS',         d: 'Return on ad spend across accounts'    },
    { n: '500+', l: 'Campaigns Managed',    d: 'Across Google, Meta, LinkedIn & more'  },
    { n: '$5M+', l: 'Ad Spend Optimised',   d: 'Total budget managed profitably'       },
    { n: '25+',  l: 'Certified Specialists',d: 'Google & Meta certified experts'       },
  ]

  const process = [
    {
      no: '01',
      title: 'Research & Strategy',
      desc: 'Market research, competitor ad analysis, audience mapping and campaign strategy tailored to your business goals and target locations — UAE or India.',
    },
    {
      no: '02',
      title: 'Campaign Setup',
      desc: 'Account structure, ad copy, creative assets, targeting configuration and conversion tracking — everything built for performance from day one.',
    },
    {
      no: '03',
      title: 'Launch & Optimise',
      desc: 'Live monitoring, bid adjustments, A/B testing and weekly optimisation cycles to continuously improve CPC, CTR and ROAS.',
    },
    {
      no: '04',
      title: 'Report & Scale',
      desc: 'Monthly performance reports, ROI analysis and a clear scaling roadmap to grow ad spend profitably as results compound.',
    },
  ]

  const faqs = [
    {
      q: 'How much ad spend do I need to get started?',
      a: 'We typically recommend a minimum of AED 3,000–5,000/month in ad spend for Google Ads and AED 2,000–3,000/month for Meta Ads to generate meaningful data and results.',
    },
    {
      q: 'How long before I see results from paid advertising?',
      a: 'Most Google Ads campaigns show meaningful results within 2–4 weeks. Meta Ads typically need 4–6 weeks for the algorithm to optimise. We set clear benchmarks upfront.',
    },
    {
      q: 'Do you manage ads for businesses in both UAE and India?',
      a: 'Yes — we run campaigns targeting Dubai, Abu Dhabi, Sharjah and across India including Kochi, Kerala and nationwide audiences simultaneously.',
    },
    {
      q: 'Is your management fee separate from ad spend?',
      a: 'Yes. Our management fee covers strategy, setup, optimisation and reporting. Ad spend goes directly to the platform — full transparency, no markup on spend.',
    },
    {
      q: 'What makes you different from other PPC agencies in Dubai?',
      a: 'No lock-in contracts, dedicated account managers, and we only grow our retainer when your ROAS grows. We\'re incentivised to perform, not just retain.',
    },
  ]

  const results = [
    {
      tag: 'Google Ads · Dubai E-Commerce Brand',
      metric: '312%',
      unit: 'ROAS increase in 60 days',
      desc: 'Google Shopping and Search campaigns rebuilt from scratch — CPC dropped 40%, revenue tripled in two months.',
      wide: true,
    },
    {
      tag: 'Meta Ads · Kochi Real Estate',
      metric: '8×',
      unit: 'More qualified leads',
      desc: 'Facebook lead gen campaigns targeting NRI buyers in UAE and Kerala.',
    },
    {
      tag: 'LinkedIn Ads · Abu Dhabi B2B SaaS',
      metric: '200+',
      unit: 'Qualified leads in 90 days',
      desc: '',
    },
    {
      tag: 'YouTube Ads · India D2C Brand',
      metric: '60%',
      unit: 'Lower cost per acquisition',
      desc: '',
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
          aria-label="Contact Creative Wired Paid Advertising Agency"
        >
          <Phone className="w-4 h-4 text-white" />
        </Link>
      </div>

      <Header currentPage="paid-advertising" />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section
        className="min-h-[55vh] flex flex-col justify-between pt-28 pb-12 px-5 md:px-12 lg:px-20 bg-white border-b border-neutral-100"
        aria-label="Paid Advertising Agency Dubai, Abu Dhabi & Kochi — Creative Wired"
      >
        <div className="max-w-6xl mx-auto w-full">

          <div className="flex items-start justify-between mb-12 fu">
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
              Paid Advertising
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
              Dubai · Abu Dhabi · Kochi
            </span>
          </div>

          <h1
            className="font-bold leading-[1.0] tracking-tight text-neutral-900 mb-8 fu2"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6.5rem)' }}
          >
            PPC & paid ads that<br />
            <span className="text-neutral-300">return more than</span><br />
            they cost.
          </h1>

          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-16 fu3">
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-lg font-light">
              Google Ads, Meta Ads, LinkedIn and YouTube — expertly managed for businesses across{' '}
              <span className="text-neutral-800 font-medium">Dubai, Abu Dhabi, Sharjah and India</span>.
              Average client ROAS: <span className="text-neutral-800 font-medium">400%</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-700 transition-colors"
              >
                Get Free Ad Audit
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
              'Google Certified',
              'Meta Blueprint Certified',
              'Free ad audit',
              'No lock-in contracts',
              'UAE & India campaigns',
            ].map((t, i) => (
              <span key={i} className="text-[11px] text-neutral-400 uppercase tracking-wider">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS — all white
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
          SERVICES — Bento Grid
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-32 px-5 md:px-12 lg:px-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto">

          <div className="mb-14 md:mb-20">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">Our Services</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 leading-tight tracking-tight">
                Six paid advertising<br />services. One team.
              </h2>
              <p className="text-sm text-neutral-500 max-w-xs leading-relaxed md:text-right font-light">
                Google Ads, Meta, LinkedIn, YouTube and e-commerce — all under one roof, managed for maximum ROI.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

            {/* 01 — Google Ads (wide) */}
            <Link
              href="/contact"
              className="group sm:col-span-2 relative flex flex-col justify-between rounded-2xl p-7 md:p-9 bg-white border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-300 overflow-hidden min-h-[260px]"
            >
              <span className="absolute right-5 bottom-3 text-[120px] font-black text-neutral-50 leading-none select-none pointer-events-none">01</span>
              <div className="relative z-10 flex items-start justify-between">
                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">Google Ads Management</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-200 group-hover:text-neutral-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-snug mb-3 tracking-tight">
                  Rank at the top.<br />Pay only for results.
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed max-w-md font-light">
                  Full-funnel Google Ads management — Search, Display, Shopping and YouTube — for businesses in Dubai, Abu Dhabi and Kochi. Built to convert, not just click.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {['Search Campaigns', 'Google Shopping', 'Display Ads', 'Keyword Bidding'].map((t, i) => (
                    <span key={i} className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-400">{t}</span>
                  ))}
                </div>
              </div>
            </Link>

            {/* 02 — Meta Ads (tall) */}
            <Link
              href="/contact"
              className="group sm:row-span-2 relative flex flex-col justify-between rounded-2xl p-7 bg-white border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-300 overflow-hidden min-h-[340px] h-full"
            >
              <span className="absolute right-4 bottom-2 text-[110px] font-black text-neutral-50 leading-none select-none pointer-events-none">02</span>
              <div className="relative z-10 flex items-start justify-between">
                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">Facebook & Instagram Ads</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-200 group-hover:text-neutral-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-neutral-900 leading-snug mb-3 tracking-tight">
                  Meta Ads that turn scrollers into buyers.
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed font-light mb-4">
                  Facebook and Instagram advertising with precision audience targeting, creative A/B testing and retargeting funnels built for UAE and India markets.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['Custom Audiences', 'Retargeting', 'Lead Generation', 'A/B Testing'].map((t, i) => (
                    <span key={i} className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-400">{t}</span>
                  ))}
                </div>
              </div>
            </Link>

            {/* 03 — LinkedIn */}
            <Link
              href="/contact"
              className="group relative flex flex-col justify-between rounded-2xl p-7 bg-white border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-300 overflow-hidden min-h-[220px]"
            >
              <span className="absolute right-4 bottom-2 text-[100px] font-black text-neutral-50 leading-none select-none pointer-events-none">03</span>
              <div className="relative z-10 flex items-start justify-between">
                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">LinkedIn Ads</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-200 group-hover:text-neutral-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-neutral-900 leading-snug mb-2 tracking-tight">
                  Reach decision-makers across UAE & India.
                </h3>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {['Sponsored Content', 'Lead Gen Forms', 'ABM Campaigns'].map((t, i) => (
                    <span key={i} className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-400">{t}</span>
                  ))}
                </div>
              </div>
            </Link>

            {/* 04 — YouTube */}
            <Link
              href="/contact"
              className="group relative flex flex-col justify-between rounded-2xl p-7 bg-white border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-300 overflow-hidden min-h-[220px]"
            >
              <span className="absolute right-4 bottom-2 text-[100px] font-black text-neutral-50 leading-none select-none pointer-events-none">04</span>
              <div className="relative z-10 flex items-start justify-between">
                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">YouTube Advertising</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-200 group-hover:text-neutral-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-neutral-900 leading-snug mb-2 tracking-tight">
                  Brand awareness at scale.
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-light">
                  TrueView and bumper ads targeting UAE and India audiences by interest, keyword and demographic.
                </p>
              </div>
            </Link>

            {/* 05 — E-Commerce (wide) */}
            <Link
              href="/contact"
              className="group sm:col-span-2 lg:col-span-2 relative flex flex-col sm:flex-row items-start sm:items-end justify-between rounded-2xl p-7 md:p-9 bg-white border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-300 overflow-hidden min-h-[200px] gap-6"
            >
              <span className="absolute right-4 bottom-0 text-[120px] font-black text-neutral-50 leading-none select-none pointer-events-none">05</span>
              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 block mb-3">E-Commerce Advertising</span>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-snug tracking-tight">
                  Turn browsers into<br className="hidden md:block" /> repeat buyers.
                </h3>
              </div>
              <div className="relative z-10 flex-shrink-0">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {['Google Shopping', 'Dynamic Retargeting', 'Product Feed Optimisation'].map((t, i) => (
                    <span key={i} className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-400">{t}</span>
                  ))}
                </div>
                <div className="inline-flex items-center gap-2 text-sm text-neutral-400 group-hover:text-neutral-900 group-hover:gap-3 transition-all">
                  Get started <ArrowUpRight className="w-4 h-4" />
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
                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">Analytics & Reporting</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-200 group-hover:text-neutral-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-neutral-900 leading-snug mb-2 tracking-tight">
                  Every dirham tracked and justified.
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-light">
                  Custom dashboards, attribution modelling and monthly ROI reports — full transparency, always.
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
                  Not sure which<br />platform to start on?
                </p>
                <div className="inline-flex items-center gap-2 text-sm text-neutral-400 group-hover:text-neutral-900 group-hover:gap-3 transition-all">
                  Get a free ad audit
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PLATFORMS
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-5 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">

          <div className="mb-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">Platforms</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight tracking-tight">
              Every major ad platform.<br />
              <span className="text-neutral-400">One expert team.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

            <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-200 p-7">
              <div className="h-8 flex items-center mb-5">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Ads_logo.svg/960px-Google_Ads_logo.svg.png"
                  alt="Google Ads Agency Dubai — Creative Wired"
                  width={90} height={28}
                  className="object-contain object-left"
                  unoptimized
                />
              </div>
              <h3 className="text-base font-semibold text-neutral-900 mb-1">Google Ads</h3>
              <p className="text-xs text-neutral-500 font-light mb-4">Search, Display, Shopping & YouTube</p>
              <div className="flex flex-wrap gap-1.5">
                {['Search Campaigns', 'Shopping Ads', 'Display Network', 'YouTube Ads'].map((t, i) => (
                  <span key={i} className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-50 border border-neutral-100 text-neutral-400">{t}</span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-200 p-7">
              <div className="h-8 flex items-center mb-5">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Meta_Platforms_logo.svg/2560px-Meta_Platforms_logo.svg.png"
                  alt="Meta Ads Agency Dubai — Facebook Instagram Advertising"
                  width={80} height={28}
                  className="object-contain object-left"
                  unoptimized
                />
              </div>
              <h3 className="text-base font-semibold text-neutral-900 mb-1">Meta Ads</h3>
              <p className="text-xs text-neutral-500 font-light mb-4">Facebook & Instagram advertising</p>
              <div className="flex flex-wrap gap-1.5">
                {['Feed & Stories Ads', 'Video Campaigns', 'Lead Generation', 'Retargeting'].map((t, i) => (
                  <span key={i} className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-50 border border-neutral-100 text-neutral-400">{t}</span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-200 p-7">
              <div className="h-8 flex items-center mb-5">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                  alt="LinkedIn Ads Agency Dubai — B2B Advertising UAE"
                  width={28} height={28}
                  className="object-contain object-left"
                  unoptimized
                />
              </div>
              <h3 className="text-base font-semibold text-neutral-900 mb-1">LinkedIn Ads</h3>
              <p className="text-xs text-neutral-500 font-light mb-4">B2B professional audience targeting</p>
              <div className="flex flex-wrap gap-1.5">
                {['Sponsored Content', 'Message Ads', 'Lead Gen Forms', 'ABM Campaigns'].map((t, i) => (
                  <span key={i} className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-50 border border-neutral-100 text-neutral-400">{t}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROCESS
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-5 md:px-12 lg:px-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto">

          <div className="mb-14">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight tracking-tight">
              From brief to<br />profitable campaigns.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {process.map((p, i) => (
              <div
                key={i}
                className="rounded-2xl border border-neutral-100 bg-white shadow-sm p-6 hover:border-neutral-300 hover:shadow-md transition-all duration-200 relative"
              >
                <span className="text-[10px] text-neutral-300 font-mono block mb-4">{p.no}</span>
                <h3 className="text-sm font-semibold text-neutral-900 mb-2">{p.title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-light">{p.desc}</p>
                {i < process.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-200 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          RESULTS — all white bento
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-5 md:px-12 lg:px-20 bg-white border-y border-neutral-100">
        <div className="max-w-6xl mx-auto">

          <div className="mb-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">Client Results</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight tracking-tight">
              Real numbers.<br />Real businesses.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

            <div className="md:col-span-2 rounded-2xl bg-white border border-neutral-100 shadow-sm p-8 md:p-10 flex flex-col justify-between min-h-[220px] hover:border-neutral-300 hover:shadow-md transition-all duration-300">
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                Google Ads · Dubai E-Commerce Brand
              </span>
              <div>
                <div className="text-5xl md:text-7xl font-bold text-neutral-900 tracking-tight mt-3">
                  312<span className="text-neutral-200">%</span>
                </div>
                <p className="text-neutral-400 text-sm mt-1 font-light">ROAS increase in 60 days</p>
                <p className="text-neutral-400 text-xs mt-4 max-w-sm leading-relaxed font-light">
                  Google Shopping and Search campaigns rebuilt from scratch — CPC dropped 40%, revenue tripled in two months.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-neutral-100 shadow-sm p-7 flex flex-col justify-between min-h-[220px] hover:border-neutral-300 hover:shadow-md transition-all duration-300">
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                Meta Ads · Kochi Real Estate
              </span>
              <div>
                <div className="text-5xl font-bold text-neutral-900 tracking-tight">8×</div>
                <p className="text-neutral-400 text-sm mt-1 font-light">More qualified leads</p>
                <p className="text-neutral-400 text-xs mt-3 leading-relaxed font-light">
                  Facebook lead gen campaigns targeting NRI buyers in UAE and Kerala.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-neutral-100 shadow-sm p-7 flex flex-col justify-between min-h-[180px] hover:border-neutral-300 hover:shadow-md transition-all duration-300">
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                LinkedIn Ads · Abu Dhabi B2B SaaS
              </span>
              <div>
                <div className="text-4xl font-bold text-neutral-900 tracking-tight">
                  200<span className="text-neutral-200">+</span>
                </div>
                <p className="text-neutral-400 text-sm mt-1 font-light">Qualified leads in 90 days</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-neutral-100 shadow-sm p-7 flex flex-col justify-between min-h-[180px] hover:border-neutral-300 hover:shadow-md transition-all duration-300">
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                YouTube Ads · India D2C Brand
              </span>
              <div>
                <div className="text-4xl font-bold text-neutral-900 tracking-tight">
                  60<span className="text-neutral-200">%</span>
                </div>
                <p className="text-neutral-400 text-sm mt-1 font-light">Lower cost per acquisition</p>
              </div>
            </div>

            <Link
              href="/contact"
              className="rounded-2xl border border-neutral-100 shadow-sm p-7 flex flex-col justify-between min-h-[180px] bg-white hover:border-neutral-300 hover:shadow-md transition-all duration-300 group"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">Your Business</span>
              <div>
                <p className="text-neutral-900 font-semibold text-base leading-snug mb-2">
                  What could your ROAS look like?
                </p>
                <div className="inline-flex items-center gap-2 text-sm text-neutral-400 group-hover:text-neutral-900 group-hover:gap-3 transition-all">
                  Get a free audit <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

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
                Paid advertising questions answered.
              </h2>
              <p className="text-sm text-neutral-500 font-light leading-relaxed mb-6">
                Common questions from businesses in Dubai, Abu Dhabi, Kochi and across India about our PPC and paid ads services.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:gap-3 transition-all"
              >
                Ask us anything
                <ArrowRight className="w-4 h-4" />
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

      {/* ══════════════════════════════════════════
          CTA — all white
      ══════════════════════════════════════════ */}
      <section className="py-28 md:py-40 px-5 md:px-12 lg:px-20 bg-white border-t border-neutral-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-5">Get Started</p>
          <h2
            className="font-bold text-neutral-900 leading-[1.0] tracking-tight mb-8"
            style={{ fontSize: 'clamp(2.4rem, 7vw, 6rem)' }}
          >
            Ready to scale<br />
            <span className="text-neutral-300">your ad spend</span><br />
            profitably?
          </h2>
          <p className="text-base md:text-lg text-neutral-500 font-light leading-relaxed max-w-lg mb-10">
            Free ad audit for businesses in{' '}
            <span className="text-neutral-800 font-medium">Dubai, Abu Dhabi, Kochi and India</span>.
            We'll show you exactly where your current campaigns are leaking money.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-neutral-700 transition-colors"
            >
              Get Free Ad Audit
              <ArrowRight className="w-4 h-4" />
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
            {['Free ad audit', 'Google & Meta certified', 'No lock-in contracts', 'UAE & India based', 'Results in 30 days'].map((t, i) => (
              <span key={i} className="text-[11px] text-neutral-400 uppercase tracking-wider">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SEO TEXT BLOCK
      ══════════════════════════════════════════ */}
      <section className="py-14 px-5 md:px-12 lg:px-20 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
            {[
              { h: 'Google Ads Agency Dubai',       p: 'Expert Google Ads management in Dubai. Search, Shopping and Display campaigns that drive qualified traffic and maximise ROI.'            },
              { h: 'Facebook Ads Agency UAE',        p: 'Meta advertising specialists in UAE. Facebook and Instagram ad campaigns with precision targeting for Dubai and Abu Dhabi businesses.' },
              { h: 'PPC Management Abu Dhabi',       p: 'Pay-per-click management in Abu Dhabi. Google Ads and Bing campaigns built for performance, not vanity metrics.'                       },
              { h: 'Paid Advertising Kochi',         p: "Kerala's leading paid advertising agency in Kochi. Google Ads, Facebook Ads and LinkedIn campaigns for local and national reach."     },
              { h: 'Performance Marketing India',    p: 'Performance marketing and paid media management for Indian businesses. ROI-focused Google and Meta advertising nationwide.'           },
              { h: 'LinkedIn Ads Agency Dubai',      p: 'B2B LinkedIn advertising agency in Dubai. Sponsored content, lead gen forms and account-based marketing for UAE professionals.'      },
            ].map((c, i) => (
              <div key={i}>
                <h3 className="text-[11px] font-semibold text-neutral-700 mb-1.5">{c.h}</h3>
                <p className="text-[10px] text-neutral-400 leading-relaxed">{c.p}</p>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-neutral-300 leading-relaxed max-w-4xl">
            Creative Wired is a certified paid advertising and PPC management agency serving clients in Dubai, Abu Dhabi, Sharjah,
            Kochi, Kerala and across India. We manage Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads and YouTube advertising
            campaigns for businesses of all sizes. Free ad audits available for UAE and India based businesses.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
