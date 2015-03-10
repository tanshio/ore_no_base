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
  gulp.src(pkg.setings.app+"/jade/*.jade")
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
  )).pipe gulp.dest(pkg.setings.dist)



#****************************
# 3. JavaScript
#****************************

# browserifyによる連結
gulp.task "script", ->
  browserify
    entries: [pkg.setings.app+'coffee/main.coffee']
    extensions: ['.coffee'] # CoffeeScriptも使えるように
    # shim:
    #   jQuery:
    #       path: './bower_components/jquery/dist/jquery.min.js',
    #       exports: '$'
  .bundle()
  .on 'error', handleErrors
  .pipe source 'main.js' # 出力ファイル名を指定
  .pipe buffer()
  .pipe uglify()
  .pipe gulp.dest pkg.setings.dist+"js/" # 出力ディレクトリを指定


#coffee
gulp.task "coffee", ->
  gulp.src(pkg.setings.app+"coffee/*.coffee")
  .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
  .pipe($.coffee(bare: true))
  .pipe gulp.dest pkg.setings.dist+"js"

#JavaScript
gulp.task "js", ->
  gulp.src [pkg.setings.app+"js/main.js"]
  .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
  .pipe $.uglify
    preserveComments:"some"
  .pipe gulp.dest pkg.setings.dist+"js"



#****************************
# 4. StyleSheet
#****************************

#SCSS
gulp.task "scss", ->
  $.rubySass(pkg.setings.app+"sass/",{
      precision: 10
      loadPath: [pkg.setings.dist+"/sass"]
    }
  )
  # .pipe(cmq({
  #     log: true
  #   }))
  # .pipe $.autoprefixer 'last 2 version','ie 9'
  # .pipe(minifyCSS({keepBreaks:false}))
  .pipe $.pleeease()
  .pipe gulp.dest pkg.setings.dist+"style"


#stylus
gulp.task "stylus", ->
  # .pipe($.pleeease())
  gulp.src pkg.setings.app+"stylus/style.styl"
  .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
  .pipe($.stylus(compress: true))
  .pipe gulp.dest pkg.setings.dist+"style"



#****************************
# 5. Images
#****************************

# スプライト化
gulp.task "sprite", ->
  #スプライトにする愉快な画像達
  spriteData = gulp.src pkg.setings.app+"/images/sprites/*.png"
  .pipe(spritesmith(
    imgName: "sprite.png" #スプライトの画像
    cssName: "_sprite.scss" #生成されるscss
    imgPath: "../images/sprite.png" #生成されるscssに記載されるパス
    cssFormat: "scss" #フォーマット
    cssVarMap: (sprite) ->
      sprite.name = "sprite-" + sprite.name #VarMap(生成されるScssにいろいろな変数の一覧を生成)
      return
  ))
  spriteData.img.pipe gulp.dest("app/images/")
  spriteData.img.pipe gulp.dest("dist/images/sprite") #imgNameで指定したスプライト画像の保存先
  spriteData.css.pipe gulp.dest("app/sass/utils/") #cssNameで指定したcssの保存先
  return


# 画像最適化
gulp.task "images", ->
  return gulp.src pkg.setings.app+'/images/**/*'
    .pipe(changed( pkg.setings.dist+'images' ))
    .pipe($.imagemin({
      progressive: true,
      interlaced: true
    }))
    .pipe gulp.dest pkg.setings.dist+'images'
    .pipe($.size({title: 'images'}));

gulp.task "clear", (i_done) ->
  return $.cache.clearAll(i_done);



#****************************
# 6. StyleGuide
#****************************

# スタイルガイドセッティング
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
  return $.rubySass "app/sass/"
    .on 'error', (err) ->
       console.error('Error!', err.message)
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
