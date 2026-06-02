'use client'

import { motion } from 'framer-motion'
import GlassCard from './ui/GlassCard'
import { Search, Code, Megaphone, Users, BarChart3, Zap } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'SEO Optimization',
      description: 'Boost your search rankings with advanced SEO strategies, keyword research, and technical optimization.',
      features: ['Keyword Research', 'Technical SEO', 'Content Optimization', 'Local SEO']
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance.',
      features: ['Responsive Design', 'E-commerce Solutions', 'CMS Development', 'API Integration']
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: 'Paid Advertising',
      description: 'Maximize ROI with targeted advertising campaigns across Google, Facebook, and other platforms.',
      features: ['Google Ads', 'Facebook Ads', 'Campaign Optimization', 'ROI Tracking']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Social Media Management',
      description: 'Build and engage your community with strategic social media content and management.',
      features: ['Content Creation', 'Community Management', 'Social Analytics', 'Brand Building']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Analytics & Reporting',
      description: 'Track performance and gain insights with comprehensive analytics and custom reporting.',
      features: ['Google Analytics', 'Custom Dashboards', 'Performance Reports', 'Data Insights']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Conversion Optimization',
      description: 'Increase conversions with A/B testing, user experience optimization, and funnel analysis.',
      features: ['A/B Testing', 'Landing Page Optimization', 'UX/UI Improvements', 'Funnel Analysis']
    }
  ]

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions tailored to elevate your business and drive measurable results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard hover className="h-full">
                <div className="text-blue-300 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/80 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-white/70 text-sm flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
