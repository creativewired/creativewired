/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  serverExternalPackages: ['@supabase/supabase-js', '@supabase/auth-js'],
  async rewrites() {
  return [
    {
      source: '/sitemap.xml',
      destination: '/sitemap.xml/route',
    },
  ];
},
}

module.exports = nextConfig
