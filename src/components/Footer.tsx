import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '#about', label: 'About' },
    /*{ href: '#portfolio', label: 'Portfolio' },*/
    { href: '/contact', label: 'Contact' }
  ]

  const services = [
    { name: 'SEO Optimization', href: '/seo' },
    { name: 'Web Development', href: '/web-development' },
    { name: 'Paid Advertising', href: '/paid-advertising' },
    { name: 'Social Media Management', href: '/social-media-management' }
    /*{ name: 'Analytics & Reporting', href: '/services' },
    { name: 'Conversion Optimization', href: '/services' }*/
  ]

  const socialLinks = [
    /*{ icon: <Facebook className="w-5 h-5" />, href: '', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },*/
    { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/creative.wired/', label: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/company/creative-wired/', label: 'LinkedIn' }
  ]

  return (
    <footer className="relative mt-20">
      {/* Main Footer - Changed to solid dark background */}
      <div className="bg-gray-900 rounded-t-3xl border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <Image
                  src="/logowhite.png"
                  alt="Creative Wired Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="text-white font-bold text-xl">Creative Wired</span>
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Transforming businesses through innovative digital marketing solutions. 
                Your success is our mission.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-700 hover:scale-110 transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">
                    Creative Wired<br></br>
                    Ernakulam, KL<br />
                    IN, 682508
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <a href="tel:+918129191617" className="text-gray-400 hover:text-white transition-colors">
                    +91 8129191617
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <a href="mailto:hello@creativewired.com" className="text-gray-400 hover:text-white transition-colors">
                    connect@creativewired.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup 
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="max-w-md mx-auto text-center">
              <h3 className="text-white font-bold text-lg mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-6">
                Get the latest digital marketing insights delivered to your inbox.
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-1 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                  Subscribe
                </button>
              </div>
            </div>
          </div>*/}
        </div>
      </div>

      {/* Bottom Bar - Changed to solid dark background */}
      <div className="bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Creative Wired. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
