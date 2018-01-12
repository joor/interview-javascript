const webpack = require('webpack')
const WebpackShellPlugin = require('webpack-shell-plugin')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './src/index.js',
  output: {
    pathinfo: true,
    filename: 'dist/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: require.resolve('babel-loader'),
      }
    ]
  },
  plugins: [
    new WebpackShellPlugin({onBuildEnd: ['nodemon dist/bundle.js --watch src']})
  ]
}
