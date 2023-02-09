/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["app.ktern.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
