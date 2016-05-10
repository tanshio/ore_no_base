import gulp from 'gulp'
import gulpif from 'gulp-if'
import config from '../../config/config.json'
import browserSync from 'browser-sync'

gulp.task('browserSync', ()=> {
  return browserSync.init({
    server: {
      baseDir: config.browserSync.server.baseDir
    }
  });
});
