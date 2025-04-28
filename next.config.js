/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Disable strict mode temporarily for faster development
  typescript: {
    // Disable type checking during development for faster builds
    // ⚠️ Warning: Only do this during development!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Disable ESLint during development for faster builds
    // ⚠️ Warning: Only do this during development!
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 