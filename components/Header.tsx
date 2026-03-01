'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'  // ← MAKE SURE THIS IS IMPORTED
import { Menu, X, ChevronDown, Code, Search, Target, Heart, TrendingUp, BarChart3 } from 'lucide-react'

interface HeaderProps {
  currentPage?: string
}

export default function Header({ currentPage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      title: 'SEO Services',
      description: 'Boost your search rankings',
      icon: <Search className="w-5 h-5" />,
      href: '/seo',
      color: 'text-green-600'
    },
    {
      title: 'Web Development',
      description: 'Custom websites & apps',
      icon: <Code className="w-5 h-5" />,
      href: '/web-development',
      color: 'text-blue-600'
    },
    {
      title: 'Paid Advertising',
      description: 'Google & Facebook Ads',
      icon: <Target className="w-5 h-5" />,
      href: '/paid-advertising',
      color: 'text-red-600'
    },
    {
      title: 'Social Media Management',
      description: 'Build engaged communities',
      icon: <Heart className="w-5 h-5" />,
      href: '/social-media-management',
      color: 'text-purple-600'
    },
    {
      title: 'Digital Marketing',
      description: 'Complete marketing solutions',
      icon: <TrendingUp className="w-5 h-5" />,
      href: '/services',
      color: 'text-orange-600'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Data-driven insights',
      icon: <BarChart3 className="w-5 h-5" />,
      href: '/services',
      color: 'text-indigo-600'
    }
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-card border-b border-white/20' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo - Only Image */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Creative Wired Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
              priority
            />
            <span className="text-white font-bold text-xl">Creative Wired</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            
            <Link
              href="/"
              className={`text-white/90 hover:text-white transition-colors duration-300 font-medium ${
                currentPage === 'home' ? 'text-white' : ''
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
                className={`flex items-center space-x-1 text-white/90 hover:text-white transition-colors duration-300 font-medium ${
                  currentPage === 'services' || currentPage === 'seo' || currentPage === 'web-development' || 
                  currentPage === 'paid-advertising' || currentPage === 'social-media-management'
                    ? 'text-white' 
                    : ''
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  isServicesOpen ? 'rotate-180' : 'rotate-0'
                }`} />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-2xl shadow-xl transition-all duration-200 ${
                isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="p-4">
                  <div className="grid gap-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                      >
                        <div className={`${service.color} group-hover:scale-110 transition-transform`}>
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-black group-hover:text-blue-600 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-500">{service.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  <div className="border-t mt-4 pt-4">
                    <Link
                      href="/services"
                      className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-colors group"
                    >
                      <div>
                        <h3 className="font-semibold text-black group-hover:text-blue-600 transition-colors">
                          View All Services
                        </h3>
                        <p className="text-sm text-gray-500">Explore our complete service portfolio</p>
                      </div>
                      <div className="text-blue-600 group-hover:translate-x-1 transition-transform">
                        →
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/blog"
              className={`text-white/90 hover:text-white transition-colors duration-300 font-medium ${
                currentPage === 'blog' ? 'text-white' : ''
              }`}
            >
              Blog
            </Link>

            <Link
              href="#about"
              className={`text-white/90 hover:text-white transition-colors duration-300 font-medium ${
                currentPage === 'about' ? 'text-white' : ''
              }`}
            >
              About
            </Link>

            <Link
              href="#portfolio"
              className={`text-white/90 hover:text-white transition-colors duration-300 font-medium ${
                currentPage === 'portfolio' ? 'text-white' : ''
              }`}
            >
              Portfolio
            </Link>

            <Link
              href="/contact"
              className={`text-white/90 hover:text-white transition-colors duration-300 font-medium ${
                currentPage === 'contact' ? 'text-white' : ''
              }`}
            >
              Contact
            </Link>

            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass-card mt-2 p-4">
            <div className="flex flex-col space-y-4">
              
              <Link
                href="/"
                className="text-white/90 hover:text-white transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services Menu */}
              <div className="py-2">
                <div className="text-white/90 font-medium mb-2">Services</div>
                <div className="pl-4 space-y-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="block text-white/70 hover:text-white transition-colors duration-300 py-1 text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/blog"
                className="text-white/90 hover:text-white transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>

              <Link
                href="#about"
                className="text-white/90 hover:text-white transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>

              <Link
                href="#portfolio"
                className="text-white/90 hover:text-white transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>

              <Link
                href="/contact"
                className="text-white/90 hover:text-white transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center block mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
