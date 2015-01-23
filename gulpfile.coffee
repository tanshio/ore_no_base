"use strict"
gulp = require "gulp"
$ = require("gulp-load-plugins")()
jade = require "gulp-jade"
browserSync = require "browser-sync"
reload = browserSync.reload
runSequence = require "run-sequence"
spritesmith = require "gulp.spritesmith"
coffee = require "gulp-coffee"
browserify = require 'browserify'
source = require 'vinyl-source-stream'
uglify = require 'gulp-uglify'
notify = require 'gulp-notify'
handleErrors = require("./utils/handle.coffee");


#jade
gulp.task "jade", ->
  YOUR_LOCALS = {}
  gulp.src("app/jade/*.jade").pipe($.plumber({errorHandler: notify.onError('<%= error.message %>')})).pipe(jade(
    locals: YOUR_LOCALS
    pretty: true
  )).pipe gulp.dest("dist")


# browserifyによる連結
gulp.task "script", ->
  browserify
    entries: ['./app/coffee/main.coffee']
    extensions: ['.coffee'] # CoffeeScriptも使えるように
    # shim:
    #   jQuery:
    #       path: './bower_components/jquery/dist/jquery.min.js',
    #       exports: '$'
  .bundle()
  .on 'error', handleErrors
  .pipe source 'main.js' # 出力ファイル名を指定
  # .pipe(uglify())
  .pipe gulp.dest "./dist/js/" # 出力ディレクトリを指定


#coffee
gulp.task "coffee", ->
  gulp.src("app/coffee/*.coffee").pipe($.plumber({errorHandler: notify.onError('<%= error.message %>')})).pipe(coffee(bare: true)).pipe gulp.dest("./dist/js")


#scss
gulp.task "scss", ->
  gulp.src(["app/sass/style.scss"]).pipe($.plumber({errorHandler: notify.onError('<%= error.message %>')})).pipe($.rubySass(
    style: "expanded"
    precision: 10
    loadPath: ["app/sass"]
  )).pipe($.pleeease()).pipe gulp.dest("dist/style")


#stylus
gulp.task "stylus", ->
  # .pipe($.pleeease())
  gulp.src(["app/stylus/style.styl"]).pipe($.plumber({errorHandler: notify.onError('<%= error.message %>')})).pipe($.stylus(compress: true)).pipe gulp.dest("dist/style")




gulp.task "js", ->

  gulp.src(["dist/js/main.js"]).pipe($.plumber({errorHandler: notify.onError('<%= error.message %>')})).pipe(uglify({preserveComments:"some"})).pipe gulp.dest("dist/js")



# スプライト化
gulp.task "sprite", ->
  #スプライトにする愉快な画像達
  spriteData = gulp.src("app/images/sprites/*.png").pipe(spritesmith(
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
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'))
    .pipe($.size({title: 'images'}));

gulp.task "clear", (i_done) ->
  return $.cache.clearAll(i_done);


# watch
gulp.task "watch", ->
  browserSync.init null,
    server:
      baseDir: ["dist"]

    notify: false


  # gulp.watch('app/**/*.jade', reload);
  gulp.watch "app/**/*.jade", ["jade"]

  # gulp.watch('app/**/*.jade', reload);
  # gulp.watch('app/**/*.scss', reload);
  gulp.watch "app/**/*.scss", ["scss"]
  gulp.watch "app/**/*.js", ["js"]
  gulp.watch "app/**/*.coffee", ["script"]

  # gulp.watch('app/**/*.scss', reload);
  # gulp.watch('app/**/*.styl', reload);
  # gulp.watch('app/**/*.styl', ['stylus']);
  gulp.watch "dist/**/*.html", reload
  gulp.watch "dist/**/*.css", reload
  gulp.watch "dist/**/*.js", reload
  return
