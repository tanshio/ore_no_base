const sizeOf = require('image-size')

const dist = './dist/'
const imageRoot = 'images/'

const getRelativePath = (relative, filename) => {
  let relativePath = ''
  if (relative) {
    var dir = filename.replace('app/pug/files/', '').replace('.pug', '').split('/').length
    console.log(dir)
    for (var i = 0; i < dir; ++i) {
      if (i % 2 === 0 || i === 0) {
        relativePath = './' + relativePath
      } else {
        relativePath = '.' + relativePath
      }
    }
  } else {
    relativePath = '/'
  }
  return relativePath
}

module.exports = {
  filters: {
    'image': function (block, options) {
      let imagePath = options.url.match(/\/images\/(.*)$/) ? options.url.match(/\/images\/(.*)$/)[1] : options.url
      const url = imageRoot + imagePath
      const dimensions = sizeOf(dist + url)
      const width = options.size ? Math.ceil(dimensions.width / options.size) : dimensions.width
      let relativePath = getRelativePath(options.relative, options.filename)

      let text = `src='${relativePath}${url}'`

      if (options.size) {
        text = `${text} width='${width}'`
      }

      if (options.alt) {
        text = `${text} alt='${options.alt}'`
      }

      return `<img ${text}>`
    },
    'picture': function (block, options) {
      return `
        <picture>
          <source media="(min-width: 768px)" srcset="">
          <source media="(min-width: 384px)" srcset="">
          <img src="" alt="dummy image">
        </picture>
      `
    },
    'srcset': function (block, options) {
      let imagePath = options.url.match(/\/images\/(.*)$/) ? options.url.match(/\/images\/(.*)$/)[1] : options.url
      const url = imageRoot + imagePath
      const dimensions = sizeOf(dist + url)
      const width = options.size ? Math.ceil(dimensions.width / options.size) : dimensions.width
      let relativePath = getRelativePath(options.relative, options.filename)
      console.log(imagePath)
      console.log(relativePath)

      let text = `src='${relativePath}${url}'`

      if (options.size) {
        text = `${text} width='${width}'`
      }

      if (options.alt) {
        text = `${text} alt='${options.alt}'`
      }

      const imageName = url.split('/').pop().split('.')
      const dir = url.replace(imageName.join('.'), '')

      let srcset = []

      for (var i = 0; i < options.x; ++i) {
        if (i === 0) {
          srcset.push(`${relativePath}${dir}${imageName[0]}.${imageName[1]} 1x`)
        } else {
          srcset.push(`${relativePath}${dir}${imageName[0]}@${i + 1}x.${imageName[1]} ${i + 1}x`)
        }
      }

      return `
        <img ${text}
             srcset="${srcset.join(',')}">
      `
    }
  },
  'data': {
    'index': {
      'title': 'title',
      'keyword': 'キーワード',
      'desc': 'top'
    }
  }
}
