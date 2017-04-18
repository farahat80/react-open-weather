const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/scripts/main.js'
  },
  output: {
    filename: './dist/scripts/[name].js'
  },
  devtool: (process.env.NODE_ENV !== 'production' ? 'source-map' : false),
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['react', 'latest']
      }
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("css-loader!autoprefixer-loader")
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css!sass')
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('css!less')
    }, {
      test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
      loader: 'url?limit=100000@name=[name][ext]'
    }]
  },
  plugins: [
    new ExtractTextPlugin('dist/styles/main.css', {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
};