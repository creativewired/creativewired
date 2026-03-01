import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

export default function Footer() {

  const services = [
    { name: 'SEO Services',              href: '/seo'                      },
    { name: 'Web Development',           href: '/web-development'          },
    { name: 'Paid Advertising',          href: '/paid-advertising'         },
    { name: 'Social Media Management',   href: '/social-media-management'  },
    { name: 'Software Development',      href: '/software-development'     },
  ]

  const quickLinks = [
    { href: '/',        label: 'Home'     },
    { href: '/services',label: 'Services' },
    { href: '/blog',    label: 'Blog'     },
    { href: '/contact', label: 'Contact'  },
  ]

  const socialLinks = [
    {
      icon: <Instagram className="w-4 h-4" />,
      href: 'https://www.instagram.com/creative.wired/',
      label: 'Instagram',
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      href: 'https://www.linkedin.com/company/creative-wired/',
      label: 'LinkedIn',
    },
  ]

  return (
    <footer className="bg-white border-t border-neutral-100">

      {/* ══════════════════════════════════════════
          MAIN FOOTER
      ══════════════════════════════════════════ */}
      <div className="max-w-6xl mx-auto px-5 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

          {/* Brand col */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <Image
                src="/logowhite.png"
                alt="Creative Wired"
                width={32}
                height={32}
                className="h-8 w-auto invert"
              />
              <span className="text-sm font-bold text-neutral-900 tracking-tight">
                Creative Wired
              </span>
            </Link>

            <p className="text-xs text-neutral-400 leading-relaxed font-light max-w-xs mb-6">
              Digital marketing and software development agency for businesses in{' '}
              <span className="text-neutral-600">Dubai, Abu Dhabi, Kochi and India</span>.
              SEO, web development, paid ads, social media and custom software — all in one place.
            </p>

            {/* Social links */}
            <div className="flex gap-2">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:border-neutral-900 hover:text-neutral-900 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services col */}
          <div className="md:col-span-3 md:col-start-6">
            <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-4">
              Services
            </p>
            <ul className="space-y-2.5">
              {services.map((s, i) => (
                <li key={i}>
                  <Link
                    href={s.href}
                    className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors font-light"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links col */}
          <div className="md:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-4">
              Company
            </p>
            <ul className="space-y-2.5">
              {quickLinks.map((l, i) => (
                <li key={i}>
                  <Link
                    href={l.href}
                    className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors font-light"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-4">
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+918129191617"
                  className="flex items-center gap-2.5 text-xs text-neutral-500 hover:text-neutral-900 transition-colors font-light group"
                >
                  <Phone className="w-3.5 h-3.5 text-neutral-300 group-hover:text-neutral-600 transition-colors flex-shrink-0" />
                  +91 81291 91617
                </a>
              </li>
              <li>
                <a
                  href="mailto:connect@creativewired.com"
                  className="flex items-center gap-2.5 text-xs text-neutral-500 hover:text-neutral-900 transition-colors font-light group"
                >
                  <Mail className="w-3.5 h-3.5 text-neutral-300 group-hover:text-neutral-600 transition-colors flex-shrink-0" />
                  connect@creativewired.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-neutral-300 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-neutral-400 font-light leading-relaxed">
                    Ernakulam, Kerala<br />
                    India — 682508
                  </span>
                </div>
              </li>
            </ul>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-6 bg-neutral-900 text-white text-xs font-medium px-4 py-2.5 rounded-full hover:bg-neutral-700 transition-colors"
            >
              Get a Free Consultation
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

        </div>

        {/* ── Trust bar ─────────────────────────── */}
        <div className="mt-14 pt-8 border-t border-neutral-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { n: '500+', l: 'Projects Delivered'  },
              { n: '250+', l: 'Clients Worldwide'   },
              { n: '4.9',  l: 'Average Rating'      },
              { n: '5yrs', l: 'In Business'         },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-lg font-bold text-neutral-900 tracking-tight">{s.n}</div>
                <div className="text-[11px] text-neutral-400 mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ══════════════════════════════════════════
          BOTTOM BAR
      ══════════════════════════════════════════ */}
      <div className="border-t border-neutral-100">
        <div className="max-w-6xl mx-auto px-5 md:px-12 lg:px-20 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

            <p className="text-[11px] text-neutral-400">
              © 2026 Creative Wired. All rights reserved.
            </p>

            <div className="flex items-center gap-5">
              {[
                { label: 'Privacy Policy',   href: '/privacy'  },
                { label: 'Terms of Service', href: '/terms'    },
                { label: 'Cookie Policy',    href: '/cookies'  },
              ].map((l, i) => (
                <Link
                  key={i}
                  href={l.href}
                  className="text-[11px] text-neutral-400 hover:text-neutral-900 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>

    </footer>
  )
}
