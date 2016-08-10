module.exports = {
  entry: './demo/demo.js',
  output: {
    path: __dirname,
    filename: 'build/bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, exclude: /node_modules/, loader: 'style!css'},
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel!eslint'}
    ]
  }
};
