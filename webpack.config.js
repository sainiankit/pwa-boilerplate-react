/**
 * @name webpack.config.js
 * @fileoverview Webpack's Configuration file.
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WebpackPwaManifest = require('webpack-pwa-manifest');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const fs = require('fs');

module.exports = {
  entry: './src/index.js',
  devtool: 'sourcemaps',
  devServer: {
    contentBase: './dist',
    port: 6969,
    historyApiFallback: true,
    clientLogLevel: 'error',
    compress: true,
    // host: '192.168.0.106',
    http2: true,
    https: {
      key: fs.readFileSync('/Users/sainiankit/Dev/steer/steer-fe/src/localhost-key.pem'),
      cert: fs.readFileSync('/Users/sainiankit/Dev/steer/steer-fe/src/localhost-cert.pem'),
      ca: fs.readFileSync('/Users/sainiankit/Dev/steer/steer-fe/src//rootCA.pem')
    }
  },
  output: {
    // filename: 'main.js',
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.md$/i,
        use: 'raw-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.(css)$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          }
        ],
      },
      {
        test: /\.(scss)$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(less)$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [

    // Generates index.html
    new HtmlWebpackPlugin({
      hash: false,
      template: 'src/index.html',
      filename: 'index.html',
    }),

    // Generates manifest.json
    new WebpackPwaManifest({
      name: 'Steer',
      short_name: 'Steer',
      description: 'Get it!',
      start_url: '/',
      background_color: '#ffffff',
      theme_color: "#31B16B",
      display: "standalone",
      orientation: "portrait",
      crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve('./src/static/app_icons/android-chrome-192x192.png'),
          sizes: '192x192'
        },
        {
          src: path.resolve('./src/static/app_icons/android-chrome-384x384.png'),
          size: '384x384'
        }
      ]
    }),

    // Generates service worker file
    new ServiceWorkerWebpackPlugin({
      entry: path.join(__dirname, 'src/serviceworker.js'),
    }),

    // Generates stats to analyse bundle size
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      openAnalyzer: false,
      generateStatsFile: true
    })
  ],
};
