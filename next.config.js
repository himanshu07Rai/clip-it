/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.google.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
