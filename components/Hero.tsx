'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Button from './ui/Button'
import { ArrowRight, Play, Star, Award, Users, TrendingUp } from 'lucide-react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const stats = [
    { icon: <TrendingUp className="w-6 h-6 text-yellow-500" />, number: '500+', label: 'Projects Completed' },
    { icon: <Users className="w-6 h-6 text-yellow-500" />, number: '250+', label: 'Happy Clients' },
    { icon: <Award className="w-6 h-6 text-yellow-500" />, number: '99%', label: 'Success Rate' },
    { icon: <Star className="w-6 h-6 text-yellow-500" />, number: '24/7', label: 'Support' }
  ]

  if (!mounted) {
    return (
      <section className="relative min-h-screen bg-white flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto text-center space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              <span className="text-black">Transform Your</span><br />
              <span className="text-gradient">Digital Presence</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              We craft exceptional digital experiences that drive growth, engagement, and success for your business through cutting-edge solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="premium-button px-8 py-4 text-lg rounded-xl font-semibold">
                Get Started Today
              </button>
              
              <button className="glass-button px-8 py-4 text-lg rounded-xl font-semibold">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex items-center">
      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-yellow-200 rounded-full animate-bounce"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-100 rounded-xl rotate-45"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center space-y-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                <span className="text-black">Transform Your</span><br />
                <span className="text-gradient">Digital Presence</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
                We craft exceptional digital experiences that drive growth, engagement, and success for your business through cutting-edge solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="premium-button px-8 py-4 text-lg rounded-xl font-semibold inline-flex items-center gap-2 hover:scale-105 transition-transform">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="glass-button px-8 py-4 text-lg rounded-xl font-semibold inline-flex items-center gap-2 hover:scale-105 transition-transform">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
              {stats.map((stat, index) => (
                <div key={index} className="glass-card p-6 text-center">
                  <div className="mb-3 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold text-black mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
