"use strict"

# Gulp Setup
#
# 1. Settings & variables
# 2. Jade
# 3. JavaScript
# 4. StyleSheet
# 5. Images
# 6. StyleGuide
# 7. WordPress
# 8. Tasks

#****************************
# 1. Settings
#****************************

pkg          = require './package.json'

watchify     = require 'watchify'

gulp         = require 'gulp'
$            = require('gulp-load-plugins')()
runSequence  = require 'run-sequence'
replace      = require 'gulp-replace'
shell        = require 'gulp-shell'
gulpif       = require 'gulp-if'

browserSync  = require 'browser-sync'
reload       = browserSync.reload

jade         = require 'gulp-jade'

fs = require 'fs';

data = null
fs.open './data.json','r', (err,fd) ->
  if !err
    data = require './data.json'


browserify   = require 'browserify'
source       = require 'vinyl-source-stream'
buffer       = require 'vinyl-buffer'
handleErrors = require './util/handle.coffee'

spritesmith  = require 'gulp.spritesmith'

styleguide   = require 'sc5-styleguide'
hologram     = require 'gulp-hologram'
outputPath   = 'styleguide'



cssbanner = ['/*'
  'Theme Name: <%= pkg.title %>'
  'Theme URI: <%= pkg.homepage %>'
  'Author: <%= pkg.author.name %>'
  'Author URI: <%= pkg.author.url %>'
  'Description: <%= pkg.description %>'
  'Version: <%= pkg.version %>'
  'License: GNU General Public License v2 or later'
  'License URI: http://www.gnu.org/licenses/gpl-2.0.html'
  'Text Domain: <%= pkg.author.name %>'
  'Tags:'
  ''
  'This theme, like WordPress, is licensed under the GPL.'
  'Use it to make something cool, have fun, and share what you\'ve learned with others.'
  ''
  'Resetting and rebuilding styles have been helped along thanks to the fine work of'
  'Eric Meyer http://meyerweb.com/eric/tools/css/reset/index.html'
  'along with Nicolas Gallagher and Jonathan Neal http://necolas.github.com/normalize.css/'
  'and Blueprint http://www.blueprintcss.org/'
  '*/'].join('\n')


#****************************
# 2. Jade
#****************************
gulp.task "jade", ->
  YOUR_LOCALS = {}
  gulp.src pkg.settings.app+"/jade/*.jade"
  .pipe $.plumber({errorHandler: $.notify.onError('<%= error.message %>')})
  .pipe $.data (file)->
    if file
      reg = /\/([A-Za-z_0-9]+?)\.jade/
      path = file.path.match(reg)[1]
      console.log(path)
      console.log(pkg.name)
      if data[path]

        return {"title":data[path]["title"],"keyword":data[path]["keyword"],"disc":data[path]["disc"],"path":path}
      else
        return {"title":null,"keyword":null,"desc":null}

  .pipe(jade(pretty: true))
  .pipe gulp.dest pkg.settings.dist
  .on 'end' , reload



#****************************
# 3. JavaScript
#****************************
#coffee

c_opts = {
        entries: './'+pkg.settings.app+'coffee/main.coffee'
        extensions: ['.coffee'] # Use CoffeeScript
       }

c_b    = watchify(browserify(c_opts))

c_bundle = ->
  return c_b.bundle()
    .on 'error', handleErrors
    .pipe source 'main.js' # Output filename
    # .pipe buffer()
    # .pipe $.uglify()
    .pipe gulp.dest pkg.settings.dist+"js/" # Output directory
    .pipe gulp.dest pkg.name+'/www/wordpress/wp-content/themes/'+pkg.name+'/js/'
    .on 'end' , reload



#VanillaJS
gulp.task "script", c_bundle

opts = {
        entries: './'+pkg.settings.app+'js/main.js'
        transform: [ 'babelify' ]
       }

b    = watchify(browserify(opts))

bundle = ->
  return b.bundle()
    .on 'error', handleErrors
    .pipe source 'main.js' # Output filename
    # .pipe buffer()
    # .pipe $.uglify()
    .pipe gulp.dest pkg.settings.dist+"js/" # Output directory
    .pipe gulp.dest pkg.name+'/www/wordpress/wp-content/themes/'+pkg.name+'/js/'


gulp.task "js", bundle




#****************************
# 4. StyleSheet
#****************************

#SCSS

#ruby-sass
# gulp.task "scss", ->
#   $.rubySass(pkg.settings.app+"sass/",{
#       precision: 10
#       loadPath: require('node-neat').includePaths
#     }
#   )
#   .on 'error', (err)->
#     console.log err.message
#   .pipe $.pleeease(
#     "rem": false,
#   )
#   .pipe gulp.dest pkg.settings.dist+"style"
#   # .pipe $.header cssbanner, pkg : pkg
#   # .pipe replace("../", "./")
#   # .pipe gulp.dest pkg.name+'/www/wordpress/wp-content/themes/'+pkg.name
#   .on 'end' , reload

