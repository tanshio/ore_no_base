gulp        = require "gulp"
gulpif      = require 'gulp-if'

gulp.task "watch", ->
  gulp.watch "app/**/*.jade", ["jade"]
  # gulp.watch "app/**/*.scss", ['styleguide']
  gulp.watch "app/**/*.scss", ["scss"]
  gulp.watch "app/**/*.js", ["js"]




# watch
gulp.task "wp-watch", ->

  gulp.watch "app/**/*.jade", ["jade"]

  gulp.watch "app/**/*.scss", ["scss"]
  gulp.watch "app/**/*.js", ["js"]


  gulp.watch config.wp.dir+'/www/wordpress/wp-content/themes/'+config.wp.themeName+'/**/*.php',  $.browserSync.reload()
  gulp.watch config.wp.dir+'/www/wordpress/wp-content/themes/'+config.wp.themeName+'/**/*.css',  $.browserSync.reload()
  gulp.watch config.wp.dir+'/www/wordpress/wp-content/themes/'+config.wp.themeName+'/**/*.js',  $.browserSync.reload()

  return
