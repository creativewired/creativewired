import { ArrowRight, Users, Heart, MessageCircle, Share2, TrendingUp, Camera, CheckCircle, Star, Award, Zap, Clock, BarChart3, Megaphone, Palette, Calendar } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'


export const metadata = {
  title: 'Social Media Management Services - Instagram, Facebook & More | Creative Wire',
  description: 'Professional social media management services. Instagram, Facebook, LinkedIn, and TikTok management that builds communities and drives engagement.',
}


export default function SocialMediaManagementPage() {
  const socialServices = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Content Creation & Design',
      description: 'Eye-catching posts, stories, and graphics designed to captivate your audience across all platforms.',
      features: [
        'Custom graphic design',
        'Photo & video editing',
        'Brand-consistent visuals',
        'Story templates & highlights'
      ],
      price: 'Starting at $800/month',
      timeline: '1-2 weeks setup',
      posts: '20-30 posts/month'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Social Media Strategy & Planning',
      description: 'Comprehensive social media strategies tailored to your brand goals and target audience.',
      features: [
        'Content calendar planning',
        'Platform-specific strategies',
        'Competitor analysis',
        'Growth optimization'
      ],
      price: 'Starting at $600/month',
      timeline: '1-2 weeks setup',
      posts: 'Strategy + planning'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Community Management',
      description: 'Active community engagement, responding to comments, and building meaningful relationships.',
      features: [
        'Comment & DM management',
        'Community engagement',
        'Customer service support',
        'Reputation monitoring'
      ],
      price: 'Starting at $500/month',
      timeline: 'Immediate start',
      posts: 'Daily engagement'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Social Media Advertising',
      description: 'Targeted social media ad campaigns to reach new audiences and drive conversions.',
      features: [
        'Instagram & Facebook ads',
        'LinkedIn advertising',
        'TikTok ad campaigns',
        'Audience targeting & optimization'
      ],
      price: 'Starting at $1,000/month',
      timeline: '2-3 weeks setup',
      posts: '+ Ad spend'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Influencer Marketing',
      description: 'Connect with relevant influencers to amplify your brand reach and credibility.',
      features: [
        'Influencer identification',
        'Partnership negotiations',
        'Campaign management',
        'Performance tracking'
      ],
      price: 'Starting at $1,200/month',
      timeline: '2-4 weeks setup',
      posts: 'Campaign-based'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Analytics & Reporting',
      description: 'Detailed insights and reports to track performance and optimize your social media strategy.',
      features: [
        'Monthly performance reports',
        'Growth analytics',
        'Engagement insights',
        'ROI measurement'
      ],
      price: 'Starting at $300/month',
      timeline: '1 week setup',
      posts: 'Comprehensive reporting'
    }
  ]


  const platforms = [
    {
      name: 'Instagram',
      description: 'Visual storytelling & engagement',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
      specialties: ['Feed Posts', 'Stories', 'Reels', 'IGTV', 'Shopping Tags'],
      color: 'from-pink-500 to-purple-500'
    },
    {
      name: 'Facebook',
      description: 'Community building & advertising',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png',
      specialties: ['Page Management', 'Community Groups', 'Facebook Ads', 'Events'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'LinkedIn',
      description: 'Professional networking & B2B',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
      specialties: ['Company Pages', 'Thought Leadership', 'Employee Advocacy', 'Lead Generation'],
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'TikTok',
      description: 'Viral content & Gen Z engagement',
      logo: 'https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg',
      specialties: ['Short-form Videos', 'Trend Creation', 'Hashtag Challenges', 'Creator Partnerships'],
      color: 'from-black to-pink-500'
    },
    {
      name: 'YouTube',
      description: 'Long-form content & education',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg',
      specialties: ['Channel Management', 'Video Optimization', 'Community Posts', 'YouTube Shorts'],
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'Twitter/X',
      description: 'Real-time engagement & news',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg',
      specialties: ['Tweet Strategy', 'Thread Creation', 'Community Management', 'Trend Participation'],
      color: 'from-blue-400 to-black'
    }
  ]


  const socialProcess = [
    {
      step: '01',
      title: 'Brand Discovery & Audit',
      description: 'Understanding your brand voice, analyzing current presence, and identifying opportunities.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Creating platform-specific strategies, content pillars, and engagement tactics.'
    },
    {
      step: '03',
      title: 'Content Creation & Scheduling',
      description: 'Designing posts, writing copy, and scheduling content across all platforms.'
    },
    {
      step: '04',
      title: 'Engage & Optimize',
      description: 'Active community management, performance tracking, and continuous optimization.'
    }
  ]


  const whyChooseUs = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Social Media Experts',
      stat: '30+',
      description: 'Certified social media specialists'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Average Follower Growth',
      stat: '150%',
      description: 'Average growth in 6 months'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Brands Managed',
      stat: '200+',
      description: 'Successful social media accounts'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Engagement Rate',
      stat: '8.5%',
      description: 'Average engagement across platforms'
    }
  ]


  const testimonials = [
    {
      name: 'Emma Thompson',
      company: 'Boutique Fashion Brand',
      role: 'Brand Manager',
      content: 'Creative Wire transformed our Instagram presence. Our follower count tripled and sales from social media increased by 400% in just 6 months.',
      rating: 5,
      avatar: '👩‍💼',
      results: '400% sales increase',
      platform: 'Instagram'
    },
    {
      name: 'Marcus Johnson',
      company: 'B2B Tech Company',
      role: 'Marketing Director',
      content: 'Their LinkedIn strategy generated more qualified leads than our entire sales team. The thought leadership content positioned us as industry experts.',
      rating: 5,
      avatar: '👨‍💻',
      results: '300+ qualified leads',
      platform: 'LinkedIn'
    },
    {
      name: 'Sofia Rodriguez',
      company: 'Local Restaurant',
      role: 'Owner',
      content: 'Amazing results! Our TikTok went viral and brought hundreds of new customers. The team really understands social media trends.',
      rating: 5,
      avatar: '👩‍🍳',
      results: 'Viral TikTok campaign',
      platform: 'TikTok'
    }
  ]


  const pricingPlans = [
    {
      name: 'Starter Social',
      price: '$1,200',
      period: '/month',
      description: 'Perfect for small businesses starting their social media journey',
      features: [
        '2-3 social media platforms',
        '20 posts per month',
        'Basic graphic design',
        'Monthly analytics reports',
        'Community management',
        'Content calendar'
      ],
      popular: false,
      platforms: 'Instagram + Facebook'
    },
    {
      name: 'Growth Social',
      price: '$2,200',
      period: '/month',
      description: 'Comprehensive social media management for growing brands',
      features: [
        '4-5 social media platforms',
        '40 posts per month',
        'Advanced graphic design',
        'Bi-weekly analytics reports',
        'Active community management',
        'Influencer outreach (5/month)',
        'Stories & Reels creation'
      ],
      popular: true,
      platforms: 'All major platforms'
    },
    {
      name: 'Enterprise Social',
      price: '$4,500+',
      period: '/month',
      description: 'Full-scale social media management for large brands',
      features: [
        'All social media platforms',
        '80+ posts per month',
        'Premium design & video content',
        'Weekly detailed reports',
        '24/7 community management',
        'Influencer campaign management',
        'Social media advertising',
        'Dedicated account manager',
        'Crisis management support'
      ],
      popular: false,
      platforms: 'All platforms + emerging'
    }
  ]


  return (
    <div className="min-h-screen bg-white">
      
      {/* Header */}
      <Header currentPage="social-media-management" />


      {/* Hero Section */}
      <section className="pt-16 py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <div className="bg-purple-100 border border-purple-200 rounded-full px-4 py-2">
                <span className="text-purple-800 font-semibold text-sm flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Social Media Specialists
                </span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight">
              Build Communities with 
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Social Media Management
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Grow your brand, engage your audience, and drive sales with expertly managed social media presence across all major platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact" className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform flex items-center gap-2 shadow-lg">
                Get Free Social Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <div className="flex items-center space-x-2 text-gray-600">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold">4.9/5 from 200+ brands</span>
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


      {/* Social Media Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Social Media <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete social media management solutions to build your brand presence and drive engagement.
            </p>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialServices.map((service, index) => (
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


      {/* Social Media Platforms */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Social Media <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Platforms</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We manage your presence across all major social media platforms with platform-specific strategies.
            </p>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-yellow-300 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  {/* Logo Image */}
                  <div className="h-16 flex items-center justify-center mb-4">
                    <Image 
                      src={platform.logo} 
                      alt={platform.name}
                      width={64}
                      height={64}
                      className="object-contain max-h-16"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{platform.name}</h3>
                  <p className="text-gray-600 text-sm">{platform.description}</p>
                </div>
                
                <div className="space-y-2">
                  {platform.specialties.map((specialty, idx) => (
                    <div key={idx} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm text-center">
                      {specialty}
                    </div>
                  ))}
                </div>
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
              Social Media <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect social media management package for your brand and budget.
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
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-black">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                  <div className="text-sm text-gray-500 mt-1">{plan.platforms}</div>
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


      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Transform</span> Your Social Presence?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free social media audit and discover how we can grow your brand across all platforms.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform inline-flex items-center justify-center gap-2">
              Get Free Social Audit
              <Heart className="w-5 h-5" />
            </Link>
          </div>
          
          <p className="text-gray-400 mt-6">
            Free audit • Portfolio showcase • Strategy consultation
          </p>
        </div>
      </section>


      {/* Footer Component */}
      <Footer />
    </div>
  )
}
