'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Code, Search, TrendingUp, BarChart3, Menu, X } from 'lucide-react'

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
      title: 'Paid Marketing',
      description: 'Paid marketing solutions',
      icon: <TrendingUp className="w-5 h-5" />,
      href: '/paid-advertising',
      color: 'text-purple-600'
    },
    {
      title: 'Social Media Management',
      description: 'Data-driven insights',
      icon: <BarChart3 className="w-5 h-5" />,
      href: '/social-media-management',
      color: 'text-orange-600'
    }
  ]

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setIsMobileServicesOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        <Link 
          href="/" 
          className={`font-medium transition-colors hover:text-yellow-600 ${
            currentPage === 'home' ? 'text-yellow-600' : 'text-gray-700'
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
            className={`flex items-center space-x-1 font-medium transition-colors hover:text-yellow-600 ${
              currentPage === 'services' || currentPage === 'seo' || currentPage === 'web-development' 
                ? 'text-yellow-600' 
                : 'text-gray-700'
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
                      <h3 className="font-semibold text-black group-hover:text-yellow-600 transition-colors">
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
                  className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 hover:from-yellow-100 hover:to-orange-100 transition-colors group"
                >
                  <div>
                    <h3 className="font-semibold text-black group-hover:text-yellow-600 transition-colors">
                      View All Services
                    </h3>
                    <p className="text-sm text-gray-500">Explore our complete service portfolio</p>
                  </div>
                  <div className="text-yellow-600 group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Link 
          href="/blog" 
          className={`font-medium transition-colors hover:text-yellow-600 ${
            currentPage === 'blog' ? 'text-yellow-600' : 'text-gray-700'
          }`}
        >
          Blog
        </Link>
        
        <Link 
          href="/contact" 
          className={`font-medium transition-colors hover:text-yellow-600 ${
            currentPage === 'contact' ? 'text-yellow-600' : 'text-gray-700'
          }`}
        >
          Contact
        </Link>
        
        <Link 
          href="/contact" 
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
        >
          Get Quote
        </Link>
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden p-2 text-gray-700 hover:text-yellow-600 transition-colors"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <Link 
              href="/" 
              onClick={closeMobileMenu}
              className={`block py-2 font-medium transition-colors ${
                currentPage === 'home' ? 'text-yellow-600' : 'text-gray-700'
              }`}
            >
              Home
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className={`flex items-center justify-between w-full py-2 font-medium transition-colors ${
                  currentPage === 'services' ? 'text-yellow-600' : 'text-gray-700'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${
                  isMobileServicesOpen ? 'rotate-180' : 'rotate-0'
                }`} />
              </button>

              {isMobileServicesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      onClick={closeMobileMenu}
                      className="flex items-center space-x-3 py-2"
                    >
                      <div className={service.color}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-black">{service.title}</h3>
                        <p className="text-sm text-gray-500">{service.description}</p>
                      </div>
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    onClick={closeMobileMenu}
                    className="block py-2 text-yellow-600 font-medium"
                  >
                    View All Services →
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/blog" 
              onClick={closeMobileMenu}
              className={`block py-2 font-medium transition-colors ${
                currentPage === 'blog' ? 'text-yellow-600' : 'text-gray-700'
              }`}
            >
              Blog
            </Link>

            <Link 
              href="/contact" 
              onClick={closeMobileMenu}
              className={`block py-2 font-medium transition-colors ${
                currentPage === 'contact' ? 'text-yellow-600' : 'text-gray-700'
              }`}
            >
              Contact
            </Link>

            <Link 
              href="/contact" 
              onClick={closeMobileMenu}
              className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-lg font-semibold text-center hover:scale-105 transition-transform"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
