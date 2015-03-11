"use strict"

# Gulp Setup
#
# 1. Settings & variables
# 2. Jade
# 3. JavaScript
# 4. StyleSheet
# 5. Images
# 6. StyleGuide
# 7. Tasks

#****************************
# 1. Settings
#****************************

pkg          = require './package.json'
gulp         = require 'gulp'
$            = require('gulp-load-plugins')()
runSequence  = require 'run-sequence'

browserSync  = require 'browser-sync'
reload       = browserSync.reload

jade         = require 'gulp-jade'
data         = require './data.json'

browserify   = require 'browserify'
source       = require 'vinyl-source-stream'
buffer       = require 'vinyl-buffer'
handleErrors = require './util/handle.coffee'

spritesmith  = require 'gulp.spritesmith'

styleguide   = require 'sc5-styleguide'
outputPath   = 'styleguide'



#****************************
# 2. Jade
#****************************
gulp.task "jade", ->
  YOUR_LOCALS = {}
  gulp.src(pkg.settings.app+"/jade/*.jade")
  .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
  .pipe($.data((file)->
    if file
      reg = /\/([A-Za-z_0-9]+?)\.jade/
      path = file.path.match(reg)[1]
      console.log(path)
      console.log(pkg.name)
      console.log(data[path])
      console.log(data[path]["title"])
      return {"title":data[path]["title"],"keyword":data[path]["keyword"],"desc":data[path]["desc"]}
    else
      return {"title":null,"keyword":null,"desc":null}
  ))
  .pipe(jade(
    pretty: true
  )).pipe gulp.dest(pkg.settings.dist)



#****************************
# 3. JavaScript
#****************************

# Coffee
gulp.task "script", ->
  browserify
    entries: './'+pkg.settings.app+'coffee/main.coffee'
    extensions: ['.coffee'] # Use CoffeeScript
  .bundle()
  .on 'error', handleErrors
  .pipe source 'main.js' # Output filename
  # .pipe buffer()
  # .pipe $.uglify()
  .pipe gulp.dest pkg.settings.dist+"js/" # Output directory


# VanillaJS
gulp.task "scriptjs", ->
  browserify
    entries: './'+pkg.settings.app+'js/main.js'
  .bundle()
  .on 'error', handleErrors
  .pipe source 'main.js' # Output filename
  # .pipe buffer()
  # .pipe $.uglify()
  .pipe gulp.dest pkg.settings.dist+"js/" # Output directory



#****************************
# 4. StyleSheet
#****************************

#SCSS
gulp.task "scss", ->
  $.rubySass(pkg.settings.app+"sass/",{
      precision: 10
      loadPath: require('node-neat').includePaths
    }
  )
  # .pipe(cmq({
  #     log: true
  #   }))
  # .pipe $.autoprefixer 'last 2 version','ie 9'
  # .pipe(minifyCSS({keepBreaks:false}))
  # .pipe $.pleeease()
  .pipe gulp.dest pkg.settings.dist+"style"


#stylus
gulp.task "stylus", ->
  gulp.src pkg.settings.app+"stylus/style.styl"
  .pipe $.plumber
    errorHandler: $.notify.onError('<%= error.message %>')
  .pipe $.stylus
    compress: true
  .pipe $.pleeease()
  .pipe gulp.dest pkg.settings.dist+"style"



#****************************
# 5. Images
#****************************

# スプライト化
gulp.task "sprite", ->
  #スプライトにする愉快な画像達
  spriteData = gulp.src pkg.settings.app+"/images/sprites/*.png"
  .pipe(spritesmith(
    imgName: "sprite.png" # Sprite filename
    cssName: "_sprite.scss" # Output scss
    imgPath: "../images/sprite.png" # Output path
    cssFormat: "scss" #format
    cssVarMap: (sprite) ->
      sprite.name = "sprite-" + sprite.name # VarMap
      return
  ))
  spriteData.img.pipe gulp.dest("app/images/")
  spriteData.img.pipe gulp.dest("dist/images/sprite") #imgNameで指定したスプライト画像の保存先
  spriteData.css.pipe gulp.dest("app/sass/utils/") #cssNameで指定したcssの保存先
  return


# Optimize Images
gulp.task "images", ->
  return gulp.src pkg.settings.app+'/images/**/*'
    .pipe(changed( pkg.settings.dist+'images' ))
    .pipe($.imagemin({
      progressive: true,
      interlaced: true
    }))
    .pipe gulp.dest pkg.settings.dist+'images'
    .pipe($.size({title: 'images'}));

gulp.task "clear", (i_done) ->
  return $.cache.clearAll(i_done);



#****************************
# 6. StyleGuide
#****************************

gulp.task 'styleguide:generate', ->
  return gulp.src('app/**/*.scss')
    .pipe styleguide.generate {
        title: 'My Styleguide',
        server: true,
        rootPath: outputPath,
        overviewPath: 'README.md'
      }
    .pipe gulp.dest(outputPath)


gulp.task 'styleguide:applystyles', ->
  return $.rubySass pkg.settings.app+"sass/",{
        precision: 10
        loadPath: require('node-neat').includePaths
      }
    .on 'error', (err)->
      console.log err.message
    .pipe styleguide.applyStyles()
    .pipe gulp.dest(outputPath)



#****************************
# 7. Tasks
#****************************

gulp.task 'styleguide', ['styleguide:generate', 'styleguide:applystyles']

# watch
gulp.task "watch",['styleguide'], ->
  browserSync.init(
    {
      server:
        baseDir: "dist"
    }
  )

  # gulp.watch('app/**/*.jade', reload);
  gulp.watch "app/**/*.jade", ["jade"]

  # gulp.watch('app/**/*.jade', reload);
  # gulp.watch('app/**/*.scss', reload);
  gulp.watch "app/**/*.scss", ["scss"]
  gulp.watch "app/**/*.scss", ['styleguide']
  gulp.watch "app/**/*.js", ["js"]
  gulp.watch "app/**/*.coffee", ["script"]

  # gulp.watch('app/**/*.scss', reload);
  # gulp.watch('app/**/*.styl', reload);
  # gulp.watch('app/**/*.styl', ['stylus']);
  gulp.watch "dist/**/*.html", reload
  gulp.watch "dist/**/*.css", reload
  gulp.watch "dist/**/*.js", reload
  return
