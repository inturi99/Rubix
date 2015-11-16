var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './index.js'
  ],
  output: {
    path: path.join(__dirname),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/,
        loaders: [
          'react-hot',
          'jsx?harmony'
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(otf|eot|svg|ttf|woff)/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
