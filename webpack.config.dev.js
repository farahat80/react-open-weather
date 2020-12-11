module.exports = {
  entry: {
    main: './src/js/main.js',
  },
  output: {
    filename: './dist/js/[name].js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [],
};
