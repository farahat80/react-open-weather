module.exports = {
  entry: {
    main: './src/js/components/ReactWeather.js',
  },
  output: {
    path: 'lib/',
    filename: '/js/ReactWeather.js',
    libraryTarget: 'umd',
    library: 'ReactWeather',
    umdNamedDefine: true,
  },
  devtool: false,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'latest'],
        },
      },
    ],
  },
  externals: [
    {
      moment: {
        root: 'moment',
        commonjs2: 'moment',
        commonjs: 'moment',
        amd: 'moment',
      },
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
  ],
  plugins: [],
};
