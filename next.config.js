const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const deps = require('./package.json').dependencies;

module.exports = withBundleAnalyzer({
  output: 'standalone',
  // Cache all fonts
  async headers() {
    return [
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ['image/avif', 'image/webp'],
    domains: ['services.electrolux-medialibrary.com', 'electrolux.it'],
  },
  reactStrictMode: false,
  trailingSlash: true,
  experimental: {
    optimizeCss: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader', options: { injectType: 'styleTag' } },
          'css-loader',
        ],
      },
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
    dirs: ['pages', 'components', 'services'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  webpack(config, options) {
    const { isServer } = options;
    // config.cache = true;
    const location = isServer ? 'ssr' : 'chunks';
    config.plugins.push(
      new NextFederationPlugin({
        name: 'SHELL',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Footer': './components/Footer',
          './Header': './components/Header',
          './Store': './services/Store',
        },
        remotes: {
          SHELL: `SHELL@${process.env.APP_SHELL}/_next/static/${location}/remoteEntry.js`,
          PDP: `PDP@https://com-3cbc6.web.app/static/${location}/remoteEntry.js`,
          BASKET: `BASKET@${process.env.BASKET_URL}/_next/static/${location}/remoteEntry.js`,
        },
        shared: ['react', 'react-dom'],
        // extraOptions: {
        //   automaticAsyncBoundary: true,
        // },
      })
    );
    return config;
  },
});
