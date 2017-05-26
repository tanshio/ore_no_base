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

const getImagePath = (file) => {
  const imagePath = file.match(/\/images\/(.*)$/) ? file.match(/\/images\/(.*)$/)[1] : file
  return imageRoot + imagePath
}

const createSet = (img, x) => {
  const imageName = img.url.split('/').pop().split('.')
  const dir = img.url.replace(imageName.join('.'), '')

  let srcset = []

  for (var i = 0; i < x; ++i) {
    if (i === 0) {
      srcset.push(`${img.path}${dir}${imageName[0]}.${imageName[1]} 1x`)
    } else {
      srcset.push(`${img.path}${dir}${imageName[0]}@${i + 1}x.${imageName[1]} ${i + 1}x`)
    }
  }

  return srcset
}

class Img {
  constructor (options) {
    this.url = getImagePath(options.src)
    this.dimensions = sizeOf(dist + this.url)
    this.width = options.d ? Math.ceil(this.dimensions.width / options.d) : this.dimensions.width
    this.path = getRelativePath(options.relative, options.filename)
  }
}

const createDataObj = (obj) => {
  let dataArr = []
  for (let data in obj) {
    if (/data/.test(data)) {
      let dataset = {}
      dataset[data] = obj[data]
      dataArr.push(dataset)
    }
  }
  return dataArr
}

const createImg = (options) => {
  const img = new Img(options)

  let data = createDataObj(options)
  let dataset
  let src = `src='${img.path}${img.url}'`

  if (options.d) {
    src = `${src} width='${img.width}'`
  }

  if (options.alt) {
    src = `${src} alt='${options.alt}'`
  }

  if (data.length > 0) {
    dataset = data.map((e) => {
      let key = Object.keys(e)[0]
      let value = e[key] ? `="${e[key]}"` : ''
      return `${key}${value}`
    }).join(' ')
    src = `${src} ${dataset}`
  }

  return `<img ${src}>`
}

const createSrcSet = (options) => {
  const img = new Img(options)

  let data = createDataObj(options)
  let dataset
  let src = `src="${img.path}${img.url}"`

  if (options.d) {
    src = `${src} width="${img.width}"`
  }

  if (options.alt) {
    src = `${src} alt="${options.alt}"`
  }

  if (data.length > 0) {
    dataset = data.map((e) => {
      let key = Object.keys(e)[0]
      let value = e[key] ? `="${e[key]}"` : ''
      return `${key}${value}`
    }).join(' ')
    src = `${src} ${dataset}`
  }

  let srcset = createSet(img, options.x)

  return `
      <img ${src}
           srcset="${srcset.join(',')}">
    `
}

const createPicture = () => {

}

module.exports = {
  'createPicture': createPicture,
  'createDataObj': createDataObj,
  'createImg': createImg,
  'createSrcSet': createSrcSet,
  'data': {
    'index': {
      'title': 'タイトル',
      'keyword': 'キーワード',
      'desc': '説明文'
    },
    'test/index': {
      'title': 'asddgg',
      'keyword': 'キーワード',
      'desc': '説明文'
    },
    'test/aaa': {
      'title': 'asddgdhffhjg',
      'keyword': 'キーワード',
      'desc': '説明文'
    }
  }
}
