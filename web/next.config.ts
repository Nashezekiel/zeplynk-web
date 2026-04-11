import type { NextConfig } from "next";
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Turbopack config (silences webpack warning)
  turbopack: {},
  
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
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Experimental features for performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', '@radix-ui/react-*'],
    webpackBuildWorker: true,
  },
  
  // Bundle optimization
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          radix: {
            test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
            name: 'radix',
            chunks: 'all',
          },
          framer: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: 'framer',
            chunks: 'all',
          },
        },
      };
    }
    return config;
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

module.exports = withBundleAnalyzer(nextConfig);
