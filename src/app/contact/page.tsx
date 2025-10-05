import { ArrowRight, Phone, Mail, MapPin, Clock, Send, MessageSquare, Calendar, Award, CheckCircle, Globe, Headphones } from 'lucide-react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Contact Us - Get In Touch | Creative Wired',
  description: 'Contact Creative Wired for digital marketing services. Phone, email, live chat support available. Free consultation and 24/7 customer support.',
}

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Phone Support',
      description: 'Speak with our team',
      contact: '+91 8129191617',
      availability: 'Mon-Fri, 9AM-8PM IST',
      action: 'Call Now',
      url: 'tel:+918129191617'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Support',
      description: 'Get detailed responses',
      contact: 'connect@creativewired.com',
      availability: '24/7 - Response within 2 hours',
      action: 'Send Email',
      url: 'mailto: connect@creativewired.com'
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Live Chat',
      description: 'Instant messaging support',
      contact: 'Available on our Whatsapp',
      availability: 'Mon-Fri, 8AM-8PM EST',
      action: 'Start Chat',
      url: 'https://wa.me/+918129191617'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Schedule Meeting',
      description: 'Book a consultation call',
      contact: 'Google Meet',
      availability: 'Flexible scheduling available',
      action: 'Book Meeting',
      url: 'https://calendly.com/creativewiredagency/30min'
    }
  ]

  const offices = [
    {
      city: 'Thrissur',
      address: 'Coming Soon',
      zipcode: 'Thrissur, Kerala',
      phone: '+91 8129191617',
      email: 'connect@creativewired.com',
      timezone: 'IST',
      isPrimary: false
    },
    {
      city: 'Ernakulam',
      address: 'XVI 195, 1st Floor, Ernakulam',
      zipcode: 'Kerala, India - 682508',
      phone: '+91 8129191617',
      email: 'connect@creativewired.com',
      timezone: 'IST',
      isPrimary: true
    },
    {
      city: 'Kozhikode',
      address: 'Coming Soon',
      zipcode: 'Kozhikode, Kerala',
      phone: '+91 8129191617',
      email: 'connect@creativewired.com',
      timezone: 'IST',
      isPrimary: false
    }
  ]

  const faqs = [
    {
      question: 'How quickly can you start working on my project?',
      answer: 'We can typically begin new projects within 1-2 weeks of contract signing, depending on the scope and our current workload.'
    },
    {
      question: 'Do you work with small businesses or just large companies?',
      answer: 'We work with businesses of all sizes, from startups to Fortune 500 companies. Our strategies are tailored to your specific needs and budget.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Our pricing varies based on the services needed and project scope. We offer both project-based and monthly retainer options.'
    },
    {
      question: 'Do you provide reports on campaign performance?',
      answer: 'Yes, we provide detailed monthly reports and have a client dashboard where you can track performance in real-time.'
    },
    {
      question: 'Can you help improve our existing marketing efforts?',
      answer: 'Absolutely! We can audit your current marketing strategy and provide recommendations for improvement and optimization.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      
      {/* Header Component */}
      <Header currentPage="contact" />

      {/* Hero Section */}
      <section className="pt-16 py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
              Get In <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your digital presence? Let's discuss your project and create something amazing together.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center space-x-2 bg-white border border-yellow-200 rounded-full px-4 py-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2 bg-white border border-yellow-200 rounded-full px-4 py-2">
                <Award className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-medium">Expert Team</span>
              </div>
              <div className="flex items-center space-x-2 bg-white border border-yellow-200 rounded-full px-4 py-2">
                <Headphones className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Multiple Ways to <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your preferred method of communication. We're here to help you succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:border-yellow-300 hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-black">{method.icon}</div>
                </div>
                
                <h3 className="text-xl font-bold text-black mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <p className="text-black font-semibold mb-2">{method.contact}</p>
                <p className="text-gray-500 text-sm mb-6">{method.availability}</p>
                
                <Link href={method.url}>
  <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-6 py-3 rounded-lg hover:scale-105 transition-transform w-full">
                  {method.action}
                </button>
</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-black mb-4">Start Your Project</h3>
                <p className="text-gray-600">
                  Tell us about your project and we'll get back to you within 24 hours with a custom proposal.
                </p>
              </div>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">First Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Last Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Company Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Budget Range</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors">
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-plus">$50,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Services Interested In</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'SEO Optimization',
                      'Web Development',
                      'Paid Advertising',
                      'Social Media',
                      'Analytics & Reporting',
                      'Conversion Optimization'
                    ].map((service, index) => (
                      <label key={index} className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300 text-yellow-600 focus:ring-yellow-400" />
                        <span className="text-sm text-gray-700">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Project Timeline</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors">
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP - Urgent</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-plus">6+ months</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Project Details *</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none transition-colors"
                    placeholder="Tell us about your project goals, current challenges, and what you hope to achieve..."
                  ></textarea>
                </div>

                <div className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1 rounded border-gray-300 text-yellow-600 focus:ring-yellow-400" />
                  <label className="text-sm text-gray-600">
                    I agree to receive communications from Creative Wired and understand that I can opt out at any time.
                  </label>
                </div>

                <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
                  Send Message
                  <Send className="w-5 h-5" />
                </button>

                <p className="text-center text-sm text-gray-500">
                  We typically respond within 2-4 hours during business hours.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-black mb-6">Let's Work Together</h3>
                <p className="text-lg text-gray-600 mb-8">
                  We're excited to learn about your business and help you achieve your digital marketing goals. 
                  Our team of experts is ready to create a custom strategy that drives real results.
                </p>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-black mb-6">Why Choose Creative Wired?</h4>
                <div className="space-y-4">
                  {[
                    { icon: <Award className="w-6 h-6" />, text: 'Award-winning digital marketing agency' },
                    { icon: <CheckCircle className="w-6 h-6" />, text: '99% client satisfaction rate' },
                    { icon: <Globe className="w-6 h-6" />, text: 'Serving clients in 15+ countries' },
                    { icon: <Headphones className="w-6 h-6" />, text: 'Dedicated account management' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="text-yellow-600">{item.icon}</div>
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-8 h-8 text-green-500" />
                  <div>
                    <h4 className="text-lg font-semibold text-black">Quick Response Time</h4>
                    <p className="text-gray-600">We value your time</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-600 mb-1">2 hrs</div>
                    <div className="text-sm text-gray-600">Email Response</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-600 mb-1">24 hrs</div>
                    <div className="text-sm text-gray-600">Proposal Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Locations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With offices across the globe, we're always close by to serve you better.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className={`bg-white border-2 rounded-2xl p-8 text-center transition-all duration-300 ${
                office.isPrimary 
                  ? 'border-yellow-300 shadow-xl' 
                  : 'border-gray-200 hover:border-yellow-300 hover:shadow-xl'
              }`}>
                {office.isPrimary && (
                  <div className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    HEADQUARTERS
                  </div>
                )}
                
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-black" />
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-4">{office.city}</h3>
                <div className="space-y-3 text-gray-600">
                  <p>{office.address}</p>
                  <p>{office.zipcode}</p>
                  <p className="font-semibold text-black">{office.phone}</p>
                  <p className="text-yellow-600">{office.email}</p>
                  <p className="text-sm bg-gray-50 rounded-lg px-3 py-2">
                    Timezone: {office.timezone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about working with Creative Wired.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8">
                <h3 className="text-lg font-semibold text-black mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
  <p className="text-gray-600 mb-4">Can't find the answer you're looking for?</p>
  
  <Link 
    href="#contact"
    className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-8 py-3 rounded-lg hover:scale-105 transition-transform inline-block"
  >
    Contact Our Support Team
  </Link>
</div>
</div>
 </section>

      {/* Footer Component */}
      <Footer />
     
    </div>
  )
}
