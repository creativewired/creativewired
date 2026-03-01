import {
  ArrowRight, ArrowUpRight, Phone, Mail, MapPin,
  Clock, Send, MessageSquare, Calendar, CheckCircle, Globe
} from 'lucide-react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Contact Creative Wired | Digital Marketing Agency Dubai & Kochi',
  description: 'Contact Creative Wired — top-rated digital marketing, SEO and web development agency in Dubai, Abu Dhabi, Kochi and Kerala. Free consultation. Response within 2 hours.',
  keywords: 'contact digital marketing agency Dubai, SEO agency contact Kochi, web development agency UAE, Creative Wired contact',
}

export default function ContactPage() {

  const contactMethods = [
    {
      no: '01',
      icon: <Phone className="w-4 h-4" />,
      title: 'Phone',
      desc: 'Speak directly with our team',
      contact: '+91 8129191617',
      availability: 'Mon–Fri, 9AM–8PM IST',
      action: 'Call Now',
      url: 'tel:+918129191617',
    },
    {
      no: '02',
      icon: <Mail className="w-4 h-4" />,
      title: 'Email',
      desc: 'Detailed responses guaranteed',
      contact: 'connect@creativewired.com',
      availability: 'Response within 2 hours',
      action: 'Send Email',
      url: 'mailto:connect@creativewired.com',
    },
    {
      no: '03',
      icon: <MessageSquare className="w-4 h-4" />,
      title: 'WhatsApp',
      desc: 'Instant messaging support',
      contact: 'Chat on WhatsApp',
      availability: 'Mon–Fri, 8AM–8PM',
      action: 'Start Chat',
      url: 'https://wa.me/+918129191617',
    },
    {
      no: '04',
      icon: <Calendar className="w-4 h-4" />,
      title: 'Book a Call',
      desc: 'Free 30-min strategy consultation',
      contact: 'Google Meet',
      availability: 'Flexible scheduling',
      action: 'Book Meeting',
      url: 'https://calendly.com/creativewiredagency/30min',
    },
  ]

  const offices = [
    {
      city: 'Ernakulam',
      tag: 'Headquarters',
      address: 'XVI 195, 1st Floor, Ernakulam',
      region: 'Kerala, India — 682508',
      phone: '+91 8129191617',
      email: 'connect@creativewired.com',
      isPrimary: true,
    },
    {
      city: 'Thrissur',
      tag: 'Coming Soon',
      address: '—',
      region: 'Thrissur, Kerala, India',
      phone: '+91 8129191617',
      email: 'connect@creativewired.com',
      isPrimary: false,
    },
    {
      city: 'Kozhikode',
      tag: 'Coming Soon',
      address: '—',
      region: 'Kozhikode, Kerala, India',
      phone: '+91 8129191617',
      email: 'connect@creativewired.com',
      isPrimary: false,
    },
  ]

  const faqs = [
    {
      q: 'How quickly can you start on my project?',
      a: 'Typically within 1–2 weeks of onboarding, depending on scope. Urgent projects can be fast-tracked.',
    },
    {
      q: 'Do you work with small businesses and startups?',
      a: 'Yes — we work with businesses of all sizes across Dubai, Abu Dhabi, Kochi and India. Strategy is tailored to your budget.',
    },
    {
      q: 'What does your pricing look like?',
      a: 'We offer both project-based and monthly retainer options. No hidden fees, no lock-in contracts.',
    },
    {
      q: 'Will I get reports on campaign performance?',
      a: 'Absolutely. Monthly reports plus a live client dashboard so you can track every metric in real time.',
    },
    {
      q: 'Can you audit and improve our existing marketing?',
      a: 'Yes. We can audit your current SEO, ads or social presence and provide a concrete improvement roadmap.',
    },
  ]

  return (
    <div className="w-full bg-white overflow-x-hidden">

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .fade-up { animation: fadeUp 0.7s ease forwards; }
        .fade-up-1 { animation: fadeUp 0.7s ease 0.1s both; }
        .fade-up-2 { animation: fadeUp 0.7s ease 0.2s both; }
        .fade-up-3 { animation: fadeUp 0.7s ease 0.3s both; }

        input:focus, textarea:focus, select:focus {
          outline: none;
          border-color: #0a0a0a;
          box-shadow: 0 0 0 1px #0a0a0a;
        }
      `}</style>

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

      <Header currentPage="contact" />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="min-h-[52vh] flex flex-col justify-between pt-28 pb-12 px-5 md:px-12 lg:px-20 bg-white border-b border-neutral-100">
        <div className="max-w-6xl mx-auto w-full">

          <div className="flex items-start justify-between mb-12 fade-up">
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
              Contact Us
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
              Dubai · Abu Dhabi · Kochi
            </span>
          </div>

          <h1
            className="font-bold leading-[1.0] tracking-tight text-neutral-900 mb-8 fade-up-1"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6.5rem)' }}
          >
            Let's build something<br />
            <span className="text-neutral-300">worth talking about.</span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-16 fade-up-2">
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-md font-light">
              Free consultation. No commitment. Our team across{' '}
              <span className="text-neutral-800 font-medium">Dubai, Abu Dhabi and Kochi</span>{' '}
              responds within 2 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="https://calendly.com/creativewiredagency/30min"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-700 transition-colors"
              >
                Book Free Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="mailto:connect@creativewired.com"
                className="inline-flex items-center justify-center gap-2 border border-neutral-200 text-neutral-700 text-sm font-medium px-6 py-3 rounded-full hover:border-neutral-400 transition-colors"
              >
                Send an Email
              </Link>
            </div>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap gap-x-8 gap-y-2 mt-12 pt-8 border-t border-neutral-100 fade-up-3">
            {[
              '2-hour email response',
              'Free consultation',
              'No lock-in contracts',
              'UAE & India based',
            ].map((t, i) => (
              <span key={i} className="text-[11px] text-neutral-400 uppercase tracking-wider">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT METHODS — bento
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-5 md:px-12 lg:px-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto">

          <div className="mb-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">
              Reach Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight tracking-tight">
              Four ways to connect.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {contactMethods.map((m, i) => (
              <Link
                key={i}
                href={m.url}
                target={m.url.startsWith('http') ? '_blank' : undefined}
                className="group relative flex flex-col justify-between rounded-2xl p-6 bg-white border border-neutral-100 hover:border-neutral-300 hover:shadow-md transition-all duration-300 min-h-[220px]"
              >
                <div className="flex items-start justify-between">
                  <div className="w-8 h-8 rounded-full border border-neutral-100 flex items-center justify-center text-neutral-400 group-hover:border-neutral-300 transition-colors">
                    {m.icon}
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-200 group-hover:text-neutral-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <div>
                  <span className="text-[10px] text-neutral-300 font-mono block mb-2">{m.no}</span>
                  <h3 className="text-base font-semibold text-neutral-900 mb-1">{m.title}</h3>
                  <p className="text-xs text-neutral-500 font-light mb-3">{m.desc}</p>
                  <p className="text-xs font-medium text-neutral-700 mb-1">{m.contact}</p>
                  <p className="text-[11px] text-neutral-400">{m.availability}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FORM + INFO
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-5 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">

            {/* ── FORM (3 cols) ── */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">
                  Start a Project
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-tight tracking-tight mb-3">
                  Tell us about your business.
                </h2>
                <p className="text-sm text-neutral-500 font-light">
                  We'll respond with a custom proposal within 24 hours.
                </p>
              </div>

              <form className="space-y-4">

                {/* Name row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.15em] text-neutral-400 mb-2">
                      First Name <span className="text-neutral-300">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3 text-sm border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-300 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.15em] text-neutral-400 mb-2">
                      Last Name <span className="text-neutral-300">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-3 text-sm border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-300 transition-all"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.15em] text-neutral-400 mb-2">
                      Email <span className="text-neutral-300">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 text-sm border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-300 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.15em] text-neutral-400 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+971 50 000 0000"
                      className="w-full px-4 py-3 text-sm border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-300 transition-all"
                    />
                  </div>
                </div>

                {/* Company + Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.15em] text-neutral-400 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Your Company"
                      className="w-full px-4 py-3 text-sm border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-300 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.15em] text-neutral-400 mb-2">
                      Budget Range
                    </label>
                    <select className="w-full px-4 py-3 text-sm border border-neutral-200 rounded-xl text-neutral-500 transition-all bg-white">
                      <option value="">Select range</option>
                      <option>Under AED 5,000</option>
                      <option>AED 5,000 – 15,000</option>
                      <option>AED 15,000 – 50,000</option>
                      <option>AED 50,000+</option>
                    </select>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.15em] text-neutral-400 mb-3">
                    Services Interested In
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'SEO Services',
                      'Web Development',
                      'Software Development',
                      'Paid Advertising',
                      'Social Media',
                      'Brand Identity',
                    ].map((s, i) => (
                      <label
                        key={i}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 cursor-pointer hover:border-neutral-400 transition-colors text-xs text-neutral-600 has-[:checked]:border-neutral-900 has-[:checked]:text-neutral-900 has-[:checked]:bg-neutral-50"
                      >
                        <input type="checkbox" className="sr-only" />
                        {s}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.15em] text-neutral-400 mb-2">
                    Project Timeline
                  </label>
                  <select className="w-full px-4 py-3 text-sm border border-neutral-200 rounded-xl text-neutral-500 transition-all bg-white">
                    <option value="">Select timeline</option>
                    <option>ASAP — Urgent</option>
                    <option>Within 1 month</option>
                    <option>1–3 months</option>
                    <option>3–6 months</option>
                    <option>6+ months</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.15em] text-neutral-400 mb-2">
                    Project Details <span className="text-neutral-300">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your goals, current challenges, and what success looks like for you..."
                    className="w-full px-4 py-3 text-sm border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-300 resize-none transition-all"
                  />
                </div>

                {/* Consent */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-0.5 rounded border-neutral-300"
                  />
                  <span className="text-xs text-neutral-400 leading-relaxed">
                    I agree to receive communications from Creative Wired. I can opt out at any time.
                  </span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-neutral-900 text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-neutral-700 transition-colors"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>

                <p className="text-center text-[11px] text-neutral-400">
                  We typically respond within 2–4 hours during business hours.
                </p>
              </form>
            </div>

            {/* ── INFO SIDEBAR (2 cols) ── */}
            <div className="lg:col-span-2 space-y-4">

              {/* Why us */}
              <div className="rounded-2xl border border-neutral-100 p-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-4">
                  Why Creative Wired
                </p>
                <div className="space-y-4">
                  {[
                    { t: 'UAE & India Presence',  d: 'Offices in Kochi, with clients across Dubai, Abu Dhabi and Sharjah.'  },
                    { t: '99% Client Retention',  d: 'Month-to-month. We earn your business every single month.'             },
                    { t: 'Radical Transparency',  d: 'Full reporting dashboard. Every metric visible to you, always.'        },
                    { t: 'Results Guaranteed',    d: 'We set targets and keep working until they\'re hit.'                   },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-neutral-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-neutral-900">{item.t}</p>
                        <p className="text-[11px] text-neutral-400 mt-0.5 leading-relaxed">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response times */}
              <div className="rounded-2xl border border-neutral-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-neutral-400" />
                  <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                    Response Times
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { n: '2 hrs',  l: 'Email Response'    },
                    { n: '24 hrs', l: 'Custom Proposal'   },
                    { n: '1–2 wk', l: 'Project Kickoff'   },
                    { n: '30 min', l: 'Free Consultation'  },
                  ].map((item, i) => (
                    <div key={i} className="bg-neutral-50 rounded-xl p-3 text-center">
                      <div className="text-lg font-bold text-neutral-900 tracking-tight">{item.n}</div>
                      <div className="text-[10px] text-neutral-400 mt-0.5">{item.l}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Serving locations */}
              <div className="rounded-2xl border border-neutral-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-4 h-4 text-neutral-400" />
                  <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                    Serving
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Dubai', 'Abu Dhabi', 'Sharjah', 'UAE',
                    'Kochi', 'Kerala', 'Thrissur', 'India',
                  ].map((loc, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-neutral-50 border border-neutral-100 text-neutral-500"
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Book call CTA */}
              <Link
                href="https://calendly.com/creativewiredagency/30min"
                target="_blank"
                className="group flex flex-col justify-between rounded-2xl bg-neutral-950 p-6 min-h-[140px] hover:bg-neutral-900 transition-colors"
              >
                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                  Free Consultation
                </span>
                <div>
                  <p className="text-white font-semibold text-base leading-snug mb-2">
                    Book a free 30-min strategy call.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm text-neutral-400 group-hover:text-white group-hover:gap-3 transition-all">
                    Schedule now
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          OFFICES
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-5 md:px-12 lg:px-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto">

          <div className="mb-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">
              Our Locations
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight tracking-tight">
              Find us in Kerala.<br />
              <span className="text-neutral-400">Serving UAE & India.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {offices.map((o, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-7 border transition-all duration-200 ${
                  o.isPrimary
                    ? 'bg-neutral-950 border-neutral-800'
                    : 'bg-white border-neutral-100 hover:border-neutral-300 hover:shadow-sm'
                }`}
              >
                {o.isPrimary && (
                  <span className="absolute top-5 right-5 text-[9px] uppercase tracking-[0.2em] text-neutral-500 bg-neutral-800 px-2 py-1 rounded-full">
                    HQ
                  </span>
                )}
                <div className="flex items-center gap-2 mb-5">
                  <MapPin className={`w-4 h-4 ${o.isPrimary ? 'text-neutral-500' : 'text-neutral-300'}`} />
                  <span className={`text-[10px] uppercase tracking-[0.2em] ${o.isPrimary ? 'text-neutral-500' : 'text-neutral-400'}`}>
                    {o.tag}
                  </span>
                </div>
                <h3 className={`text-2xl font-bold tracking-tight mb-4 ${o.isPrimary ? 'text-white' : 'text-neutral-900'}`}>
                  {o.city}
                </h3>
                <div className="space-y-2">
                  <p className={`text-sm ${o.isPrimary ? 'text-neutral-400' : 'text-neutral-500'}`}>{o.address}</p>
                  <p className={`text-xs ${o.isPrimary ? 'text-neutral-500' : 'text-neutral-400'}`}>{o.region}</p>
                  <p className={`text-xs font-medium pt-2 ${o.isPrimary ? 'text-neutral-300' : 'text-neutral-700'}`}>{o.phone}</p>
                  <p className={`text-xs ${o.isPrimary ? 'text-neutral-500' : 'text-neutral-400'}`}>{o.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-5 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-10 md:gap-16">

            {/* Left label */}
            <div className="md:col-span-2">
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight tracking-tight mb-5">
                Common questions answered.
              </h2>
              <p className="text-sm text-neutral-500 font-light leading-relaxed mb-6">
                Everything you need to know about working with Creative Wired across UAE and India.
              </p>
              <Link
                href="mailto:connect@creativewired.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:gap-3 transition-all"
              >
                Still have questions?
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right FAQ list */}
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
          CTA
      ══════════════════════════════════════════ */}
      <section className="py-28 md:py-36 px-5 md:px-12 lg:px-20 bg-neutral-950 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px',
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-5">
            Let's Get Started
          </p>
          <h2
            className="font-bold text-white leading-[1.0] tracking-tight mb-8"
            style={{ fontSize: 'clamp(2.4rem, 7vw, 6rem)' }}
          >
            Ready when<br />
            <span className="text-neutral-500">you are.</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-500 font-light leading-relaxed max-w-lg mb-10">
            Join 250+ businesses across{' '}
            <span className="text-neutral-300">Dubai, Abu Dhabi, Kochi and India</span>{' '}
            who trust Creative Wired to grow their digital presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="mailto:connect@creativewired.com"
              className="inline-flex items-center justify-center gap-2 bg-white text-neutral-900 text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-neutral-100 transition-colors"
            >
              Email Us Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="https://calendly.com/creativewiredagency/30min"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 border border-neutral-700 text-neutral-400 text-sm font-medium px-7 py-3.5 rounded-full hover:border-neutral-500 hover:text-neutral-200 transition-colors"
            >
              Book a Free 30-Min Call
            </Link>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10 pt-10 border-t border-neutral-800">
            {['No lock-in contracts', 'UAE & India based', '250+ clients', '2-hour response'].map((t, i) => (
              <span key={i} className="text-[11px] text-neutral-600 uppercase tracking-wider">{t}</span>
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
              { h: 'Digital Marketing Agency Dubai',     p: 'Contact our Dubai team for SEO, paid ads, web development and social media management services.'            },
              { h: 'SEO Agency Kochi Kerala',            p: 'Reach our Kochi office for local SEO, content strategy and organic growth services across Kerala.'          },
              { h: 'Web Development Company UAE',        p: 'Get in touch for custom website and web app development services in Dubai, Abu Dhabi and Sharjah.'          },
              { h: 'Software Development India',         p: 'Contact us for bespoke software, mobile app and SaaS development for Indian businesses.'                    },
              { h: 'Digital Marketing Abu Dhabi',        p: 'Our Abu Dhabi clients enjoy full-service digital marketing — SEO, PPC and social media management.'         },
              { h: 'Social Media Agency Kerala',         p: 'Connect with our Kerala social media team for content creation, community management and brand building.'   },
            ].map((c, i) => (
              <div key={i}>
                <h3 className="text-[11px] font-semibold text-neutral-700 mb-1.5">{c.h}</h3>
                <p className="text-[10px] text-neutral-400 leading-relaxed">{c.p}</p>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-neutral-300 leading-relaxed max-w-4xl">
            Creative Wired is a full-service digital marketing and web development agency serving clients in Dubai, Abu Dhabi,
            Sharjah, Kochi, Kerala and across India. Contact us for SEO services, paid advertising, social media management,
            web development, custom software development and brand identity design. Free consultation available.
            Response guaranteed within 2 hours.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
