const path = require('path');

module.exports = {
  entry: {
    main: './src/js/index.js',
  },
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: 'ReactWeather.js',
    libraryTarget: 'umd',
    library: 'ReactWeather',
    umdNamedDefine: true,
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
    ],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
  plugins: [],
};
