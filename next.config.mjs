/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/google-route-planner',
  assetPrefix: '/google-route-planner/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
