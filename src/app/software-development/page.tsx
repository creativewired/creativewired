import {
  ArrowRight, ArrowUpRight, Phone, CheckCircle,
  Cpu, Smartphone, Globe, Database, Cloud, Shield,
} from 'lucide-react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Software Development Dubai, Kochi & UAE | Custom Apps & SaaS | Creative Wired',
  description: 'Custom software development in Dubai, Abu Dhabi, Kochi and Kerala. Mobile apps, SaaS platforms, automation tools and enterprise software built by expert developers.',
  keywords: 'software development Dubai, custom software UAE, mobile app development Kochi, SaaS development India, app development Dubai, software company Kerala, enterprise software UAE, Flutter app development India',
}

export default function SoftwareDevelopmentPage() {

  const stats = [
    { n: '120+', l: 'Software Projects',   d: 'Delivered across UAE and India'       },
    { n: '60%',  l: 'Ops Automated',       d: 'Average for our software clients'     },
    { n: '4×',   l: 'Faster Development',  d: 'vs traditional agency timelines'      },
    { n: '4.9',  l: 'Client Rating',       d: 'From 100+ software project reviews'   },
  ]

  const services = [
    {
      no: '01',
      icon: <Globe className="w-5 h-5" />,
      title: 'Web Application Development',
      short: 'Web Apps',
      subtitle: 'Full-stack apps that scale with your business.',
      desc: 'Custom web applications built on modern stacks — Next.js, React, Node.js and PostgreSQL. From internal tools to customer-facing platforms, we engineer for performance, security and long-term maintainability.',
      features: [
        'Next.js / React frontend',
        'Node.js / Python backend',
        'PostgreSQL & Supabase databases',
        'RESTful & GraphQL APIs',
        'Authentication & authorisation',
        'CI/CD deployment pipelines',
      ],
      tags: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Supabase'],
    },
    {
      no: '02',
      icon: <Smartphone className="w-5 h-5" />,
      title: 'Mobile App Development',
      short: 'Mobile Apps',
      subtitle: 'iOS & Android. One codebase.',
      desc: 'Cross-platform mobile apps built with Flutter for iOS and Android. Beautiful native performance, offline support and smooth animations — deployed to the App Store and Google Play with full backend integration.',
      features: [
        'Flutter cross-platform development',
        'iOS & Android deployment',
        'Offline-first architecture',
        'Push notifications',
        'In-app payments integration',
        'App Store & Play Store submission',
      ],
      tags: ['Flutter', 'iOS', 'Android', 'Firebase', 'Cross-Platform'],
    },
    {
      no: '03',
      icon: <Cloud className="w-5 h-5" />,
      title: 'SaaS Platform Development',
      short: 'SaaS Products',
      subtitle: 'Your idea. Built to scale.',
      desc: 'End-to-end SaaS product development — from architecture design and MVP to full launch and post-launch iteration. We build multi-tenant platforms with subscription billing, user management and admin dashboards.',
      features: [
        'Multi-tenant architecture',
        'Subscription billing (Stripe)',
        'User roles & permissions',
        'Admin dashboard',
        'Usage analytics & reporting',
        'Scalable cloud infrastructure',
      ],
      tags: ['SaaS', 'Multi-Tenant', 'Stripe', 'Cloud', 'MVP'],
    },
    {
      no: '04',
      icon: <Cpu className="w-5 h-5" />,
      title: 'Automation & Internal Tools',
      short: 'Automation',
      subtitle: 'Eliminate the bottlenecks.',
      desc: 'Custom automation tools and internal platforms that eliminate repetitive work and streamline your operations. From inventory systems and CRMs to workflow automation and barcode scanning — we build what off-the-shelf software can\'t.',
      features: [
        'Workflow automation',
        'Custom CRM & ERP systems',
        'Inventory & stock management',
        'Barcode & QR scanning systems',
        'Document generation & management',
        'Third-party API integrations',
      ],
      tags: ['Automation', 'CRM', 'ERP', 'Workflow', 'Integrations'],
    },
    {
      no: '05',
      icon: <Database className="w-5 h-5" />,
      title: 'API Development & Integration',
      short: 'APIs & Integrations',
      subtitle: 'Connect everything.',
      desc: 'Custom API design and third-party integrations that connect your systems — payment gateways, CRMs, ERPs, marketplaces and more. We build reliable, documented APIs that your team and partners can depend on.',
      features: [
        'RESTful API design & development',
        'Third-party API integration',
        'Payment gateway integration',
        'Webhook implementation',
        'API documentation',
        'Rate limiting & security',
      ],
      tags: ['REST API', 'GraphQL', 'Webhooks', 'Payment Gateways', 'Integration'],
    },
    {
      no: '06',
      icon: <Shield className="w-5 h-5" />,
      title: 'Software Maintenance & Support',
      short: 'Maintenance',
      subtitle: 'We don\'t disappear after launch.',
      desc: 'Ongoing maintenance, bug fixes, security updates and feature development for existing software. Whether we built it or someone else did — we keep your software running, secure and up to date.',
      features: [
        'Bug fixing & troubleshooting',
        'Security patches & updates',
        'Performance optimisation',
        'Feature additions',
        'Code refactoring',
        'Monthly health reports',
      ],
      tags: ['Maintenance', 'Bug Fixes', 'Security', 'Performance', 'Support'],
    },
  ]

  const techStack = [
    { category: 'Frontend',  items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Flutter']       },
    { category: 'Backend',   items: ['Node.js', 'Python', 'Django', 'FastAPI', 'REST', 'GraphQL']       },
    { category: 'Database',  items: ['PostgreSQL', 'Supabase', 'MySQL', 'MongoDB', 'Redis']             },
    { category: 'Cloud',     items: ['Vercel', 'AWS', 'Google Cloud', 'Firebase', 'Docker']             },
    { category: 'Mobile',    items: ['Flutter', 'Dart', 'iOS', 'Android', 'Firebase']                  },
    { category: 'Tools',     items: ['Git', 'GitHub', 'Figma', 'Stripe', 'Twilio', 'SendGrid']         },
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Scoping',
      desc: 'We map your requirements, define the scope, choose the right tech stack and produce a detailed project plan with timelines and milestones.',
    },
    {
      step: '02',
      title: 'Design & Architecture',
      desc: 'UI/UX wireframes, system architecture design and database schema planning — before a single line of code is written.',
    },
    {
      step: '03',
      title: 'Agile Development',
      desc: 'Two-week sprints with regular demos so you see real progress throughout — not a black box that opens at launch.',
    },
    {
      step: '04',
      title: 'QA & Launch',
      desc: 'Thorough QA testing across devices and environments, followed by a staged deployment with zero-downtime production release.',
    },
    {
      step: '05',
      title: 'Post-Launch Support',
      desc: 'Ongoing maintenance, performance monitoring, security updates and feature development as your product grows.',
    },
  ]

  const results = [
    {
      tag: 'Inventory Management · UAE Equipment Rental',
      metric: '60%',
      unit: 'ops automated',
      desc: 'Built a custom barcode-scanning inventory and rental management system. 60% of daily operations now fully automated.',
      wide: true,
    },
    {
      tag: 'Flutter App · Dubai Real Estate',
      metric: '#1',
      unit: 'App Store ranking',
      desc: 'Cross-platform property listing app with real-time updates and map search. Reached #1 in category within 3 months.',
    },
    {
      tag: 'SaaS Platform · Kochi Startup',
      metric: '6wk',
      unit: 'MVP to paying customers',
      desc: 'Full SaaS MVP with Stripe billing, user management and admin dashboard — shipped in 6 weeks.',
    },
  ]

  const testimonials = [
    {
      name: 'Pranav K.',
      role: 'Founder',
      company: 'Benfica Technologies',
      content: 'They built and have maintained our platform for over 3 years. Incredibly reliable, fast to respond and the code quality is exceptional.',
      result: '3 years ongoing',
    },
    {
      name: 'Rahul N.S.',
      role: 'Marketing Director',
      company: 'Meraki PTE Ltd',
      content: 'The custom software they built automated 60% of our operations. ROI was visible within 6 weeks of going live.',
      result: '60% ops automated',
    },
    {
      name: 'Aisha Al Mansoori',
      role: 'Operations Manager',
      company: 'Smart Auto UAE',
      content: 'Our inventory system was a nightmare before Creative Wired. Now everything is automated and our team actually enjoys using it.',
      result: 'Full ops automation',
    },
  ]

  return (
    <div className="w-full bg-white overflow-x-hidden">

      {/* WhatsApp float */}
      <div className="fixed bottom-6 right-5 md:bottom-8 md:right-8 z-50">
        <Link
          href="https://wa.me/+918129191617"
          className="w-11 h-11 rounded-full bg-neutral-900 flex items-center justify-center shadow-lg hover:bg-neutral-700 transition-colors"
          aria-label="Contact Creative Wired on WhatsApp"
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

          <div className="flex items-start justify-between mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
              Software Development
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
              Dubai · Abu Dhabi · Kochi
            </span>
          </div>

          <h1
            className="font-bold leading-[1.0] tracking-tight text-neutral-900 mb-8"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6.5rem)' }}
          >
            Custom software<br />
            <span className="text-neutral-300">built for your</span><br />
            operations.
          </h1>

          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-16">
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-lg font-light">
              Web apps, mobile apps, SaaS platforms and automation tools engineered precisely
              for businesses in{' '}
              <span className="text-neutral-800 font-medium">Dubai, Abu Dhabi, Kochi and India</span>.
              We build software that eliminates bottlenecks and compounds efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-700 transition-colors"
              >
                Discuss Your Project
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

          <div className="flex flex-wrap gap-x-8 gap-y-2 mt-12 pt-8 border-t border-neutral-100">
            {[
              'Free project scoping',
              'No lock-in contracts',
              'UAE & India based',
              '120+ software projects delivered',
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
    WHAT WE BUILD — Option A: Bento Grid
══════════════════════════════════════════ */}
<section className="py-20 md:py-28 px-5 md:px-12 lg:px-20 bg-neutral-50">
  <div className="max-w-6xl mx-auto">

    <div className="mb-14">
      <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">What We Build</p>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight tracking-tight">
          Six specialities.<br />
          <span className="text-neutral-400">Every stack covered.</span>
        </h2>
        <p className="text-sm text-neutral-500 max-w-xs leading-relaxed md:text-right font-light">
          From MVP to enterprise — we engineer software that lasts.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {services.map((s, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-300 overflow-hidden group relative"
        >
          {/* Faded number watermark */}
          <span className="absolute right-3 bottom-1 text-[100px] font-black text-neutral-50 leading-none select-none pointer-events-none">
            {s.no}
          </span>

          <div className="relative z-10 p-7">
            {/* Header row */}
            <div className="flex items-start justify-between mb-5">
              <div className="w-9 h-9 rounded-full border border-neutral-100 flex items-center justify-center text-neutral-400">
                {s.icon}
              </div>
              <Link
                href="/contact"
                className="group/btn w-8 h-8 rounded-full border border-neutral-100 flex items-center justify-center hover:border-neutral-900 hover:bg-neutral-900 transition-all"
              >
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover/btn:text-white transition-colors" />
              </Link>
            </div>

            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 block mb-1">{s.short}</span>
            <h3 className="text-xl font-bold text-neutral-900 leading-snug tracking-tight mb-1">
              {s.title}
            </h3>
            <p className="text-xs font-medium text-neutral-400 mb-3">{s.subtitle}</p>
            <p className="text-xs text-neutral-500 leading-relaxed font-light mb-5">
              {s.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {s.tags.map((t, j) => (
                <span key={j} className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-50 border border-neutral-100 text-neutral-400">
                  {t}
                </span>
              ))}
            </div>

            {/* Features */}
            <ul className="space-y-2 mb-6">
              {s.features.map((f, j) => (
                <li key={j} className="flex items-start gap-2">
                  <CheckCircle className="w-3 h-3 text-neutral-300 mt-0.5 flex-shrink-0" />
                  <span className="text-[11px] text-neutral-500 leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-900 hover:gap-3 transition-all"
            >
              Discuss This <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* ══════════════════════════════════════════
          RESULTS — bento
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-5 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">

          <div className="mb-14">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">Client Results</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight tracking-tight">
                Real projects.<br />
                <span className="text-neutral-400">Measurable outcomes.</span>
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:gap-3 transition-all"
              >
                Start your project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

            <div className="md:col-span-2 rounded-2xl bg-white border border-neutral-100 shadow-sm p-8 md:p-10 flex flex-col justify-between min-h-[220px]">
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">{results[0].tag}</span>
              <div>
                <div className="text-5xl md:text-7xl font-bold text-neutral-900 tracking-tight mt-3">
                  {results[0].metric}
                  <span className="text-neutral-300 text-3xl md:text-4xl"> {results[0].unit}</span>
                </div>
                <p className="text-neutral-400 text-xs mt-4 max-w-sm leading-relaxed">{results[0].desc}</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-neutral-100 shadow-sm p-7 flex flex-col justify-between min-h-[220px]">
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">{results[1].tag}</span>
              <div>
                <div className="text-5xl font-bold text-neutral-900 tracking-tight">
                  {results[1].metric}
                  <span className="text-neutral-300 text-2xl"> {results[1].unit}</span>
                </div>
                <p className="text-neutral-400 text-xs mt-3 leading-relaxed">{results[1].desc}</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-neutral-100 shadow-sm p-7 flex flex-col justify-between min-h-[180px]">
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">{results[2].tag}</span>
              <div>
                <div className="text-4xl font-bold text-neutral-900 tracking-tight">
                  {results[2].metric}
                  <span className="text-neutral-300 text-xl"> {results[2].unit}</span>
                </div>
                <p className="text-neutral-400 text-xs mt-3 leading-relaxed">{results[2].desc}</p>
              </div>
            </div>

            <Link
              href="/contact"
              className="md:col-span-2 rounded-2xl border border-neutral-200 bg-white shadow-sm p-7 flex flex-col justify-between min-h-[180px] hover:shadow-md hover:border-neutral-300 transition-all group"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">Your Project</span>
              <div>
                <p className="text-neutral-900 font-semibold text-base leading-snug mb-2">
                  What could your software project look like?
                </p>
                <div className="inline-flex items-center gap-2 text-sm text-neutral-400 group-hover:text-neutral-900 transition-colors">
                  Let's scope it out <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TECH STACK
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-24 px-5 md:px-12 lg:px-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto">

          <div className="mb-14">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">Technology</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight tracking-tight">
                Modern stack.<br />
                <span className="text-neutral-400">No legacy baggage.</span>
              </h2>
              <p className="text-sm text-neutral-500 max-w-xs leading-relaxed md:text-right font-light">
                We pick the right tool for each job — not whatever's most familiar to us.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {techStack.map((stack, i) => (
              <div key={i} className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-4">{stack.category}</p>
                <div className="flex flex-wrap gap-1.5">
                  {stack.items.map((item, j) => (
                    <span key={j} className="text-[11px] px-2.5 py-1 rounded-full bg-neutral-50 border border-neutral-100 text-neutral-600 font-medium">
                      {item}
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
      <section className="py-20 md:py-28 px-5 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">

          <div className="mb-14">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">How We Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight tracking-tight">
              No black boxes.<br />
              <span className="text-neutral-400">Full visibility throughout.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
            {process.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-6">
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
      <section className="py-20 md:py-24 px-5 md:px-12 lg:px-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto">

          <div className="mb-14">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">What Clients Say</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight tracking-tight">
                Built to last.<br />
                <span className="text-neutral-400">Clients who stayed.</span>
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
              <div key={i} className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-7 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-neutral-900 text-white font-medium inline-block mb-4">
                    {t.result}
                  </span>
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
      <section className="py-20 md:py-24 px-5 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">

          <div className="mb-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">Why Creative Wired</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight tracking-tight">
              Software that works.<br />
              <span className="text-neutral-400">A team that stays.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { no: '01', t: 'UAE & India Based',    d: 'Offices in Kochi, clients across Dubai and Abu Dhabi. Same timezone, same context, zero communication overhead.'         },
              { no: '02', t: 'No Lock-in Contracts', d: 'Project-based and month-to-month options. We earn every engagement — no 12-month retainer traps.'                        },
              { no: '03', t: 'Full-Stack In-House',  d: 'Design, frontend, backend, mobile and DevOps — all in-house. No subcontracting, no broken telephone.'                    },
              { no: '04', t: 'Long-Term Partners',   d: 'We maintain what we build. The same team that built it supports it — no handoff to a helpdesk you\'ve never met.'        },
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
          CTA
      ══════════════════════════════════════════ */}
      <section className="py-28 md:py-36 px-5 md:px-12 lg:px-20 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-5">Get Started</p>
          <h2
            className="font-bold text-neutral-900 leading-[1.0] tracking-tight mb-8"
            style={{ fontSize: 'clamp(2.4rem, 7vw, 6rem)' }}
          >
            Have a software<br />
            <span className="text-neutral-300">idea? Let's</span><br />
            build it.
          </h2>
          <p className="text-base md:text-lg text-neutral-500 font-light leading-relaxed max-w-lg mb-10">
            Free project scoping session for businesses in{' '}
            <span className="text-neutral-800 font-medium">Dubai, Abu Dhabi, Kochi and India</span>.
            We'll scope your project, recommend a tech stack and give you a realistic timeline and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-neutral-700 transition-colors"
            >
              Discuss Your Project
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
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10 pt-10 border-t border-neutral-200">
            {['Free project scoping', 'No lock-in contracts', 'UAE & India based', 'Full-stack in-house team'].map((t, i) => (
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
              { h: 'Software Development Dubai',   p: 'Custom software development in Dubai. Web apps, mobile apps and automation tools for UAE businesses of all sizes.'   },
              { h: 'Mobile App Development UAE',   p: 'iOS and Android app development in UAE. Flutter cross-platform apps built for Dubai and Abu Dhabi businesses.'         },
              { h: 'SaaS Development Kochi',       p: 'SaaS platform development in Kochi. MVP to full product — multi-tenant architecture with Stripe billing.'             },
              { h: 'Web App Development India',    p: 'Custom web application development in India. React, Next.js and Node.js applications for Indian startups.'           },
              { h: 'Automation Software Kerala',   p: 'Business automation software in Kerala. CRM, ERP and workflow automation for companies across India.'                 },
              { h: 'API Development UAE',          p: 'API development and third-party integration in UAE. REST, GraphQL and webhook implementation for businesses.'         },
            ].map((c, i) => (
              <div key={i}>
                <h3 className="text-[11px] font-semibold text-neutral-700 mb-1.5">{c.h}</h3>
                <p className="text-[10px] text-neutral-400 leading-relaxed">{c.p}</p>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-neutral-300 leading-relaxed max-w-4xl">
            Creative Wired is a software development company with offices in Kochi serving businesses across Dubai, Abu Dhabi,
            Sharjah and India. Our services include web application development, mobile app development (Flutter iOS & Android),
            SaaS platform development, business automation, API development and software maintenance.
            Free project scoping available. No lock-in contracts.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
