const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-source-map',
  target: 'node',
  entry: './src',
  output: {
    path: './dist',
    filename: 'wolfui.js',
    library: 'wolfui',
    libraryTarget: 'commonjs2'
  },
  externals: [
    {
      "react": {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react',
        root: 'React'
      }
    }
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract([
          'css-loader',
          'sass-loader'
        ])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'wolfui.css',
      disable: false,
      allChunks: true
    })
  ]
}
