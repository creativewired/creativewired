'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Code, Search, TrendingUp, Share2, Menu, X, ArrowUpRight, Cpu } from 'lucide-react'

interface NavigationProps {
  currentPage?: string
}

export default function Navigation({ currentPage }: NavigationProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)

  const services = [
    {
      title: 'SEO Services',
      description: 'Rank #1 on Google in Dubai & Kochi',
      icon: <Search className="w-4 h-4" />,
      href: '/seo',
      no: '01',
    },
    {
      title: 'Web Development',
      description: 'Custom websites & web applications',
      icon: <Code className="w-4 h-4" />,
      href: '/web-development',
      no: '02',
    },
    {
      title: 'Paid Advertising',
      description: 'Google Ads, Meta & LinkedIn campaigns',
      icon: <TrendingUp className="w-4 h-4" />,
      href: '/paid-advertising',
      no: '03',
    },
    {
      title: 'Social Media Management',
      description: 'Instagram, Facebook, TikTok & LinkedIn',
      icon: <Share2 className="w-4 h-4" />,
      href: '/social-media-management',
      no: '04',
    },
    {
      title: 'Software Development',
      description: 'Mobile apps, SaaS & automation tools',
      icon: <Cpu className="w-4 h-4" />,
      href: '/software-development',
      no: '05',
    },
  ]

  const isServicePage = [
    'services', 'seo', 'web-development',
    'paid-advertising', 'social-media-management', 'software-development'
  ].includes(currentPage ?? '')

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setIsMobileServicesOpen(false)
  }

  return (
    <>
      {/* ══════════════════════════════════════════
          DESKTOP NAV
      ══════════════════════════════════════════ */}
      <nav className="hidden md:flex items-center gap-1">

        <Link
          href="/"
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            currentPage === 'home'
              ? 'text-neutral-900 bg-neutral-100'
              : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50'
          }`}
        >
          Home
        </Link>

        {/* Services Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <button
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              isServicePage
                ? 'text-neutral-900 bg-neutral-100'
                : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50'
            }`}
          >
            Services
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
              isServicesOpen ? 'rotate-180' : ''
            }`} />
          </button>

          {/* Dropdown */}
          <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-white border border-neutral-100 rounded-2xl shadow-xl shadow-neutral-100/80 transition-all duration-200 ${
            isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
          }`}>

            {/* Arrow pointer */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-neutral-100 rotate-45" />

            <div className="p-3">
              {/* Service links */}
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full border border-neutral-100 flex items-center justify-center text-neutral-400 group-hover:border-neutral-300 transition-colors flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-neutral-900 group-hover:text-neutral-700 transition-colors truncate">
                        {service.title}
                      </p>
                      <span className="text-[10px] font-mono text-neutral-300 flex-shrink-0">{service.no}</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-0.5 truncate">{service.description}</p>
                  </div>
                </Link>
              ))}

              {/* View all */}
              <div className="border-t border-neutral-100 mt-2 pt-2">
                <Link
                  href="/services"
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-neutral-50 transition-colors group"
                >
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">View All Services</p>
                    <p className="text-[11px] text-neutral-400 mt-0.5">Full service portfolio</p>
                  </div>
                  <div className="w-7 h-7 rounded-full border border-neutral-100 flex items-center justify-center group-hover:border-neutral-900 group-hover:bg-neutral-900 transition-all">
                    <ArrowUpRight className="w-3 h-3 text-neutral-300 group-hover:text-white transition-colors" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Link
          href="/blog"
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            currentPage === 'blog'
              ? 'text-neutral-900 bg-neutral-100'
              : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50'
          }`}
        >
          Blog
        </Link>

        <Link
          href="/contact"
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            currentPage === 'contact'
              ? 'text-neutral-900 bg-neutral-100'
              : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50'
          }`}
        >
          Contact
        </Link>

        {/* CTA */}
        <Link
          href="/contact"
          className="ml-2 inline-flex items-center gap-1.5 bg-neutral-900 text-white text-sm font-medium px-4 py-1.5 rounded-full hover:bg-neutral-700 transition-colors"
        >
          Get a Quote
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </nav>

      {/* ══════════════════════════════════════════
          MOBILE HAMBURGER
      ══════════════════════════════════════════ */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:border-neutral-400 transition-colors"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen
          ? <X className="w-4 h-4" />
          : <Menu className="w-4 h-4" />
        }
      </button>

      {/* ══════════════════════════════════════════
          MOBILE MENU
      ══════════════════════════════════════════ */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-neutral-100 shadow-xl shadow-neutral-100/50 transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-5 py-6 space-y-1">

          <Link
            href="/"
            onClick={closeMobileMenu}
            className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              currentPage === 'home'
                ? 'bg-neutral-100 text-neutral-900'
                : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
            }`}
          >
            Home
          </Link>

          {/* Mobile Services Accordion */}
          <div>
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className={`flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isServicePage
                  ? 'bg-neutral-100 text-neutral-900'
                  : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
              }`}
            >
              Services
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                isMobileServicesOpen ? 'rotate-180' : ''
              }`} />
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${
              isMobileServicesOpen ? 'max-h-96 mt-1' : 'max-h-0'
            }`}>
              <div className="pl-3 space-y-0.5 border-l border-neutral-100 ml-3">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-neutral-50 transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-full border border-neutral-100 flex items-center justify-center text-neutral-400 flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">{service.title}</p>
                      <p className="text-[11px] text-neutral-400">{service.description}</p>
                    </div>
                  </Link>
                ))}
                <Link
                  href="/services"
                  onClick={closeMobileMenu}
                  className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-50 rounded-xl transition-colors"
                >
                  View All Services
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/blog"
            onClick={closeMobileMenu}
            className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              currentPage === 'blog'
                ? 'bg-neutral-100 text-neutral-900'
                : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
            }`}
          >
            Blog
          </Link>

          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              currentPage === 'contact'
                ? 'bg-neutral-100 text-neutral-900'
                : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
            }`}
          >
            Contact
          </Link>

          {/* Mobile CTA */}
          <div className="pt-3 border-t border-neutral-100">
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="flex items-center justify-center gap-2 w-full bg-neutral-900 text-white text-sm font-semibold px-5 py-3 rounded-full hover:bg-neutral-700 transition-colors"
            >
              Get a Quote
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-1.5 mt-4">
              {['Free consultation', 'UAE & India based', 'No lock-in'].map((t, i) => (
                <span key={i} className="text-[10px] text-neutral-400 uppercase tracking-wider">{t}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
