'use strict';

var gulp = require('gulp'),
  $ = require('gulp-load-plugins')(),
  jade = require('gulp-jade'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload,
  runSequence = require('run-sequence'),
  notify = require('gulp-notify'),
  uglify = require('gulp-uglify'),
  browserify = require('browserify'),
  source = require("vinyl-source-stream"),
  spritesmith = require('gulp.spritesmith'),
  handleErrors = require("./util/handle.js");

gulp.task('jade', function() {
  var YOUR_LOCALS = {};

  return gulp.src('app/jade/*.jade')
    .pipe($.plumber())
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty: true
    }))
    .pipe(gulp.dest('dist'));
});

//scss
gulp.task('scss', function () {
  return gulp.src(['app/sass/style.scss'])
    .pipe($.plumber())
    .pipe($.rubySass({
      style: 'expanded',
      precision: 10,
      loadPath: ['app/sass']
    }))
    .pipe($.pleeease({
      "rem": false
    }))
    .pipe(gulp.dest('dist/style'));
});

//stylus
gulp.task('stylus', function () {
  return gulp.src(['app/stylus/style.styl'])
    .pipe($.plumber())
    .pipe($.stylus({compress: true}))
    // .pipe($.pleeease())
    .pipe(gulp.dest('dist/style'));
});

//js
gulp.task('js', function () {
  return gulp.src(['dist/js/main.js'])
    .pipe($.plumber())
    .pipe(uglify({preserveComments:"some"}))
    // .pipe($.pleeease())
    .pipe(gulp.dest('dist/js'));
});

//uglify
gulp.task('script', function () {
  return browserify("./app/js/main.js")
    .bundle()
    .on('error', handleErrors)
    // .pipe($.plumber())
    .pipe(source("main.js"))
    .pipe(gulp.dest("dist/js/"));
});

//images
gulp.task("images", function() {
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'))
    .pipe($.size({title: 'images'}));
});

// cache clear
gulp.task("clear", function(i_done) {
  return $.cache.clearAll(i_done);
});

//css sprites
gulp.task('sprite', function () {
  var spriteData = gulp.src('app/images/sprites/*.png') //���ץ饤�Ȥˤ������ʻ����_
  .pipe(spritesmith({
    imgName: 'sprite.png', //���ץ饤�Ȥλ���
    cssName: '_sprite.scss', //���ɤ����scss
    imgPath: '../images/sprite.png', //���ɤ����scss��ӛ�d�����ѥ�
    cssFormat: 'scss', //�ե��`�ޥå�
    cssVarMap: function (sprite) {
      sprite.name = 'sprite-' + sprite.name; //VarMap(���ɤ����Scss�ˤ�����ʉ�����һ�E������)
    }
  }));
  spriteData.img.pipe(gulp.dest('app/images/'));
  spriteData.img.pipe(gulp.dest('dist/images/'));  //imgName��ָ���������ץ饤�Ȼ���α�����
  spriteData.css.pipe(gulp.dest('app/sass/utils/')); //cssName��ָ������css�α�����
});

//watch
gulp.task('watch', function () {
  browserSync.init(null, {
    server: {
    baseDir: ['dist']
    },
    notify: false
  });
  // gulp.watch('app/**/*.jade', reload);
  gulp.watch('app/**/*.jade', ['jade']);
  // gulp.watch('app/**/*.jade', reload);
  // gulp.watch('app/**/*.scss', reload);
  gulp.watch('app/**/*.scss', ['scss']);
  gulp.watch('app/**/*.js', ['script']);
  // gulp.watch('app/**/*.scss', reload);
  // gulp.watch('app/**/*.styl', reload);
  // gulp.watch('app/**/*.styl', ['stylus']);
  gulp.watch('dist/**/*.html', reload);
  gulp.watch('dist/**/*.css', reload);
  gulp.watch('dist/**/*.js', reload);

});