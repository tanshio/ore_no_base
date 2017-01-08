
module.exports = {
  "use": [
    "postcss-import",
    "postcss-nesting",
    "autoprefixer",
    "postcss-flexbugs-fixes",
    "postcss-custom-properties",
    "postcss-custom-media",
    "postcss-font-magician",
    "css-mqpacker",
    "postcss-reporter",
    "postcss-browser-reporter",
    "cssnano"
  ],
  "autoprefixer": {
    "browsers": "last 2 versions"
  },
  "postcss-import": {
    onImport: function(sources) {
      global.watchCSS(sources, this.from)
    }
  },
  "postcss-font-magician": {
    foundries: ['custom', 'hosted', 'google']
  }
}
