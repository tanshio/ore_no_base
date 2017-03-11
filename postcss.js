
module.exports = {
  'use': [
    'postcss-import',
    'postcss-nesting',
    'autoprefixer',
    'postcss-flexbugs-fixes',
    'postcss-custom-properties',
    'postcss-custom-media',
    'postcss-font-magician',
    'css-mqpacker',
    'postcss-reporter',
    'postcss-browser-reporter',
    'cssnano',
  ],
  'postcss-import': {
    onImport: function(sources) {
      global.watchCSS(sources, this.from);
    },
  },
  'postcss-custom-properties': {
    preserve: false,
  },
  'postcss-font-magician': {
    foundries: ['custom', 'hosted', 'google'],
  },
};
