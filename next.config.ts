import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: false,
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'chargerinstallerlist.com' }],
        destination: 'https://www.chargerinstallerlist.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
