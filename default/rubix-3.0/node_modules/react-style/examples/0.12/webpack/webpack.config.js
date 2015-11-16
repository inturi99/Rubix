'use strict';

var ReactStylePlugin = require('react-style-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpack = require('webpack');

module.exports = {
  devtool: 'sourcemap',
  entry: './index.js',
  output: {
    filename: "bundle.js",
    path: __dirname + "/build"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          ReactStylePlugin.loader(),
          'jsx-loader?harmony'
        ]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader')
      },
      {
        test: /\.(otf|eot|svg|ttf|woff)/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  plugins: [
    new ReactStylePlugin('bundle.css'),
    new webpack.DefinePlugin({
      'process.env': {
        // To enable production mode:
         NODE_ENV: JSON.stringify('production')
      }
    })
  ]
};
