/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the deprecated experimental.appDir option
  // Next.js 15+ has this enabled by default
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
}

module.exports = nextConfig
