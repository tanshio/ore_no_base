const webpack = require('webpack');

const DEBUG = process.argv.includes('--debug');
const ENV = `${process.env.NODE_ENV || (DEBUG ? 'development' : 'production')}`
console.log(`
webpack-start
${ENV}
`)

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
  },
  plugins: [
      new webpack.DefinePlugin({
          'process.env':{
              'NODE_ENV': `"${ENV}"`
          }
      })
  ]
}
