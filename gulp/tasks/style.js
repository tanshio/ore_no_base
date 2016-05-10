import gulp from 'gulp'
import gulpif from 'gulp-if'
import browserSync from 'browser-sync'
import config from "../../config/config.json"
import gulpLoadPlugins from 'gulp-load-plugins'
import sourcemaps from 'gulp-sourcemaps'

import hasWP from '../util/hasWP'
import isProduction from '../util/isProduction'

const $ = gulpLoadPlugins()

const cssbanner  = `/*
  Theme Name: ${config.wp.title}
  Theme URI: ${config.wp.homepage}
  Author: ${config.wp.author.name}
  Author URI: ${config.wp.author.url}
  Description: ${config.wp.description}
  Version: ${config.wp.version}
  License: GNU General Public License v2 or later
  License URI: http://www.gnu.org/licenses/gpl-2.0.html
  Text Domain: ${config.wp.author.name}
  Tags:

  This theme, like WordPress, is licensed under the GPL.
  Use it to make something cool, have fun, and share what you\'ve learned with others.

  Resetting and rebuilding styles have been helped along thanks to the fine work of
  Eric Meyer http://meyerweb.com/eric/tools/css/reset/index.html
  along with Nicolas Gallagher and Jonathan Neal http://necolas.github.com/normalize.css/
  and Blueprint http://www.blueprintcss.org/
  */`

// SCSS
// lissass

gulp.task('scss', ()=> {
  return gulp.src(config.scss.src + "style.scss").pipe($.plumber({
    errorHandler: $.notify.onError("<%= error.message %>")
  })).pipe($.sass({
    includePaths: require('node-neat').includePaths,
    sourcemap: true
  }))
  .pipe(gulpif(!isProduction(),sourcemaps.init()))
  .pipe(gulpif(isProduction(),
    $.pleeease({
      "autoprefixer": {
        "browsers": ["ie 9"]
      },
      "rem": false,
      "minifier": true,
    }),
    $.pleeease({
      "autoprefixer": {
        "browsers": ["ie 9"]
      },
      "rem": false,
      "minifier": false,
      "sourcemaps": true,
    })
  ))
  .pipe(gulpif(!isProduction(),sourcemaps.init(sourcemaps.write())))
  .pipe(gulp.dest(config.scss.dist))
  .pipe(gulpif(hasWP(),$.header(cssbanner, {config : config})))
  .pipe(gulpif(hasWP(),gulp.dest('www/wordpress/wp-content/themes/test')))
  .pipe(gulp.dest('www/wordpress/wp-content/themes/test'))
  .on("end", browserSync.reload);
});

// stylus
gulp.task("stylus", function() {
  return gulp.src(config.stylus.app + "stylus/style.styl").pipe($.plumber({
    errorHandler: $.notify.onError("<%= error.message %>")
  })).pipe($.stylus({
    compress: true
  })).pipe($.pleeease({
    "autoprefixer": {
      "browsers": ["ie 9"]
    },
    "rem": false
  })).pipe(gulp.dest(config.stylus.dist + "style")).on('end', browserSync.stream);
});
