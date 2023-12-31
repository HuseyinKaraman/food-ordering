/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    domains: ["res.cloudinary.com"]
  },
  experimental: {
    appDir: false,
  },
}

module.exports = nextConfig
