'use client'
import { ArrowRight, Play, CheckCircle, Star, Users, TrendingUp, Award, Mail, Phone, MapPin, Calculator, Zap, Target, Globe, Rocket, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          let startTime: number | null = null
          
          const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / duration, 1)
            
            setCount(Math.floor(progress * end))
            
            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById(`counter-${end}`)
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [end, duration, isVisible])

  return (
    <span id={`counter-${end}`} className="inline-block">
      {count}{suffix}
    </span>
  )
}

// Interactive Service Card
function InteractiveServiceCard({ service, index }: { service: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={`bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-500 cursor-pointer group ${
        isHovered ? 'border-yellow-300 shadow-2xl scale-105 -translate-y-2' : 'hover:border-yellow-300 hover:shadow-xl hover:scale-102'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mb-6 transition-transform duration-300 ${
        isHovered ? 'scale-125 rotate-12' : 'group-hover:scale-110'
      }`}>
        <CheckCircle className="w-6 h-6 text-black" />
      </div>
      
      <h3 className="text-xl font-bold text-black mb-4 transition-colors duration-300">
        {service.title}
      </h3>
      
      <p className="text-gray-600 mb-6 transition-all duration-300">
        {service.description}
      </p>

      <div className={`transition-all duration-500 ${isHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <ul className="space-y-2 mb-6">
          {service.features.map((feature: string, idx: number) => (
            <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link href={service.href} className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-6 py-3 rounded-lg hover:scale-105 transition-transform w-full block text-center">
          Learn More
        </Link>
      </div>
    </div>
  )
}

// Testimonials Carousel
function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const testimonials = [
    {
      name: 'Sarah Williams',
      company: 'TechStart Inc.',
      role: 'Chief Executive Officer',
      content: 'They managed our ads and social media so well. Our sales went up and our brand looks more professional now.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'Rahul N S',
      company: 'Meraki PTE LTD',
      role: 'Marketing Director',
      content: 'Clear strategy, timely execution, and transparent reporting — results met and exceeded our benchmarks.',
      rating: 5,
      image: '👨‍💻'
    },
    {
      name: 'Relish A J',
      company: 'Nutono LLC',
      role: 'Chief Marketing Officer',
      content: 'Their local SEO strategy helped us become the #1 restaurant in our area. Customer inquiries doubled!',
      rating: 5,
      image: '👩‍🍳'
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 max-w-2xl mx-auto relative overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full flex-shrink-0 text-center">
            <div className="text-6xl mb-4">{testimonial.image}</div>
            <div className="flex justify-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600 italic mb-6 text-lg">"{testimonial.content}"</p>
            <div>
              <h4 className="font-bold text-black">{testimonial.name}</h4>
              <p className="text-gray-500">{testimonial.role}, {testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 hover:bg-yellow-50 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 hover:bg-yellow-50 transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-yellow-400' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

// Enhanced ROI Calculator
function ROICalculator() {
  const [monthlyVisitors, setMonthlyVisitors] = useState(5000)
  const [conversionRate, setConversionRate] = useState(2)
  const [averageOrderValue, setAverageOrderValue] = useState(100)
  const [monthlyInvestment, setMonthlyInvestment] = useState(1500)

  // Calculate results
  const currentMonthlyLeads = Math.floor(monthlyVisitors * (conversionRate / 100))
  const currentMonthlyRevenue = currentMonthlyLeads * averageOrderValue
  
  // With our services (conservative estimates)
  const improvedConversionRate = conversionRate + 2 // +2% conversion improvement
  const improvedTraffic = monthlyVisitors * 1.5 // +50% traffic increase
  
  const improvedMonthlyLeads = Math.floor(improvedTraffic * (improvedConversionRate / 100))
  const improvedMonthlyRevenue = improvedMonthlyLeads * averageOrderValue
  
  const additionalRevenue = improvedMonthlyRevenue - currentMonthlyRevenue
  const roi = ((additionalRevenue - monthlyInvestment) / monthlyInvestment) * 100

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8">
      <div className="flex items-center space-x-3 mb-6">
        <Calculator className="w-8 h-8 text-yellow-600" />
        <h3 className="text-2xl font-bold text-black">ROI Calculator</h3>
      </div>

      {/* Input Fields */}
      <div className="space-y-6 mb-8">
        {/* Monthly Visitors */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Website Visitors: {monthlyVisitors.toLocaleString()}
          </label>
          <input
            type="range"
            min="1000"
            max="100000"
            step="1000"
            value={monthlyVisitors}
            onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
            className="w-full h-2 bg-yellow-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Conversion Rate */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Conversion Rate: {conversionRate.toFixed(1)}%
          </label>
          <input
            type="range"
            min="0.5"
            max="10"
            step="0.1"
            value={conversionRate}
            onChange={(e) => setConversionRate(Number(e.target.value))}
            className="w-full h-2 bg-yellow-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Average Order Value */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Average Order Value: ${averageOrderValue}
          </label>
          <input
            type="range"
            min="10"
            max="1000"
            step="10"
            value={averageOrderValue}
            onChange={(e) => setAverageOrderValue(Number(e.target.value))}
            className="w-full h-2 bg-yellow-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Monthly Investment */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Investment: ${monthlyInvestment.toLocaleString()}
          </label>
          <input
            type="range"
            min="500"
            max="10000"
            step="100"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
            className="w-full h-2 bg-yellow-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 text-center">
            <div className="text-sm text-gray-500 mb-1">Current Revenue</div>
            <div className="text-2xl font-bold text-gray-700">
              ${currentMonthlyRevenue.toLocaleString()}
            </div>
          </div>
          <div className="bg-green-50 rounded-xl p-4 text-center">
            <div className="text-sm text-green-600 mb-1">With Our Services</div>
            <div className="text-2xl font-bold text-green-700">
              ${improvedMonthlyRevenue.toLocaleString()}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 text-center">
          <div className="text-sm text-yellow-800 mb-1">Additional Monthly Revenue</div>
          <div className="text-3xl font-bold text-yellow-900">
            +${additionalRevenue.toLocaleString()}
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 text-center">
          <div className="text-sm text-blue-800 mb-1">Return on Investment</div>
          <div className="text-3xl font-bold text-blue-900">
            {roi > 0 ? '+' : ''}{roi.toFixed(0)}%
          </div>
        </div>

        <Link href="/contact" className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-6 py-4 rounded-xl hover:scale-105 transition-transform block text-center">
          Get Custom Proposal
        </Link>
      </div>
    </div>
  )
}

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const services = [
    {
      title: 'SEO Optimization',
      description: 'Boost your search rankings with advanced SEO strategies and technical optimization.',
      features: ['Keyword Research', 'Technical SEO', 'Content Optimization', 'Local SEO'],
      href: '/seo'
    },
    {
      title: 'Web Development',
      description: 'Custom websites and applications built with modern technologies for optimal performance.',
      features: ['Responsive Design', 'E-commerce Solutions', 'CMS Development', 'API Integration'],
      href: '/web-development'
    },
    {
      title: 'Paid Advertising',
      description: 'Maximize ROI with targeted advertising campaigns across multiple platforms.',
      features: ['Google Ads', 'Facebook Ads', 'Campaign Optimization', 'ROI Tracking'],
      href: '/paid-advertising'
    },
    {
      title: 'Social Media Management',
      description: 'Build and engage your community with strategic social media content.',
      features: ['Content Creation', 'Community Management', 'Social Analytics', 'Brand Building'],
      href: '/social-media-management'
    }
    /*{
      title: 'Analytics & Reporting',
      description: 'Track performance and gain insights with comprehensive analytics.',
      features: ['Google Analytics', 'Custom Dashboards', 'Performance Reports', 'Data Insights'],
      href: '/services'
    },
    {
      title: 'Conversion Optimization',
      description: 'Increase conversions with A/B testing and user experience optimization.',
      features: ['A/B Testing', 'Landing Page Optimization', 'UX/UI Improvements', 'Funnel Analysis'],
      href: '/services'
    }*/
  ]

  if (!mounted) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
    </div>
  }

  return (
    <div className="min-h-screen bg-white">
      
      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Link href="https://wa.me/+918129191617" className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black p-4 rounded-full shadow-lg hover:scale-110 transition-transform animate-pulse block">
          <Phone className="w-6 h-6" />
        </Link>
      </div>

      {/* Header with Dropdown Navigation */}
      <Header currentPage="home" />

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 border-2 border-yellow-200 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-100 rounded-xl rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center space-y-12">
            
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight">
                Transform Your
                <br />
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  Digital Presence
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We craft exceptional digital experiences that drive growth, engagement, and success for your business through cutting-edge solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact" className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg group">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              {/*<button className="bg-white border-2 border-yellow-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-yellow-50 hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button> */}
            </div>

            {/* Animated Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
              <div className="bg-white border border-yellow-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-black mb-2">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <div className="text-gray-600 text-sm font-medium">Projects Completed</div>
              </div>
              
              <div className="bg-white border border-yellow-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <Users className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-black mb-2">
                  <AnimatedCounter end={250} suffix="+" />
                </div>
                <div className="text-gray-600 text-sm font-medium">Happy Clients</div>
              </div>
              
              <div className="bg-white border border-yellow-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <Award className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-black mb-2">
                  <AnimatedCounter end={99} suffix="%" />
                </div>
                <div className="text-gray-600 text-sm font-medium">Success Rate</div>
              </div>
              
              <div className="bg-white border border-yellow-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-black mb-2">24/7</div>
                <div className="text-gray-600 text-sm font-medium">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions tailored to elevate your business and drive measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <InteractiveServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-8 py-4 rounded-xl hover:scale-105 transition-transform inline-flex items-center gap-2">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Calculate Your <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">ROI</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                See how much revenue you could generate with our digital marketing services. 
                Our proven strategies deliver measurable results.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Data-driven strategies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Proven results across industries</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Transparent reporting</span>
                </div>
              </div>
            </div>

            <ROICalculator />
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              What Our <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with Creative Wired.
            </p>
          </div>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* Interactive CTA Section */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 border border-yellow-400/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-yellow-400/20 rounded-xl animate-pulse"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of successful businesses that trust Creative Wired to drive their digital growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact" className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform inline-flex items-center justify-center gap-2">
              Start Your Project
              <Rocket className="w-5 h-5" />
            </Link>
            <Link href="https://calendly.com/swarajns79/30min" target="_blank" className="bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold px-8 py-4 rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300">
              Schedule Consultation
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-lg font-semibold mb-2">Fast Results</h3>
              <p className="text-gray-400 text-sm">See improvements within the first 30 days</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">💎</div>
              <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-400 text-sm">Award-winning strategies and execution</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold mb-2">Guaranteed Results</h3>
              <p className="text-gray-400 text-sm">We deliver results or work until you're satisfied</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}
