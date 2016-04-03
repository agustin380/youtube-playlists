module.exports = {
  entry: './src/client/assets/js/index.js',
  output: {
    filename: 'bundle.js',
    path: './public/js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};
