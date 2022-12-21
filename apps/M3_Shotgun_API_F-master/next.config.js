/** @type {import('next').NextConfig} */
const {i18n} = require('./next-i18next.config');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  compress: true,
  i18n,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // webpack(config, {webpack}){
  //   const prod = process.env.NODE_ENV === 'production';
  //   const plugins = [...config.plugins];
  //   return{
  //     ...config,
  //     mode: prod ? 'producton' : 'development',
  //     devtool: prod ? 'hidden-source-map' : 'eval',
  //     plugins,
  //   };
  // },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    const prod = process.env.NODE_ENV === 'production';
    const plugins = [...config.plugins];
    // return config;
    return {
      ...config,
      mode: prod ? 'production' : 'development',
      devtool: prod ? 'hidden-source-map' : 'eval',
      plugins,
    };
  },
  env: {},
});
