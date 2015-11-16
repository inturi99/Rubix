var webpack = require('webpack');
var ReactStylePlugin = require('react-style-webpack-plugin');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {

  entry: {
    app2: "./index.js",
    app: "./index2.js"
  },

  output: {
    filename: "assets/[name].js",
    publicPath: "/"
  },

  resolve: {
    alias: {
      'react$': require.resolve('../../../node_modules/react'),
      'react-style$': require.resolve('../../../lib/index')
    }
  },

  module: {
    loaders: [
      { test: /\.js$/,
        loaders: [
          ReactStylePlugin.loader(),
          'jsx-loader?harmony'
        ]
      }
    ]
  },

  plugins: [
    new ReactStylePlugin('app', 'assets/app.css'),
    new ReactStylePlugin('app2', 'assets/app2.css'),
    new CommonsChunkPlugin("assets/commons.chunk.js")
  ]

};
