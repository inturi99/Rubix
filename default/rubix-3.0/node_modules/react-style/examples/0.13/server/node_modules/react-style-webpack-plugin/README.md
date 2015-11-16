# React Style Webpack plugin

This package provides plugin for Webpack which extracts static [React Style][]
declarations into a separate CSS bundle.

The usage as simple as adding few lines of configuration into your
`webpack.config.js`:

    var ReactStylePlugin = require('react-style-webpack-plugin');

    module.exports = {
      ...
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: ReactStylePlugin.loader()
          }
        ]
      },
      plugins: [
        new ReactStylePlugin('bundle.css')
      ]
    }

[React Style]: https://github.com/js-next/react-style
