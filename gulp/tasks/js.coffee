gulp         = require 'gulp'
gulpif       = require 'gulp-if'

$            = require('gulp-load-plugins')()

config       = require '../../config/config.json'

browserSync  = require "browser-Sync"


webpack      = require "gulp-webpack"
webpackConf  = require '../../webpack.config.js'

b.on 'update', bundle

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
