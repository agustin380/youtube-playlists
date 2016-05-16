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
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"],
      }
    ],
  },
};
