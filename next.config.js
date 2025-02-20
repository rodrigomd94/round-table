/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript:{
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['gerowallet.io']
  },
  webpack(config, { dev }) {
    config.experiments = {
      syncWebAssembly: true,
      layers: true
    }
    return config
  }
}

module.exports = nextConfig
