const banner = `
Theme Name: siteName
Theme URI: https://.com/
Author: tanshio
Author URI: https://.com/
Description: Description
Version: 1.0.0
License: GNU General Public License v2 or later
License URI: LICENSE
Text Domain: siteName
Tags:

This theme, like WordPress, is licensed under the GPL.
Use it to make something cool, have fun, and share what you've learned with others.

benyland is based on Underscores http://underscores.me/, (C) 2012-2016 Automattic, Inc.
Underscores is distributed under the terms of the GNU GPL v2 or later.

Normalizing styles have been helped along thanks to the fine work of
Nicolas Gallagher and Jonathan Neal http://necolas.github.io/normalize.css/
`

console.log(process.env.NODE_ENV)
let plugins = [
  require('postcss-import')(),
  require('postcss-nesting')(),
  require('postcss-custom-properties')({
    preserve: false
  }),
  require('postcss-custom-media')(),
  require('postcss-flexbugs-fixes')(),
  require('autoprefixer')(),
  require('postcss-pxtorem')({
    rootValue: 16,
    unitPrecision: 5,
    propList: ['font', 'font-size'],
    selectorBlackList: [],
    replace: true,
    mediaQuery: false,
    minPixelValue: 0
  })
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(require('cssnano')())
  plugins.push(require('postcss-banner')({
    banner: banner,
    important: true
  }))
}

module.exports = {
  plugins: plugins
}
