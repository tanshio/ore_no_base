const webpack = require('webpack')
const path = require('path')
const DEBUG = process.argv.includes('--debug')
const ENV = `${process.env.NODE_ENV || (DEBUG ? 'development' : 'production')}`

console.log(`
webpack-start
${ENV}
`)

let pluginsList = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      drop_console: true
    }
  }),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': `"${ENV}"`
    }
  }),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  })
]

if (ENV === 'development') {
  pluginsList.splice(0, 1)
}

export default {
  entry: './app/js/main.js',
  output: {
    filename: 'main.js',
    path: __dirname + '/dist/js'
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "src"),
      "node_modules"
    ],
    // alias: {
    //   "@utils": "@tanshio/ore-js-utils/src"
    // }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!@tanshio)/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: pluginsList
}
