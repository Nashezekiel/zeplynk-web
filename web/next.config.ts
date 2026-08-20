import type { NextConfig } from "next";
import createBundleAnalyzer from "@next/bundle-analyzer";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Keep Turbopack scoped to this Next app when parent folders contain lockfiles.
  turbopack: {
    root: projectRoot,
  },
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Experimental features for performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', '@radix-ui/react-*'],
  },

  // Redirects for removed pages — preserves link equity for any
  // existing backlinks/bookmarks instead of 404ing.
  async redirects() {
    return [
      {
        source: '/web',
        destination: '/solutions/web-engineering',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/solutions',
        permanent: true,
      },
    ];
  },

  // Headers for caching
  async headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, must-revalidate',
          },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
