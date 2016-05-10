import gulp from 'gulp'
import browserSync from 'browser-sync'
import runSequence from 'run-sequence'
import config from '../../config/config.json'

gulp.task("default", ()=> {
  runSequence("clean", "sprite", ["scss", "js", "images"], "pug", "browserSync", "watch");
  gulp.watch("app/**/*.jade", ["jade"]);
  gulp.watch("app/**/*.scss", ["scss"]);
  return gulp.watch("app/**/*.js", ["js"]);
});
