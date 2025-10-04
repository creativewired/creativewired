import { ArrowRight, Code, Smartphone, Globe, Zap, CheckCircle, Star, Users, Award, Monitor, Database, Shield, Rocket, Clock, DollarSign } from 'lucide-react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'


export const metadata = {
  title: 'Web Development Services - Custom Websites & Apps | Creative Wire',
  description: 'Professional web development services. Custom websites, web apps, and e-commerce solutions built with modern technologies.',
}


export default function WebDevelopmentPage() {
  const webServices = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Custom Website Development',
      description: 'Fully responsive, custom-coded websites tailored to your brand and business requirements.',
      features: [
        'Custom design implementation',
        'Responsive mobile-first design',
        'SEO-optimized code structure',
        'Fast loading performance'
      ],
      price: 'Starting at $2,999',
      timeline: '2-4 weeks'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'E-Commerce Development',
      description: 'Complete e-commerce solutions with payment integration, inventory management, and admin panels.',
      features: [
        'Shopping cart functionality',
        'Payment gateway integration',
        'Inventory management system',
        'Customer account portal'
      ],
      price: 'Starting at $5,999',
      timeline: '4-8 weeks'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Application Development',
      description: 'Complex web applications with advanced functionality, user authentication, and database integration.',
      features: [
        'User authentication system',
        'Database design & integration',
        'API development',
        'Admin dashboard'
      ],
      price: 'Starting at $8,999',
      timeline: '6-12 weeks'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Website Redesign & Modernization',
      description: 'Transform your outdated website with modern design, improved performance, and enhanced user experience.',
      features: [
        'Modern UI/UX design',
        'Performance optimization',
        'Mobile responsiveness',
        'Content migration'
      ],
      price: 'Starting at $3,999',
      timeline: '3-6 weeks'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'CMS Development',
      description: 'Content management systems that allow you to easily update and manage your website content.',
      features: [
        'Custom CMS development',
        'Easy content editing',
        'Multi-user access control',
        'Media management system'
      ],
      price: 'Starting at $4,999',
      timeline: '4-6 weeks'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Website Maintenance & Support',
      description: 'Ongoing maintenance, security updates, backups, and technical support for your website.',
      features: [
        'Security monitoring',
        'Regular backups',
        'Performance optimization',
        '24/7 technical support'
      ],
      price: 'Starting at $299/month',
      timeline: 'Ongoing'
    }
  ]


  const technologies = [
    {
      category: 'Frontend',
      techs: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3']
    },
    {
      category: 'Backend',
      techs: ['Node.js', 'Python', 'PHP', 'Express.js', 'Django', 'Laravel']
    },
    {
      category: 'Database',
      techs: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Supabase']
    },
    {
      category: 'Cloud & DevOps',
      techs: ['AWS', 'Vercel', 'Netlify', 'Docker', 'GitHub Actions', 'CI/CD']
    }
  ]


  const developmentProcess = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understanding your requirements, goals, and creating a detailed project roadmap.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Creating wireframes, mockups, and interactive prototypes for your approval.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Building your website with clean code, rigorous testing, and quality assurance.'
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'Deploying your website and providing ongoing support and maintenance.'
    }
  ]


  const whyChooseUs = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Expert Developers',
      stat: '50+',
      description: 'Skilled developers with 5+ years experience'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Projects Delivered',
      stat: '300+',
      description: 'Successful websites & applications launched'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Happy Clients',
      stat: '200+',
      description: 'Satisfied clients across various industries'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'On-Time Delivery',
      stat: '95%',
      description: 'Projects delivered on or before deadline'
    }
  ]


  const testimonials = [
    {
      name: 'Michael Chen',
      company: 'TechStart Inc.',
      role: 'CTO',
      content: 'Creative Wire delivered a flawless web application that exceeded our expectations. The code quality is exceptional and the performance is outstanding.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Sarah Williams',
      company: 'Fashion Boutique',
      role: 'Owner',
      content: 'Our new e-commerce website increased sales by 250% in the first month. The user experience is incredible and customers love the design.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'David Rodriguez',
      company: 'Healthcare Solutions',
      role: 'CEO',
      content: 'Professional team that truly understands complex requirements. They built us a HIPAA-compliant portal that our patients and staff love using.',
      rating: 5,
      avatar: '👨‍⚕️'
    }
  ]


  return (
    <div className="min-h-screen bg-white">
      
      {/* Header with Dropdown Navigation */}
      <Header currentPage="web-development" />


      {/* Hero Section */}
      <section className="pt-16 py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <div className="bg-blue-100 border border-blue-200 rounded-full px-4 py-2">
                <span className="text-blue-800 font-semibold text-sm flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  Award-Winning Development Team
                </span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight">
              Build Powerful Websites with 
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Expert Development
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Custom websites and web applications that drive results. From concept to launch, we create digital experiences that engage and convert.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact" className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform flex items-center gap-2 shadow-lg">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <div className="flex items-center space-x-2 text-gray-600">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold">4.9/5 from 200+ clients</span>
              </div>
            </div>


            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-black">{item.icon}</div>
                  </div>
                  <div className="text-4xl font-bold text-black mb-2">{item.stat}</div>
                  <div className="text-gray-600 font-medium">{item.title}</div>
                  <div className="text-gray-500 text-sm">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Web Development Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Web Development <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple websites to complex web applications, we deliver solutions that scale with your business.
            </p>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webServices.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-yellow-300 hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-black">{service.icon}</div>
                </div>
                
                <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="border-t pt-6">
                  <Link href="/contact" className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-4 py-3 rounded-lg hover:scale-105 transition-transform text-center block">
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Modern <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use the latest and most reliable technologies to build fast, secure, and scalable solutions.
            </p>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-yellow-300 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-black mb-4">{tech.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.techs.map((techName, idx) => (
                    <span key={idx} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      {techName}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Development <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures quality, efficiency, and client satisfaction.
            </p>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentProcess.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:border-yellow-300 hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-black font-bold text-lg">{step.step}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                {/* Arrow for desktop */}
                {index < developmentProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-yellow-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Client <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our clients say about working with our development team.
            </p>
          </div>


          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-yellow-300 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-black">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Dream Website</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and create a custom solution that drives results for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform inline-flex items-center justify-center gap-2">
              Start Your Project
              <Rocket className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold px-8 py-4 rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300">
              Schedule Consultation
            </Link>
          </div>
          
          <p className="text-gray-400 mt-6">
            💡 Free consultation • Custom quote in 24 hours • 100% satisfaction guarantee
          </p>
        </div>
      </section>


      {/* Footer Component */}
      <Footer />
    </div>
  )
}
