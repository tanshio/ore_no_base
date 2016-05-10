import gulp from 'gulp'
import del from 'del'
import config from '../../config/config.json'

gulp.task("clean", ()=> {
  return del([config.root.dist]);
});
