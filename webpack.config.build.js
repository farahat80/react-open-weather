const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/js/ReactWeather.js'
  },
  output: {
    path: 'lib/',
    filename: '/js/index.js',
    libraryTarget: 'umd',
  },
  devtool: false,
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['react', 'latest']
      }
    }, 
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("css-loader!autoprefixer-loader"),
      
    }, 
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css!sass')
    }, {
      test: /\.(ttf|eot|woff|woff2)$/,
      loader: 'url?limit=100000@name=[name][ext]',
    },{ test: /\.svg$/, loader: 'ignore-loader'}
    ]
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      },
      jquery: {amd: 'jquery', root: '$', commonjs: 'jquery', commonjs2: 'jquery'}
    }
  ],
  plugins: [
    new ExtractTextPlugin('css/main.css', {
      allChunks: true
    }),
  ]
};