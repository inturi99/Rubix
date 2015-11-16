module.exports = {
  entry: './index.js',
  devtool: 'eval',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build',
    publicPath: __dirname + '/build/'
  },
  resolve: {
    alias: {
      'react$': require.resolve('../../../node_modules/react'),
      'react-style$': require.resolve('../../../lib/index')
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'jsx-loader?harmony',
          require.resolve('react-style-syntax')
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
  }
};
