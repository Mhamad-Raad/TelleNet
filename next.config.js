/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    formats: ['image/webp', 'image/avif'],
    unoptimized: true,
  },
};

module.exports = nextConfig;
