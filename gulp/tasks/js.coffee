gulp         = require 'gulp'
gulpif       = require 'gulp-if'

$            = require('gulp-load-plugins')()

config       = require '../../config/config.json'

browserSync  = require "browser-Sync"

browserify   = require 'browserify'
watchify     = require 'watchify'
source       = require 'vinyl-source-stream'
buffer       = require 'vinyl-buffer'
# handleErrors = require './util/handle.coffee'

notify       = require "gulp-notify"


opts         = entries: './'+config.js.src+'main.js'


b    = watchify(browserify(opts)).transform('babelify', {presets: ["es2015","react"]})

# gulp-starter
handleErrors = ->
    args = Array.prototype.slice.call arguments

    notify.onError({
      title: "Compile Error",
      message: "<%= error %>"
    }).apply this, args

    this.emit "end"

bundle = ->
  return b.bundle()
    .on 'error', handleErrors
    .pipe source 'main.js' # Output filename
    .pipe buffer()
    # .pipe $.uglify()
    # .pipe gulp.dest config.wp.dir+'/www/wordpress/js/'
    .pipe gulp.dest config.js.dist
    .on "end" , browserSync.reload

 # Output directory


b.on 'update', bundle

gulp.task "js", bundle
