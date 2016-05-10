import gulp from 'gulp'
import gulpif from 'gulp-if'

import config from "../../config/config.json"

gulp.task("watch", function() {
  gulp.watch("app/**/*.pug", ["pug"]);
  gulp.watch("app/**/*.scss", ["scss"]);
  return gulp.watch("app/**/*.js", ["js"]);
});

gulp.task("wp-watch", function() {
  gulp.watch("app/**/*.jade", ["jade"]);
  gulp.watch("app/**/*.scss", ["scss"]);
  gulp.watch("app/**/*.js", ["js"]);
  gulp.watch(config.wp.dir + '/www/wordpress/wp-content/themes/' + config.wp.themeName + '/**/*.php', $.browserSync.reload());
  gulp.watch(config.wp.dir + '/www/wordpress/wp-content/themes/' + config.wp.themeName + '/**/*.css', $.browserSync.reload());
  gulp.watch(config.wp.dir + '/www/wordpress/wp-content/themes/' + config.wp.themeName + '/**/*.js', $.browserSync.reload());
});
