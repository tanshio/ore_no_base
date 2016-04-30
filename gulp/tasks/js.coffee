gulp         = require 'gulp'
gulpif       = require 'gulp-if'

$            = require('gulp-load-plugins')()

config       = require '../../config/config.json'

browserSync  = require "browser-Sync"

webpack      = require "gulp-webpack"
webpackConf  = require '../../webpack.config.js'

browserify   = require 'browserify'
source       = require 'vinyl-source-stream'
buffer       = require 'vinyl-buffer'
watchify     = require 'watchify'
handleErrors = require '../util/handleErrors.js'


# webpack
gulp.task "js", ()->
  gulp.src config.js.src+'main.js'
  .pipe $.plumber
    errorHandler: $.notify.onError "<%= error.message %>"
  .pipe webpack webpackConf
  # .pipe(gulp.dest('module.js'))
  # .pipe $.uglify()
  .pipe gulp.dest config.js.dist
  .pipe gulp.dest config.wp.dir+'/www/wordpress/js/'
  .on "end" , browserSync.reload


# browserify
opts = {
        entries: './'+config.js.src+'/main.js'
        transform: [ 'babelify' ]
        plugin: ["licensify"],
        debug: true
       }

b    = watchify(browserify(opts))

bundle = ->
  return b.bundle()
    .on 'error', handleErrors
    .pipe source 'main.js' # Output filename
    # .pipe buffer()
    # .pipe $.uglify({preserveComments: 'license'})
    .pipe gulp.dest config.js.dist
    .pipe gulp.dest config.wp.dir+'/www/wordpress/js/'
    .on "end" , browserSync.reload



gulp.task "js", bundle
