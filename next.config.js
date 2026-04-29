/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // For static export compatibility
  },
  // Output as static HTML for Azure Static Web Apps
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig
