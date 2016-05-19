import gulp from 'gulp'
import gutil from 'gulp-util'
import browserSync from 'browser-sync'
import runSequence from 'run-sequence'
import config from '../../config/config.json'

import hasWP from '../util/hasWP'
import isProduction from '../util/isProduction'


gulp.task("default", ()=> {
  runSequence("clean", "sprite", ["scss", "js", "images"], "jade", "browserSync", "watch");
  // gulp.watch("app/**/*.pug", ["pug"]);
  gulp.watch("app/**/*.pug", ["jade"]);
  gulp.watch("app/**/*.scss", ["scss"]);
  return gulp.watch("app/**/*.js", ["js"]);
});
