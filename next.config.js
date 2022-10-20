/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  rewrites: async () => [{
    source: '/:symbolcode',
    destination: '/api/symbol/:symbolcode',
  }, {
    source: '/',
    destination: '/api/symbol/SFG-UCI---'
  }]
}

module.exports = nextConfig
