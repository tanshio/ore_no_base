import gulp from 'gulp'
import gulpif from 'gulp-if'
import browserSync from 'browser-sync'

import gulpLoadPlugins from 'gulp-load-plugins'
const $ = gulpLoadPlugins()

import config from "../../config/config.json"

import webpack from 'gulp-webpack'
import webpackConf from '../../webpack.config.js'

import browserify from 'browserify'
import source  from 'vinyl-source-stream'
import buffer  from 'vinyl-buffer'
import watchify  from 'watchify'
import handleErrors  from '../util/handleErrors.js'




// webpack
gulp.task("js", function() {
  return gulp.src(config.js.src + 'main.js').pipe($.plumber({
    errorHandler: $.notify.onError("<%= error.message %>")
  }))
  .pipe(webpack(webpackConf))
  // .pipe(gulp.dest('module.js'))
  // .pipe($.uglify())
  .pipe(gulp.dest(config.js.dist))
  // .pipe(gulp.dest(config.wp.dir + '/www/wordpress/js/'))
  .on("end", browserSync.reload);
});


// browserify
const opts = {
  entries: './' + config.js.src + '/main.js',
  transform: ['babelify'],
  plugin: ["licensify"],
  debug: true
};

const b = watchify(browserify(opts));

const bundle = function() {
  return b.bundle()
  .on('error', handleErrors)
  .pipe(source('main.js'))
  // .pipe(buffer())
  // .pipe($.uglify({preserveComments: 'license'}))
  .pipe(gulp.dest(config.js.dist))
  // .pipe(gulp.dest(config.wp.dir + '/www/wordpress/js/'))
  .on("end", browserSync.reload);
};

gulp.task("js", bundle);
