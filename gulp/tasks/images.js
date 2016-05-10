import gulp from 'gulp'
import gulpif from 'gulp-if'
import spritesmith from 'gulp.spritesmith'
import config from '../../config/config.json'
import gulpLoadPlugins from 'gulp-load-plugins'

const $ = gulpLoadPlugins()

import hasWP from '../util/hasWP'


gulp.task("sprite", ()=> {
  var spriteData;
  // スプライトにする画像達
  spriteData = gulp.src(config.image.src + "sprites/*.png").pipe(spritesmith({
    imgName: "sprite.png",
    cssName: "_sprite.scss",
    imgPath: "../images/sprite.png",
    cssFormat: "scss",
    cssVarMap: function(sprite) {
      sprite.name = "sprite-" + sprite.name;
    },
    algorithm: "top-down",
    padding: 10,
    retinaSrcFilter: ["*@2x.png"],
    retinaImgName: 'sprite-2x.png',
    retinaDest: config.image.src + "sprites/sprite@2x.png"
  }));
  spriteData.img.pipe(gulp.dest(config.image.sprite));
  spriteData.img.pipe(gulp.dest("dist/images/sprite")); // imgNameで指定したスプライト画像の保存先
  spriteData.css.pipe(gulp.dest("app/sass/utilities/")); // cssNameで指定したcssの保存先
});


gulp.task("images", function() {
  return gulp.src(config.image.src + '**/*').pipe($.imagemin({
    progressive: true,
    interlaced: true
  }))
  .pipe(gulp.dest(config.image.dist))
  .pipe(gulpif(hasWP(),gulp.dest(`${config.wp.dir}/www/wordpress/images`)))
  // .pipe(gulp.dest(`${config.wp.dir}/www/wordpress/wp-content/themes/${config.wp.themename}/images`))
  // .pipe(gulp.dest(`${config.wp.dir}/www/wordpress/images`))
  .pipe($.size({
    title: "images"
  }));
});

gulp.task("clear", (i_done)=> {
  return $.cache.clearAll(i_done);
});
