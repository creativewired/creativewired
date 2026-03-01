import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

export default function Footer() {

  const services = [
    { name: 'SEO Services',            href: '/seo'                     },
    { name: 'Web Development',         href: '/web-development'         },
    { name: 'Paid Advertising',        href: '/paid-advertising'        },
    { name: 'Social Media Management', href: '/social-media-management' },
    { name: 'Software Development',    href: '/software-development'    },
  ]

  const quickLinks = [
    { href: '/',         label: 'Home'     },
    { href: '/services', label: 'Services' },
    { href: '/blog',     label: 'Blog'     },
    { href: '/contact',  label: 'Contact'  },
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

  // WhatsApp SVG icon
  const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )

  return (
    <footer className="bg-white border-t border-neutral-100">

      {/* MAIN FOOTER */}
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
            <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-4">Services</p>
            <ul className="space-y-2.5">
              {services.map((s, i) => (
                <li key={i}>
                  <Link href={s.href} className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors font-light">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links col */}
          <div className="md:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-4">Company</p>
            <ul className="space-y-2.5">
              {quickLinks.map((l, i) => (
                <li key={i}>
                  <Link href={l.href} className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors font-light">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-4">Contact</p>
            <ul className="space-y-3">

              {/* UAE Number */}
              <li>
                <div className="flex items-start gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-neutral-300 mt-0.5 flex-shrink-0" />
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-300">UAE</span>
                    <div className="flex items-center gap-2">
                      <a href="tel:+971555207899" className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors font-light">
                        +971 555 207 899
                      </a>
                      <a
                        href="https://wa.me/971555207899"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-green-600 transition-colors"
                        aria-label="WhatsApp UAE"
                      >
                        <WhatsAppIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              {/* India Number */}
              <li>
                <div className="flex items-start gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-neutral-300 mt-0.5 flex-shrink-0" />
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-300">India</span>
                    <div className="flex items-center gap-2">
                      <a href="tel:+918431373779" className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors font-light">
                        +91 84313 73779
                      </a>
                      <a
                        href="https://wa.me/918431373779"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-green-600 transition-colors"
                        aria-label="WhatsApp India"
                      >
                        <WhatsAppIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:connect@creativewired.com"
                  className="flex items-center gap-2.5 text-xs text-neutral-500 hover:text-neutral-900 transition-colors font-light group"
                >
                  <Mail className="w-3.5 h-3.5 text-neutral-300 group-hover:text-neutral-600 transition-colors flex-shrink-0" />
                  connect@creativewired.com
                </a>
              </li>

              {/* Address */}
              <li>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-neutral-300 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-neutral-400 font-light leading-relaxed">
                    <b>Headoffice</b><br/>Ernakulam, Kerala, India<br/>
                    <b>Branch</b> <br/>Dubai, UAE
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

        {/* Trust bar */}
        <div className="mt-14 pt-8 border-t border-neutral-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { n: '500+', l: 'Projects Delivered' },
              { n: '250+', l: 'Clients Worldwide'  },
              { n: '4.9',  l: 'Average Rating'     },
              { n: '5yrs', l: 'In Business'        },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-lg font-bold text-neutral-900 tracking-tight">{s.n}</div>
                <div className="text-[11px] text-neutral-400 mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-neutral-100">
        <div className="max-w-6xl mx-auto px-5 md:px-12 lg:px-20 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[11px] text-neutral-400">
              © 2026 Creative Wired. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              {[
                { label: 'Privacy Policy',   href: '/privacy' },
                { label: 'Terms of Service', href: '/terms'   },
                { label: 'Cookie Policy',    href: '/cookies' },
              ].map((l, i) => (
                <Link key={i} href={l.href} className="text-[11px] text-neutral-400 hover:text-neutral-900 transition-colors">
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
