import { ArrowRight, Target, TrendingUp, BarChart3, CheckCircle, Star, Users, Award, Zap, Clock, DollarSign, MousePointer, Eye, Heart, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'


export const metadata = {
  title: 'Paid Advertising Services - Google Ads & Facebook Ads | Creative Wired',
  description: 'Professional paid advertising services. Google Ads, Facebook Ads, and PPC campaigns that drive conversions and maximize ROI.',
}


export default function PaidAdvertisingPage() {
  const advertisingServices = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Google Ads Management',
      description: 'Complete Google Ads campaign management to drive high-quality traffic and maximize your ROI.',
      features: [
        'Search & Display campaigns',
        'Shopping ads setup',
        'Keyword research & optimization',
        'Landing page optimization'
      ],
      price: 'Starting at $1,500/month',
      timeline: '2-4 weeks setup',
      adSpend: '+ Ad spend'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Facebook & Instagram Ads',
      description: 'Social media advertising campaigns that engage your audience and drive conversions.',
      features: [
        'Custom audience targeting',
        'Creative ad design',
        'A/B testing campaigns',
        'Retargeting strategies'
      ],
      price: 'Starting at $1,200/month',
      timeline: '1-3 weeks setup',
      adSpend: '+ Ad spend'
    },
    {
      icon: <MousePointer className="w-8 h-8" />,
      title: 'LinkedIn Ads',
      description: 'B2B focused advertising campaigns on LinkedIn to reach decision-makers and professionals.',
      features: [
        'Sponsored content campaigns',
        'Lead generation ads',
        'Account-based marketing',
        'Professional targeting'
      ],
      price: 'Starting at $1,800/month',
      timeline: '2-3 weeks setup',
      adSpend: '+ Ad spend'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'YouTube Advertising',
      description: 'Video advertising campaigns on YouTube to increase brand awareness and drive engagement.',
      features: [
        'Video ad creation',
        'TrueView campaigns',
        'Audience targeting',
        'Performance optimization'
      ],
      price: 'Starting at $1,400/month',
      timeline: '2-4 weeks setup',
      adSpend: '+ Ad spend'
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'E-commerce Advertising',
      description: 'Specialized advertising for online stores with product feeds and shopping campaigns.',
      features: [
        'Google Shopping ads',
        'Product feed optimization',
        'Dynamic retargeting',
        'Conversion tracking'
      ],
      price: 'Starting at $2,000/month',
      timeline: '3-5 weeks setup',
      adSpend: '+ Ad spend'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Campaign Analytics & Reporting',
      description: 'Comprehensive tracking, analysis, and reporting to optimize campaign performance.',
      features: [
        'Custom dashboards',
        'ROI tracking',
        'Performance reports',
        'Optimization recommendations'
      ],
      price: 'Starting at $500/month',
      timeline: '1-2 weeks setup',
      adSpend: 'Included'
    }
  ]


  const platforms = [
    {
      name: 'Google Ads',
      description: 'Search, Display, Shopping & YouTube',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Ads_logo.svg/960px-Google_Ads_logo.svg.png?20190505170132',
      specialties: ['Search Campaigns', 'Shopping Ads', 'Display Network', 'YouTube Ads']
    },
    {
      name: 'Facebook Ads',
      description: 'Facebook & Instagram advertising',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Meta_Platforms_logo.svg/2560px-Meta_Platforms_logo.svg.png',
      specialties: ['Feed Ads', 'Stories Ads', 'Video Campaigns', 'Lead Generation']
    },
    {
      name: 'LinkedIn Ads',
      description: 'B2B professional targeting',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg',
      specialties: ['Sponsored Content', 'Message Ads', 'Lead Gen Forms', 'Event Promotion']
    },
    
  ]


  const campaignProcess = [
    {
      step: '01',
      title: 'Strategy & Research',
      description: 'Market research, competitor analysis, and campaign strategy development.'
    },
    {
      step: '02',
      title: 'Campaign Setup',
      description: 'Account setup, campaign structure, ad creation, and targeting configuration.'
    },
    {
      step: '03',
      title: 'Launch & Optimize',
      description: 'Campaign launch, monitoring, testing, and continuous optimization.'
    },
    {
      step: '04',
      title: 'Report & Scale',
      description: 'Performance reporting, ROI analysis, and scaling successful campaigns.'
    }
  ]


  const whyChooseUs = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Certified Experts',
      stat: '25+',
      description: 'Google & Facebook certified specialists'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Average ROI',
      stat: '400%',
      description: 'Average return on ad spend'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Ad Accounts Managed',
      stat: '500+',
      description: 'Successful advertising campaigns'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Ad Spend Managed',
      stat: '$5M+',
      description: 'Total advertising budget optimized'
    }
  ]


  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'E-commerce Fashion',
      role: 'Marketing Director',
      content: 'Creative Wired transformed our advertising strategy. Our ROAS improved by 300% and we finally achieved profitable scaling on Facebook and Google.',
      rating: 5,
      avatar: '👩‍💼',
      results: '300% ROAS increase'
    },
    {
      name: 'Robert Kim',
      company: 'B2B SaaS Platform',
      role: 'Growth Manager',
      content: 'Their LinkedIn advertising expertise helped us reach C-level executives. We generated 200+ qualified leads in just 3 months.',
      rating: 5,
      avatar: '👨‍💻',
      results: '200+ qualified leads'
    },
    {
      name: 'Amanda Foster',
      company: 'Local Service Business',
      role: 'Owner',
      content: 'Google Ads management by Creative Wired increased our bookings by 400%. Their local advertising strategy is outstanding.',
      rating: 5,
      avatar: '👩‍🔧',
      results: '400% booking increase'
    }
  ]


  return (
    <div className="min-h-screen bg-white">
      
      {/* Header with Dropdown Navigation */}
      <Header currentPage="paid-advertising" />


      {/* Hero Section */}
      <section className="pt-16 py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <div className="bg-green-100 border border-green-200 rounded-full px-4 py-2">
                <span className="text-green-800 font-semibold text-sm flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Certified Advertising Experts
                </span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight">
              Drive Results with 
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Paid Advertising
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Maximize your ROI with expertly managed Google Ads, Facebook Ads, and multi-platform campaigns that convert visitors into customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact" className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform flex items-center gap-2 shadow-lg">
                Get Free Ad Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <div className="flex items-center space-x-2 text-gray-600">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold">4.8/5 from 150+ clients</span>
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


      {/* Advertising Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Paid Advertising <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive advertising solutions across all major platforms to maximize your reach and conversions.
            </p>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advertisingServices.map((service, index) => (
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
                  <div className="flex justify-between items-center mb-2">                    
                  </div>
                  <Link href="/contact" className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-4 py-3 rounded-lg hover:scale-105 transition-transform text-center block">
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Advertising Platforms */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Advertising <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Platforms</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We manage campaigns across all major advertising platforms to maximize your reach and ROI.
            </p>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-yellow-300 hover:shadow-xl transition-all duration-300 text-center">
                {/* Logo Image */}
                <div className="h-10 flex items-center justify-center mb-2">
                  <Image 
                    src={platform.logo} 
                    alt={platform.name}
                    width={60}
                    height={30}
                    className="object-contain"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-black mb-2">{platform.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{platform.description}</p>
                
                <div className="space-y-2">
                  {platform.specialties.map((specialty, idx) => (
                    <div key={idx} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
                      {specialty}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Campaign Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Campaign <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that delivers consistent results and maximizes your advertising ROI.
            </p>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {campaignProcess.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:border-yellow-300 hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-black font-bold text-lg">{step.step}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                {/* Arrow for desktop */}
                {index < campaignProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-yellow-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials 
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Client <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our clients say about our paid advertising management services.
            </p>
          </div>


          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-yellow-300 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="text-4xl mr-4">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-bold text-black">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      <p className="text-gray-500 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">{testimonial.results}</div>
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
      </section> */}


      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Scale</span> Your Advertising?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free advertising audit and see exactly how we can improve your campaigns and maximize your ROI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform inline-flex items-center justify-center gap-2">
              Get Free Ad Audit
              <Target className="w-5 h-5" />
            </Link>
            <Link href="https://calendly.com/creativewiredagency/30min" className="bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold px-8 py-4 rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300">
              Schedule Strategy Call
            </Link>
          </div>
          
          <p className="text-gray-400 mt-6">
            🎯 Free audit • ROI guarantee • Results in 30 days
          </p>
        </div>
      </section>


      {/* Footer Component */}
      <Footer />
    </div>
  )
}
