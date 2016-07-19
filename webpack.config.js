module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/client/assets/js/index.js',
  ],
  output: {
    path: `${__dirname}/public/js`,
    publicPath: '/public/js/',
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel',
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      }, {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
        loader: 'file',
      }, {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
  },
  devServer: {
    contentBase: './public',
    hot: true,
  },
};