# lissass
gulp.task 'scss', ->
  gulp.src(pkg.settings.app+"sass/style.scss")
    .pipe $.plumber
      errorHandler: $.notify.onError('<%= error.message %>')
    .pipe($.sass({
      includePaths: require('node-neat').includePaths
    }))
    # .on 'error', (err)->
    #   console.log err.message
    .pipe $.pleeease(
      "rem": false,
    )
    .pipe gulp.dest pkg.settings.dist+"style"
    # .pipe $.header cssbanner, pkg : pkg
    # .pipe replace("../", "./")
    # .pipe gulp.dest pkg.name+'/www/wordpress/wp-content/themes/'+pkg.name
    # .on 'end' , reload





#stylus
gulp.task "stylus", ->
  gulp.src pkg.settings.app+"stylus/style.styl"
  .pipe $.plumber
    errorHandler: $.notify.onError('<%= error.message %>')
  .pipe $.stylus
    compress: true
  .pipe $.pleeease()
  .pipe gulp.dest pkg.settings.dist+"style"
  .on 'end' , reload



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
    # .pipe($.changed( pkg.settings.dist+'images' ))
    .pipe($.imagemin({
      progressive: true,
      interlaced: true
    }))
    .pipe gulp.dest pkg.settings.dist+'images'
    .pipe gulp.dest pkg.name+'/www/wordpress/wp-content/themes/'+pkg.name+'/images'
    .pipe gulp.dest pkg.name+'/www/wordpress/images'
    .pipe $.size({title: 'images'})

gulp.task "clear", (i_done) ->
  return $.cache.clearAll(i_done);



#****************************
# 6. StyleGuide
#****************************

gulp.task 'style', ['scss'], ()->
  configGlob = './styleguide/hologram_config.yml';
  gulp.src( configGlob )
    .pipe(hologram());
  .on 'end' , reload


#****************************
# 7. WordPress
#****************************

# Download VCCW
gulp.task 'wp-dl', shell.task(
  ['git clone https://github.com/vccw-team/vccw'+' '+pkg.name]
)

# Plugin Settings
plugin = null
if pkg.settings.wp.plugin
  plugin = true
  pluginArr = ['plugins:']
  pkg.settings.wp.plugin.forEach (v)->
    pluginArr.push('  - '+v)
  pluginList = pluginArr.join('\n')



# Setting VCCW
gulp.task 'wp-replace', ->
  gulp.src pkg.name+'/provision/default.yml'
  .pipe replace "Welcome to the VCCW", pkg.title
  .pipe replace "wordpress.local", pkg.name+".dev"
  .pipe replace "en_US", "ja"
  .pipe replace "192.168.33.10", pkg.settings.wp.ip
  .pipe gulpif plugin, replace /plugins:[\s\S]*tinymce-templates/,pluginList
  .pipe gulp.dest pkg.name+'/provision/'

# Download _s
gulp.task 'wp-themeinit', shell.task(
  ['git clone https://github.com/Automattic/_s'+' '+pkg.name+'/www/wordpress/wp-content/themes/'+pkg.name]
)



# vagrant up
gulp.task 'up', shell.task(
  ['cd '+pkg.name+' && vagrant up']
)

# vagrant halt
gulp.task 'halt', shell.task(
  ['cd '+pkg.name+' && vagrant halt']
)

# vagrant provison
gulp.task 'provision', shell.task(
  ['cd '+pkg.name+' && agrant provision']
)


# Wordpress init
gulp.task 'wp-init', () -> runSequence(
  'wp-dl',
  'wp-replace',
  'wp-themeinit',
)



#****************************
# 8. Tasks
#****************************

gulp.task 'styleguide', ['styleguide:static', 'styleguide:generate', 'styleguide:applystyles']



# watch
gulp.task "watch", ->
  browserSync.init(
    {
      server:
        baseDir: "dist"
    }
  )

  gulp.watch "app/**/*.jade", ["jade"]
  # gulp.watch "app/**/*.scss", ['styleguide']
  gulp.watch "app/**/*.scss", ["style"]
  gulp.watch "app/**/*.js", ["style"]

  return


# watch
gulp.task "wp-watch", ->
  browserSync.init(
    {
      proxy:"http://"+pkg.name+".dev"
    }
  )


  gulp.watch "app/**/*.jade", ["jade"]

  gulp.watch "app/**/*.scss", ["style"]
  gulp.watch "app/**/*.js", ["style"]


  gulp.watch pkg.name+'/www/wordpress/wp-content/themes/'+pkg.name+'/**/*.php', reload
  gulp.watch pkg.name+'/www/wordpress/wp-content/themes/'+pkg.name+'/**/*.css', reload
  gulp.watch pkg.name+'/www/wordpress/wp-content/themes/'+pkg.name+'/**/*.js', reload

  return
