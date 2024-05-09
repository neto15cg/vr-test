const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { dependencies } = require('./package.json');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    port: 3001,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'Header',
      filename: 'moduleEntry1.js',
      exposes: {
        './root': './src/root',
      },
      shared: {
        ...dependencies,
        'react-context-slices': {},
        react: {
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        },
        'styled-components': {
          singleton: true,
        },
        shared_state: {
          requiredVersion: require('../shared_state/package.json').version,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },
  devServer: {
    historyApiFallback: true,
    port: 3001,
    host: '0.0.0.0',
    compress: true,
    hot: true,
    static: './',
  },
  target: 'web',
};
