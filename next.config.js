/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'img.youtube.com' },
    ],
  },
  experimental: {
    turbo: {
      root: __dirname,
    },
  },
}

module.exports = nextConfig
