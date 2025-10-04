'use client'

import { motion } from 'framer-motion'
import GlassCard from './ui/GlassCard'
import { ExternalLink, TrendingUp, Users, Globe } from 'lucide-react'

export default function Portfolio() {
  const projects = [
    {
      title: 'E-commerce Growth',
      category: 'SEO & Paid Ads',
      description: 'Increased online sales by 300% through strategic SEO optimization and targeted advertising campaigns.',
      results: ['+300% Sales', '+150% Traffic', '+85% Conversion Rate'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: 'SaaS Platform Launch',
      category: 'Full Digital Marketing',
      description: 'Complete digital marketing strategy for a new SaaS platform, achieving 10k users in first quarter.',
      results: ['10k+ Users', '+250% Engagement', '45% Market Share'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      icon: <Users className="w-5 h-5" />
    },
    {
      title: 'Global Brand Expansion',
      category: 'Social Media & Branding',
      description: 'Helped a local brand expand internationally through strategic social media and content marketing.',
      results: ['50+ Countries', '+400% Followers', '25x ROI'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      icon: <Globe className="w-5 h-5" />
    }
  ]

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Real results from real clients. See how we've helped businesses transform their digital presence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard hover className="h-full overflow-hidden">
                <div className="relative mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute top-3 right-3 glass-button p-2 rounded-lg">
                    {project.icon}
                  </div>
                </div>
                
                <div className="p-2">
                  <div className="text-blue-300 text-sm font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-white/80 mb-4">{project.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-white/70 text-sm">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mr-3"></div>
                        {result}
                      </div>
                    ))}
                  </div>
                  
                  <button className="flex items-center text-blue-300 hover:text-blue-200 transition-colors">
                    <span className="mr-2">View Case Study</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
