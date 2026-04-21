import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' }
  ]

  const services = [
    { name: 'SEO Optimization', href: '/seo' },
    { name: 'Web Development', href: '/web-development' },
    { name: 'Paid Advertising', href: '/paid-advertising' },
    { name: 'Social Media Management', href: '/social-media-management' },
    { name: 'Analytics & Reporting', href: '/services' },
    { name: 'Conversion Optimization', href: '/services' }
  ]

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' }
  ]

  return (
    <footer className="relative mt-20">
      {/* Main Footer */}
      <div className="glass-card rounded-t-3xl border-t border-white/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <Image
                  src="/logo.png"
                  alt="Creative Wired Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="text-white font-bold text-xl">Creative Wired</span>
              </Link>
              <p className="text-white/80 mb-6 leading-relaxed">
                Transforming businesses through innovative digital marketing solutions. 
                Your success is our mission.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="glass-button p-3 rounded-lg hover:scale-110 transition-transform"
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
                      className="text-white/80 hover:text-white transition-colors duration-300"
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
                      className="text-white/80 hover:text-white transition-colors duration-300"
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
                  <MapPin className="w-5 h-5 text-blue-300 mt-1 flex-shrink-0" />
                  <span className="text-white/80">
                    123 Business Ave<br />
                    New York, NY 10001
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-300 flex-shrink-0" />
                  <a href="tel:+15551234567" className="text-white/80 hover:text-white transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-300 flex-shrink-0" />
                  <a href="mailto:connect@creativewired.com" className="text-white/80 hover:text-white transition-colors">
                    connect@creativewired.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-white/20 mt-12 pt-8">
            <div className="max-w-md mx-auto text-center">
              <h3 className="text-white font-bold text-lg mb-4">Stay Updated</h3>
              <p className="text-white/80 mb-6">
                Get the latest digital marketing insights delivered to your inbox.
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="glass-button px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="glass-card border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2025 Creative Wired. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-white/60 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
