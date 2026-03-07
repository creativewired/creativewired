import {
  ArrowRight, ArrowUpRight, Phone, CheckCircle,
  Globe, Smartphone, Code, Rocket, Database, Shield,
} from 'lucide-react'
import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export const metadata = {
  title: 'Web Development Dubai, Kochi & UAE | Custom Websites & Web Apps | Creative Wired',
  description: 'Expert web development in Dubai, Abu Dhabi, Kochi and Kerala. Custom websites, web applications, e-commerce and CMS solutions built on modern tech stacks.',
  keywords: 'web development Dubai, website design UAE, web app development Kochi, e-commerce development Dubai, Next.js development UAE, custom website Kerala, web development Abu Dhabi, React development India',
}

export default function WebDevelopmentPage() {

  const stats = [
    { n: '300+', l: 'Websites Delivered',  d: 'Across UAE and India'             },
    { n: '95%',  l: 'On-Time Delivery',    d: 'Projects launched on schedule'    },
    { n: '250%', l: 'Avg Sales Increase',  d: 'For e-commerce clients post-launch'},
    { n: '4.9',  l: 'Client Rating',       d: 'From 200+ web project reviews'    },
  ]

  const services = [
    {
      no: '01',
      icon: <Globe className="w-5 h-5" />,
      title: 'Custom Website Development',
      short: 'Custom Websites',
      subtitle: 'Pixel-perfect. Fast. Built to convert.',
      desc: 'Fully responsive custom websites built from scratch — no templates, no shortcuts. Every site is engineered for performance, SEO and conversion, tailored precisely to your brand and audience in UAE or India.',
      features: [
        'Custom UI/UX design',
        'Responsive mobile-first build',
        'SEO-optimised code structure',
        'Core Web Vitals optimisation',
        'Google Analytics integration',
        'Cross-browser compatibility',
      ],
      tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'SEO', 'Performance'],
    },
    {
      no: '02',
      icon: <Smartphone className="w-5 h-5" />,
      title: 'E-Commerce Development',
      short: 'E-Commerce',
      subtitle: 'Stores that sell. Not just look good.',
      desc: 'Complete e-commerce solutions with payment integration, inventory management and admin panels — built for UAE and Indian markets. From fashion to electronics, we build stores that convert browsers into buyers.',
      features: [
        'Shopping cart & checkout flow',
        'Payment gateway integration',
        'Inventory management system',
        'Customer account portal',
        'Order tracking & notifications',
        'Multi-currency support',
      ],
      tags: ['E-Commerce', 'Stripe', 'Payment Gateways', 'Inventory', 'Multi-Currency'],
    },
    {
      no: '03',
      icon: <Code className="w-5 h-5" />,
      title: 'Web Application Development',
      short: 'Web Apps',
      subtitle: 'Complex logic. Clean interfaces.',
      desc: 'Full-stack web applications with advanced functionality — user authentication, role-based access, real-time data and admin dashboards. We architect for scalability from day one so your app grows with your business.',
      features: [
        'User authentication & roles',
        'Database design & integration',
        'REST & GraphQL API development',
        'Admin dashboard & analytics',
        'Real-time features & WebSockets',
        'Third-party API integrations',
      ],
      tags: ['React', 'Node.js', 'PostgreSQL', 'Supabase', 'GraphQL'],
    },
    {
      no: '04',
      icon: <Rocket className="w-5 h-5" />,
      title: 'Website Redesign & Modernisation',
      short: 'Redesign',
      subtitle: 'Old site. New results.',
      desc: 'Transform your outdated website into a modern, fast and conversion-optimised platform. We audit your existing site, redesign with purpose and migrate all content — with zero downtime on launch day.',
      features: [
        'Full design overhaul',
        'Performance optimisation',
        'Mobile responsiveness',
        'Content migration',
        'SEO preservation & improvement',
        'A/B testing setup',
      ],
      tags: ['Redesign', 'Performance', 'SEO Migration', 'UX Audit', 'Mobile'],
    },
    {
      no: '05',
      icon: <Database className="w-5 h-5" />,
      title: 'CMS Development',
      short: 'CMS',
      subtitle: 'Update your site. No developer needed.',
      desc: 'Custom content management systems that give your team full control — add pages, publish blog posts, update products and manage media without touching a line of code. Built for non-technical users.',
      features: [
        'Custom CMS development',
        'Intuitive content editing',
        'Multi-user access control',
        'Media & document management',
        'Scheduled content publishing',
        'Revision history & rollback',
      ],
      tags: ['CMS', 'Sanity', 'Contentful', 'Custom Admin', 'Multi-User'],
    },
    {
      no: '06',
      icon: <Shield className="w-5 h-5" />,
      title: 'Website Maintenance & Support',
      short: 'Maintenance',
      subtitle: 'We don\'t disappear after launch.',
      desc: 'Ongoing maintenance, security updates, backups and technical support — keeping your website fast, secure and always online. We proactively monitor so problems are fixed before your users ever notice them.',
      features: [
        'Security monitoring & patches',
        'Daily automated backups',
        'Performance monitoring',
        'Bug fixes & updates',
        'Uptime monitoring & alerts',
        'Monthly health reports',
      ],
      tags: ['Maintenance', 'Security', 'Backups', 'Monitoring', 'Support'],
    },
  ]

  const techStack = [
    { category: 'Frontend',       items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vue.js']      },
    { category: 'Backend',        items: ['Node.js', 'Python', 'Express.js', 'Django', 'FastAPI']          },
    { category: 'Database',       items: ['PostgreSQL', 'Supabase', 'MySQL', 'MongoDB', 'Redis']           },
    { category: 'Cloud & DevOps', items: ['Vercel', 'AWS', 'Docker', 'GitHub Actions', 'CI/CD']           },
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      desc: 'We map your goals, audience and technical requirements — then produce a detailed scope, tech stack recommendation and project timeline.',
    },
    {
      step: '02',
      title: 'Design & Prototype',
      desc: 'Wireframes, UI mockups and interactive prototypes reviewed and approved by you before development begins.',
    },
    {
      step: '03',
      title: 'Development & QA',
      desc: 'Clean, well-documented code with rigorous QA testing across devices, browsers and screen sizes before anything goes live.',
    },
    {
      step: '04',
      title: 'Launch & Support',
      desc: 'Zero-downtime deployment, post-launch monitoring and ongoing support so you\'re never left without backup.',
    },
  ]

  const results = [
    {
      tag: 'E-Commerce Redesign · Dubai Fashion Brand',
      metric: '250%',
      unit: 'sales increase',
      desc: 'Complete e-commerce rebuild with optimised checkout flow and mobile-first design. Sales increased 250% in the first month post-launch.',
    },
    {
      tag: 'Web App · Kochi SaaS Startup',
      metric: '6wk',
      unit: 'concept to launch',
      desc: 'Full-stack web app with auth, payments and admin dashboard — shipped in 6 weeks from initial brief.',
    },
    {
      tag: 'Website Redesign · Abu Dhabi Healthcare',
      metric: '3×',
      unit: 'more enquiries',
      desc: 'Redesigned a slow, outdated healthcare portal. Page speed score went from 32 to 96. Enquiries tripled in 60 days.',
    },
  ]

  const testimonials = [
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'TechStart Inc.',
      content: 'Creative Wired delivered a flawless web application that exceeded our expectations. Code quality is exceptional and performance is outstanding.',
      result: 'Flawless delivery',
    },
    {
      name: 'Sarah Williams',
      role: 'Owner',
      company: 'Dubai Fashion Boutique',
      content: 'Our new e-commerce website increased sales by 250% in the first month. The user experience is incredible and our customers love the design.',
      result: '250% sales increase',
    },
    {
      name: 'David Rodriguez',
      role: 'CEO',
      company: 'Healthcare Solutions UAE',
      content: 'They built us a compliant patient portal that our staff and patients genuinely love using. Professional team that understands complex requirements.',
      result: '3× more enquiries',
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

      <Header currentPage="web-development" />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="min-h-[55vh] flex flex-col justify-between pt-28 pb-12 px-5 md:px-12 lg:px-20 bg-white border-b border-neutral-100">
        <div className="max-w-6xl mx-auto w-full">

          <div className="flex items-start justify-between mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
              Web Development
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
              Dubai · Abu Dhabi · Kochi
            </span>
          </div>

          <h1
            className="font-bold leading-[1.0] tracking-tight text-neutral-900 mb-8"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6.5rem)' }}
          >
            Websites that<br />
            <span className="text-neutral-300">work as hard</span><br />
            as you do.
          </h1>

          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-16">
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-lg font-light">
              Custom websites, web apps and e-commerce solutions built for businesses in{' '}
              <span className="text-neutral-800 font-medium">Dubai, Abu Dhabi, Kochi and India</span> —
              engineered for speed, SEO and conversion. No templates. No shortcuts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-700 transition-colors"
              >
                Start Your Project
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
              'Free project consultation',
              'No lock-in contracts',
              'UAE & India based',
              '300+ websites delivered',
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
          SERVICES — Option A Bento Grid
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-5 md:px-12 lg:px-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto">

          <div className="mb-14">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">What We Build</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight tracking-tight">
                Six services.<br />
                <span className="text-neutral-400">Every use case covered.</span>
              </h2>
              <p className="text-sm text-neutral-500 max-w-xs leading-relaxed md:text-right font-light">
                From landing pages to full-scale platforms — we build it all.
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
                <span className="text-neutral-400">Real numbers.</span>
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
                  What could your new website achieve?
                </p>
                <div className="inline-flex items-center gap-2 text-sm text-neutral-400 group-hover:text-neutral-900 transition-colors">
                  Let's find out <ArrowUpRight className="w-4 h-4" />
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
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">Technologies</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight tracking-tight">
                Modern stack.<br />
                <span className="text-neutral-400">Production-ready always.</span>
              </h2>
              <p className="text-sm text-neutral-500 max-w-xs leading-relaxed md:text-right font-light">
                We use the best tools for each project — not just whatever's popular.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
              Proven process.<br />
              <span className="text-neutral-400">Zero surprises.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
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
                Launched. Loved.<br />
                <span className="text-neutral-400">Performing.</span>
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
              Code that ships.<br />
              <span className="text-neutral-400">A team that stays.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { no: '01', t: 'UAE & India Based',     d: 'Offices in Kochi, clients across Dubai and Abu Dhabi. Your timezone, your market, zero communication gaps.'           },
              { no: '02', t: 'No Lock-in Contracts',  d: 'Project-based and monthly retainer options. We earn every engagement — no long-term traps.'                          },
              { no: '03', t: 'No Templates Ever',     d: 'Every website is built from scratch for your brand. You\'ll never see your design on someone else\'s site.'           },
              { no: '04', t: '95% On-Time Delivery',  d: 'We scope accurately and build in buffer time. Deadlines are commitments — not estimates we quietly miss.'              },
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
            Ready to build<br />
            <span className="text-neutral-300">your dream</span><br />
            website?
          </h2>
          <p className="text-base md:text-lg text-neutral-500 font-light leading-relaxed max-w-lg mb-10">
            Free consultation for businesses in{' '}
            <span className="text-neutral-800 font-medium">Dubai, Abu Dhabi, Kochi and India</span>.
            We'll review your requirements, recommend a stack and give you a transparent quote within 24 hours.
          </p>
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
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10 pt-10 border-t border-neutral-200">
            {['Free consultation', 'Custom quote in 24 hours', 'No lock-in contracts', '300+ websites delivered'].map((t, i) => (
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
              { h: 'Web Development Dubai',       p: 'Custom website development in Dubai. Fast, SEO-optimised sites for businesses across the UAE.'                          },
              { h: 'Website Design Abu Dhabi',    p: 'Professional website design in Abu Dhabi. Mobile-first responsive websites for UAE businesses.'                        },
              { h: 'E-Commerce Development UAE',  p: 'E-commerce website development in UAE. Shopify, WooCommerce and custom stores for Dubai businesses.'                   },
              { h: 'Web Development Kochi',       p: 'Web development company in Kochi. Next.js, React and custom CMS websites for Kerala and Indian businesses.'            },
              { h: 'Web App Development India',   p: 'Custom web application development in India. Full-stack React and Node.js apps for Indian startups and enterprises.'   },
              { h: 'Website Redesign Dubai',      p: 'Website redesign services in Dubai. Modernise your outdated site with better UX, performance and conversion rates.'    },
            ].map((c, i) => (
              <div key={i}>
                <h3 className="text-[11px] font-semibold text-neutral-700 mb-1.5">{c.h}</h3>
                <p className="text-[10px] text-neutral-400 leading-relaxed">{c.p}</p>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-neutral-300 leading-relaxed max-w-4xl">
            Creative Wired is a web development agency with offices in Kochi serving businesses in Dubai, Abu Dhabi, Sharjah and across India.
            Our services include custom website development, e-commerce development, web application development, website redesign,
            CMS development and ongoing website maintenance. Free consultation available. No lock-in contracts.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
