'use strict';

const webpack = require('webpack');
const path = require('path');

const config = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8080',
    'webpack/hot/dev-server',
    'bootstrap-loader',
    './src',
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extension: ['', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
        },
      },
      {
        test: /\.html$/,
        loader: 'raw',
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'autoprefixer?browsers=last 3 versions',
          'sass?outputStyle=expanded',
        ],
      },
      {
        test: /\.(woff2?|ttf|eot|svg)$/,
        loader: 'url?limit=10000',
      },
      {
        test: /bootstrap-sass\/assets\/javascript?\//,
        loader: 'imports?jQuery=jquery',
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
    }),
  ],
  devServer: {
    hot: true,
    proxy: {
      '*': 'http://localhost:3000',
    },
  },
};

module.exports = config;
