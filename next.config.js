/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  eslint: {
    // for eslint-plugin-react-compiler
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
