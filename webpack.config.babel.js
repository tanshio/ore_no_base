export default {
  entry: './app/js/main.js',
  output: {
    filename: 'main.js',
    path: __dirname + '/dist'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}
