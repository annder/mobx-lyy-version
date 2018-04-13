const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  entry: "./index.ts",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /.ts$/,
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'bower_components')
      ],
      use: 'ts-loader'
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.ts']
  },
  devtool: 'source-map',
  devServer: {
    publicPath: path.join('/dist/')
  },
  plugins: [new UglifyJsPlugin({
    extractComments: true
  })]
};