import { ArrowRight, Calendar, User, Tag, Search, Filter, Clock, Eye, MessageCircle, Lightbulb } from 'lucide-react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { createClient } from '@/lib/supabase/server'
import { format } from 'date-fns'

export const metadata = {
  title: 'Digital Marketing Blog - Expert Tips & Insights | Creative Wired',
  description: 'Stay updated with the latest digital marketing trends, SEO tips, social media strategies, and expert insights from Creative Wired.',
}

export default async function BlogPage() {
  const supabase = await createClient()

  // Fetch all published posts
  const { data: posts, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  // Get featured post (most recent)
  const featuredPost = posts && posts.length > 0 ? posts[0] : null

  // Get remaining posts
  const blogPosts = posts && posts.length > 1 ? posts.slice(1) : []

  // Get all unique categories
  const allCategories = posts 
    ? Array.from(new Set(posts.map(post => post.category).filter(Boolean)))
    : []

  const categories = [
    { name: 'All Posts', count: posts?.length || 0, active: true },
    ...allCategories.map(cat => ({
      name: cat,
      count: posts?.filter(p => p.category === cat).length || 0,
      active: false
    }))
  ]

  // Get all unique tags
  const allTags = posts
    ? Array.from(new Set(posts.flatMap(post => post.tags || []))).slice(0, 12)
    : []

  return (
    <div className="min-h-screen bg-white">
      
      {/* Header */}
      <Header currentPage="blog" />

      {/* Hero Section */}
      <section className="pt-16 py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <div className="bg-blue-100 border border-blue-200 rounded-full px-4 py-2">
                <span className="text-blue-800 font-semibold text-sm flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  Digital Marketing Insights
                </span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight">
              Stay Ahead with 
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Expert Insights
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover the latest digital marketing strategies, trends, and expert tips to grow your business online.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>
              
              <Link href="/contact" className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-8 py-3 rounded-xl hover:scale-105 transition-transform">
                Subscribe to Newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              
              {/* Featured Post */}
              {featuredPost && (
                <div className="mb-16">
                  <h2 className="text-3xl font-bold text-black mb-8">Featured Article</h2>
                  <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-yellow-300 hover:shadow-xl transition-all duration-300 group">
                    {featuredPost.featured_image && (
                      <div className="h-64 overflow-hidden">
                        <img 
                          src={featuredPost.featured_image} 
                          alt={featuredPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    
                    <div className="p-8">
                      <div className="flex items-center space-x-4 mb-4">
                        {featuredPost.category && (
                          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                            {featuredPost.category}
                          </span>
                        )}
                        <div className="flex items-center text-gray-500 text-sm space-x-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{format(new Date(featuredPost.published_at || featuredPost.created_at), 'MMM d, yyyy')}</span>
                          </div>
                          {featuredPost.reading_time && (
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{featuredPost.reading_time} min read</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 group-hover:text-yellow-600 transition-colors">
                        <Link href={`/blog/${featuredPost.slug}`}>
                          {featuredPost.title}
                        </Link>
                      </h3>
                      
                      {featuredPost.excerpt && (
                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                          {featuredPost.excerpt}
                        </p>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          {featuredPost.author_name && (
                            <div className="flex items-center space-x-2">
                              <User className="w-4 h-4 text-gray-500" />
                              <span className="text-gray-700 font-medium">{featuredPost.author_name}</span>
                            </div>
                          )}
                        </div>
                        
                        <Link
                          href={`/blog/${featuredPost.slug}`}
                          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-6 py-2 rounded-lg hover:scale-105 transition-transform inline-flex items-center gap-2"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Recent Posts */}
              {blogPosts.length > 0 ? (
                <div>
                  <h2 className="text-3xl font-bold text-black mb-8">Latest Articles</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {blogPosts.map((post) => (
                      <div key={post.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-yellow-300 hover:shadow-xl transition-all duration-300 group">
                        {post.featured_image && (
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={post.featured_image} 
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        
                        <div className="p-6">
                          <div className="flex items-center space-x-3 mb-3">
                            {post.category && (
                              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                                {post.category}
                              </span>
                            )}
                            <div className="flex items-center text-gray-500 text-xs space-x-2">
                              <Calendar className="w-3 h-3" />
                              <span>{format(new Date(post.published_at || post.created_at), 'MMM d, yyyy')}</span>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-black mb-3 group-hover:text-yellow-600 transition-colors line-clamp-2">
                            <Link href={`/blog/${post.slug}`}>
                              {post.title}
                            </Link>
                          </h3>
                          
                          {post.excerpt && (
                            <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                              {post.excerpt}
                            </p>
                          )}
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3 text-xs text-gray-500">
                              {post.author_name && (
                                <div className="flex items-center space-x-1">
                                  <User className="w-3 h-3" />
                                  <span>{post.author_name}</span>
                                </div>
                              )}
                              {post.reading_time && (
                                <div className="flex items-center space-x-1">
                                  <Clock className="w-3 h-3" />
                                  <span>{post.reading_time} min</span>
                                </div>
                              )}
                            </div>
                            
                            <Link
                              href={`/blog/${post.slug}`}
                              className="text-yellow-600 font-semibold text-sm hover:text-yellow-700 inline-flex items-center gap-1"
                            >
                              Read More
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-gray-500 text-lg">No blog posts found. Check back soon!</p>
                  
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              
              {/* Categories */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors ${
                        category.active
                          ? 'bg-yellow-100 text-yellow-800 font-semibold'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-sm">({category.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              {allTags.length > 0 && (
                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                    <Tag className="w-5 h-5" />
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map((tag, index) => (
                      <button
                        key={index}
                        className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-yellow-100 hover:text-yellow-800 transition-colors border"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-6 text-black">
                <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                <p className="mb-4 text-sm">
                  Get the latest digital marketing insights delivered to your inbox weekly.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 rounded-lg text-gray-700 text-sm"
                  />
                  <button className="w-full bg-black text-white font-semibold py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}
