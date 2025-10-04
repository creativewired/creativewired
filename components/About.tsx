'use client'

import { motion } from 'framer-motion'
import GlassCard from './ui/GlassCard'
import { Award, Users, Target, Lightbulb } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Excellence',
      description: 'We deliver exceptional results through innovative strategies and cutting-edge technologies.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Client-Focused',
      description: 'Your success is our priority. We build long-term partnerships based on trust and results.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Results-Driven',
      description: 'Every campaign is optimized for maximum ROI and measurable business growth.'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovation',
      description: 'We stay ahead of digital trends to keep your business at the forefront of your industry.'
    }
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-gradient">Creative Wired</span>
            </h2>
            <p className="text-lg text-white/80 mb-6">
              We are a forward-thinking digital marketing agency dedicated to transforming businesses 
              through innovative digital solutions. With over 5 years of experience and 500+ successful 
              projects, we've helped businesses of all sizes achieve their digital marketing goals.
            </p>
            <p className="text-lg text-white/80 mb-8">
              Our team of experts combines creativity with data-driven strategies to deliver exceptional 
              results that drive growth, increase engagement, and maximize ROI for our clients.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">5+</div>
                <div className="text-white/70 text-sm">Years Experience</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">50+</div>
                <div className="text-white/70 text-sm">Team Members</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard>
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-300 mt-1">{value.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                      <p className="text-white/70">{value.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
