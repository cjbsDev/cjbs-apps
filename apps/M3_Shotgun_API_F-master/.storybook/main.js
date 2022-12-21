const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    'storybook-css-modules-preset',
    'storybook-zeplin/register',
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          // When using postCSS 8
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      sideEffects: false,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
      exclude: /\.module\.scss$/,
    });
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules.push({
      test: /\.stories\.tsx?$/,
      loaders: [require.resolve('@storybook/source-loader')],
      enforce: 'pre',
    });
    config.module.rules.push({
      test: /\.module\.scss$/,
      sideEffects: false,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
        'sass-loader',
      ],
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      '@src': path.resolve(__dirname, './src'),
      '@public': path.resolve(__dirname, './public'),
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './public/styles'),
    };
    return config;
  },
};
