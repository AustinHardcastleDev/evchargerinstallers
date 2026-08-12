import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: false,
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'evchargerinstallerlist.com' }],
        destination: 'https://www.evchargerinstallerlist.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
