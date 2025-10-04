import { ArrowRight, Search, TrendingUp, Target, CheckCircle, Star, Users, Award, BarChart3, Globe, Zap, DollarSign, Clock, Shield } from 'lucide-react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'


export const metadata = {
  title: 'SEO Services - Boost Your Rankings | Creative Wired',
  description: 'Professional SEO services that drive organic traffic and increase rankings. Get more leads with our proven SEO strategies.',
}

export default function SEOPage() {
  const seoServices = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Keyword Research & Strategy',
      description: 'Comprehensive keyword analysis to target high-value search terms that drive qualified traffic.',
      features: [
        'Competitor keyword analysis',
        'Long-tail keyword research',
        'Search intent mapping',
        'Keyword difficulty assessment'
      ],
      price: 'Starting at $299/month'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'On-Page SEO Optimization',
      description: 'Complete optimization of your website content, structure, and technical elements for better rankings.',
      features: [
        'Title tag & meta optimization',
        'Content structure improvement',
        'Internal linking strategy',
        'Schema markup implementation'
      ],
      price: 'Starting at $499/month'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Technical SEO Audit',
      description: 'In-depth technical analysis to identify and fix issues that prevent your site from ranking.',
      features: [
        'Site speed optimization',
        'Mobile-first indexing',
        'Crawlability improvements',
        'Core Web Vitals optimization'
      ],
      price: 'Starting at $799/month'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Link Building Campaigns',
      description: 'Strategic link acquisition from high-authority websites to boost your domain authority.',
      features: [
        'High-quality backlink acquisition',
        'Guest posting opportunities',
        'Broken link building',
        'HARO (Help a Reporter Out)'
      ],
      price: 'Starting at $899/month'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Local SEO Optimization',
      description: 'Dominate local search results and attract customers in your geographic area.',
      features: [
        'Google Business Profile optimization',
        'Local citation building',
        'Review management strategy',
        'Local keyword targeting'
      ],
      price: 'Starting at $399/month'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'SEO Analytics & Reporting',
      description: 'Comprehensive tracking and reporting to measure SEO performance and ROI.',
      features: [
        'Custom analytics dashboard',
        'Monthly performance reports',
        'Conversion tracking setup',
        'Competitor monitoring'
      ],
      price: 'Starting at $199/month'
    }
  ]

  const seoProcess = [
    {
      step: '01',
      title: 'SEO Audit & Analysis',
      description: 'Comprehensive analysis of your current SEO performance, identifying opportunities and issues.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Custom SEO strategy tailored to your business goals, target audience, and competitive landscape.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute on-page, technical, and off-page SEO optimizations based on our strategic plan.'
    },
    {
      step: '04',
      title: 'Monitoring & Optimization',
      description: 'Continuous monitoring, testing, and refinement to improve rankings and drive more traffic.'
    }
  ]

  const whyChooseUs = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Proven Track Record',
      stat: '500+',
      description: 'Successful SEO campaigns delivered'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Average Traffic Increase',
      stat: '340%',
      description: 'Average organic traffic growth'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Team',
      stat: '15+',
      description: 'Certified SEO specialists'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Faster Results',
      stat: '60',
      description: 'Days to see ranking improvements'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      company: 'E-Commerce Store',
      role: 'Marketing Director',
      content: 'Creative Wired increased our organic traffic by 420% in 6 months. Our sales from organic search tripled!',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'David Rodriguez',
      company: 'Local Service Business',
      role: 'Owner',
      content: 'We went from page 3 to position #1 for our main keywords. Phone calls increased by 300%!',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Lisa Chen',
      company: 'SaaS Company',
      role: 'Growth Manager',
      content: 'Professional team with excellent communication. Our MRR from organic leads doubled in 4 months.',
      rating: 5,
      avatar: '👩‍💻'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter SEO',
      price: '$899',
      period: '/month',
      description: 'Perfect for small businesses getting started with SEO',
      features: [
        'Up to 10 target keywords',
        'Basic on-page optimization',
        'Monthly progress reports',
        'Google Analytics setup',
        'Local SEO basics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional SEO',
      price: '$1,899',
      period: '/month',
      description: 'Comprehensive SEO for growing businesses',
      features: [
        'Up to 25 target keywords',
        'Advanced on-page optimization',
        'Technical SEO audit',
        'Content optimization',
        'Link building campaign',
        'Bi-weekly reporting',
        'Priority phone support'
      ],
      popular: true
    },
    {
      name: 'Enterprise SEO',
      price: '$3,999',
      period: '/month',
      description: 'Full-scale SEO for large businesses',
      features: [
        'Unlimited target keywords',
        'Complete SEO management',
        'Advanced technical SEO',
        'Content creation included',
        'Aggressive link building',
        'Weekly reporting',
        'Dedicated account manager',
        '24/7 priority support'
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      
       {/* Header with Dropdown Navigation */}
            <Header currentPage="seo" />

      {/* Hero Section */}
      <section className="pt-16 py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <div className="bg-yellow-100 border border-yellow-200 rounded-full px-4 py-2">
                <span className="text-yellow-800 font-semibold text-sm flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  #1 SEO Agency
                </span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight">
              Dominate Search Results with 
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Expert SEO
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Increase organic traffic by 340%+ with our proven SEO strategies. Get more leads, sales, and revenue from Google search.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact" className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform flex items-center gap-2 shadow-lg">
                Get Free SEO Audit
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

      {/* SEO Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Complete <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">SEO Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From technical audits to content optimization, we handle every aspect of your SEO strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoServices.map((service, index) => (
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
                  <div className="flex justify-between items-center">
                    <Link href="/contact" className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-4 py-2 rounded-lg hover:scale-105 transition-transform text-sm">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our SEO <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to SEO that delivers consistent, measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoProcess.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:border-yellow-300 hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-black font-bold text-lg">{step.step}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                {/* Arrow for desktop */}
                {index < seoProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-yellow-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              SEO <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect SEO package for your business needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 transition-all duration-300 ${
                plan.popular 
                  ? 'border-2 border-yellow-400 shadow-2xl scale-105' 
                  : 'border border-gray-200 hover:border-yellow-300 hover:shadow-xl'
              }`}>
                {plan.popular && (
                  <div className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold text-black">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/contact" className={`w-full font-semibold px-8 py-4 rounded-xl transition-transform inline-block text-center ${
                  plan.popular
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:scale-105'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Client <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our SEO expertise has transformed businesses across industries.
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
            Ready to <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Dominate</span> Search Results?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free SEO audit and see exactly how we can improve your rankings and drive more organic traffic.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform inline-flex items-center justify-center gap-2">
              Get Free SEO Audit
              <Search className="w-5 h-5" />
            </Link>
            <Link href="https://calendly.com/creativewiredagency/30min" className="bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold px-8 py-4 rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300">
              Schedule Consultation
            </Link>
          </div>
          
          <p className="text-gray-400 mt-6">
            🔒 No commitment required • 100% free audit • Results in 24 hours
          </p>
        </div>
      </section>

      {/* Footer Component */}
            <Footer />
          </div>
        )
      }