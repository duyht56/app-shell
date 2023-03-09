const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ["image/webp"],
    domains: ["services.electrolux-medialibrary.com"],
  },
  experimental: {
    images: {
      allowFutureImage: true,
      domains: ["https://services.electrolux-medialibrary.com"],
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  webpack(config, options) {
    const { isServer } = options;
    const location = isServer ? "ssr" : "chunks";
    config.plugins.push(
      new NextFederationPlugin({
        name: "landing",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Footer": "./components/Footer/Footer.js",
          "./Header": "./components/Header/Header.js",
          "./topNav": "./components/Navigation/TopNav.js",
          "./mainNav": "./components/Navigation/MainNav.js",
        },
        remotes: {
          PDP: `PDP@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
          Support:
            "Support@https://gray-hill-0a779f603.1.azurestaticapps.net/_next/static/chunks/remoteEntry.js",
        },
        shared: {},
        extraOptions: {
          exposePages: true,
        },
      })
    );

    return config;
  },
});
