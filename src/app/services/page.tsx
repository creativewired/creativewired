'use client'

import { ArrowRight, CheckCircle, Search, Code, Megaphone, Share2, TrendingUp, Users, Star, Award, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function ServicesPage() {
  const [scrollY, setScrollY] = useState(0)
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set())
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      
      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect()
          if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
            setVisibleSections(prev => new Set(prev).add(index))
          }
        }
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'SEO Optimization',
      subtitle: 'Dominate Search Results',
      description: 'Strategic SEO that drives organic traffic and establishes your authority in search results. Our comprehensive approach covers technical optimization, content strategy, and link building.',
      features: ['Complete SEO Audit', 'Keyword Research & Strategy', 'On-Page Optimization', 'Technical SEO Fixes', 'Quality Link Building', 'Performance Analytics'],
      color: 'from-blue-500 via-blue-600 to-cyan-500',
      url: '/seo'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      subtitle: 'Beautiful. Fast. Powerful.',
      description: 'Modern websites built with cutting-edge technology and pixel-perfect design. We create digital experiences that convert visitors into customers.',
      features: ['Custom Design', 'Responsive Development', 'E-commerce Solutions', 'CMS Integration', 'Performance Optimization', 'Security Implementation'],
      color: 'from-purple-500 via-purple-600 to-pink-500',
      url: '/web-development'
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: 'Paid Advertising',
      subtitle: 'Maximize Your ROI',
      description: 'Data-driven campaigns that deliver qualified leads across all major platforms. We optimize every dollar spent to maximize your return on investment.',
      features: ['Google Ads Management', 'Meta Ads (FB/IG)', 'LinkedIn Advertising', 'Retargeting Campaigns', 'A/B Testing & Optimization', 'Detailed Analytics'],
      color: 'from-orange-500 via-orange-600 to-red-500',
      url: '/paid-advertising'
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: 'Social Media Management',
      subtitle: 'Engage & Convert',
      description: 'Build engaged communities with strategic content and authentic engagement. We help you connect with your audience and drive business results.',
      features: ['Content Strategy', 'Community Management', 'Influencer Partnerships', 'Social Advertising', 'Analytics & Reporting', 'Brand Monitoring'],
      color: 'from-green-500 via-emerald-600 to-teal-500',
      url: '/social-media-management'
    },
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header currentPage="services" />

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-delay { animation: fade-in 1s ease-out 0.3s backwards; }
      `}</style>

      {/* Cursor Glow Effect */}
      <div 
        className="fixed pointer-events-none z-50 w-96 h-96 rounded-full blur-3xl opacity-10 transition-all duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(250,204,21,0.6) 0%, transparent 70%)',
          left: mousePos.x - 192,
          top: mousePos.y - 192,
        }}
      ></div>

      {/* Hero with Advanced Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Smooth Gradient Background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-50 via-yellow-50 to-orange-50"
          style={{
            transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.0005})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent"></div>
        </div>

        {/* Floating Gradient Blobs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '0s', animationDuration: '8s'}}></div>
        <div className="absolute bottom-40 right-32 w-[28rem] h-[28rem] bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s', animationDuration: '10s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '4s', animationDuration: '12s'}}></div>

        {/* Hero Content */}
        <div 
          className="relative z-10 text-center px-4 max-w-6xl mx-auto"
          style={{
            opacity: Math.max(0, 1 - scrollY / 400),
            transform: `translateY(${scrollY * 0.4}px)`,
          }}
        >
          <div className="inline-flex items-center space-x-2 bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/20 px-6 py-3 rounded-full mb-8 animate-fade-in">
            <Sparkles className="w-5 h-5 text-yellow-600" />
            <span className="text-yellow-800 font-semibold">Premium Digital Services</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-bold text-gray-900 mb-6 animate-fade-in leading-none">
            Our Services
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay leading-relaxed">
            Transform your business with data-driven strategies and premium execution
          </p>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          style={{
            opacity: Math.max(0, 1 - scrollY / 200),
          }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center animate-bounce">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white sticky top-0 z-30 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <TrendingUp className="w-6 h-6" />, num: '500+', label: 'Projects' },
              { icon: <Star className="w-6 h-6" />, num: '98%', label: 'Satisfaction' },
              { icon: <Users className="w-6 h-6" />, num: '250+', label: 'Clients' },
              { icon: <Award className="w-6 h-6" />, num: '4.9/5', label: 'Rating' }
            ].map((stat, idx) => (
              <div 
                key={idx} 
                className="text-center group transition-all duration-700"
                style={{
                  opacity: scrollY > 200 ? 1 : 0,
                  transform: scrollY > 200 ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${idx * 150}ms`
                }}
              >
                <div className="flex justify-center mb-3 text-yellow-500 group-hover:scale-125 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold mb-2 group-hover:text-yellow-500 transition-colors">
                  {stat.num}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Full Width Cards */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, idx) => (
              <div
                key={idx}
                ref={el => sectionRefs.current[idx] = el}
                className={`transition-all duration-1000 ${
                  visibleSections.has(idx) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
              >
                <div className={`relative bg-gradient-to-br ${service.color} rounded-[2.5rem] p-12 md:p-16 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden group`}>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>

                  <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left - Content */}
                    <div>
                      {/* Icon */}
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                        {service.icon}
                      </div>

                      <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                        {service.title}
                      </h2>
                      
                      <p className="text-2xl font-semibold mb-6 opacity-90">
                        {service.subtitle}
                      </p>
                      
                      <p className="text-xl mb-8 leading-relaxed opacity-90">
                        {service.description}
                      </p>

                      <Link href={service.url}>
                        <button className="bg-white text-gray-900 px-10 py-5 rounded-xl font-bold hover:bg-gray-100 transition-all inline-flex items-center gap-3 shadow-xl group">
                          <span>Learn More</span>
                          <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </button>
                      </Link>
                    </div>

                    {/* Right - Features */}
                    <div>
                      <h3 className="text-2xl font-bold mb-6 opacity-90">What's Included:</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                            <CheckCircle className="w-5 h-5 flex-shrink-0" />
                            <span className="font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Ready to <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Transform</span><br />Your Business?
          </h2>
          <p className="text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Let's create a custom strategy that drives real, measurable results
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-12 py-6 rounded-xl font-bold hover:scale-105 transition-all text-lg shadow-2xl shadow-yellow-500/30 inline-flex items-center justify-center gap-3">
                <span>Start Your Project</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
            <Link href="https://calendly.com/swarajns79/30min" target="_blank">
              <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-12 py-6 rounded-xl font-bold hover:bg-white/20 transition-all text-lg">
                Schedule a Call
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
