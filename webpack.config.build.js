const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: './src/js/components/ReactWeather.js'
  },
  output: {
    path: 'lib/',
    filename: '/js/ReactWeather.js',
    libraryTarget: 'umd',
    library: 'ReactWeather',
    umdNamedDefine: true
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
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('css-loader!autoprefixer-loader')
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css!sass')
    }, {
      test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/,
      loader: 'url?limit=10000'
    }, {
      test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/,
      loader: 'file'
    }]
  },
  externals: [{
    moment: {
      root: 'moment',
      commonjs2: 'moment',
      commonjs: 'moment',
      amd: 'moment'
    },
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }],
  plugins: [
    new ExtractTextPlugin('css/ReactWeather.css', {
      allChunks: true
    })
  ]
};
