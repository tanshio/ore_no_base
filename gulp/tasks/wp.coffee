gulp        = require "gulp"
gulpif      = require "gulp-if"
replace     = require "gulp-replace"
shell       = require "gulp-shell"
yaml        = require 'js-yaml'
fs          = require "fs"


config      = require "../../config/config.json"

#****************************
# 7. WordPress
#****************************

# Download VCCW
gulp.task "wp-dl", shell.task(
  ["git clone https://github.com/vccw-team/vccw"+" "+config.wp.dir]
)

# Plugin Settings
plugin = null
if config.wp.plugin
  plugin = true
  pluginArr = ["plugins:"]
  config.wp.plugin.forEach (v)->
    pluginArr.push("  - "+v)
  pluginList = pluginArr.join("\n")



createYaml = =>

  data = yaml.dump(config.wp.site, {
    flowLevel: 3,
    styles: {
      "!!int"  : "hexadecimal",
      "!!null" : "camelcase"
    }
  });



  console.log(data)

  fs.writeFile config.wp.dir+"site.yml", data , (err) =>
      console.log err

  # this.emit 'end'

gulp.task "createYaml", ()->
  createYaml()

# Setting VCCW
gulp.task "wp-replace", ->
  gulp.src config.wp.dir+"/provision/default.yml"
  .pipe replace "Welcome to the VCCW", config.wp.siteName
  .pipe replace "wordpress.local", config.wp.url
  .pipe replace "en_US", "ja"
  .pipe replace "192.168.33.10", config.wp.ip
  .pipe gulpif config.wp.plugin, replace /plugins:[\s\S]*tinymce-templates/,config.wp.pluginList
  .pipe gulp.dest config.wp.name+"/provision/"

# Download _s
gulp.task "wp-themeinit", shell.task(
  ["git clone https://github.com/Automattic/_s"+" "+config.wp.dir+"/www/wordpress/wp-content/themes/"+config.wp.themeName]
)



# vagrant up
gulp.task "up", shell.task(
  ["cd "+config.wp.dir+" && vagrant up"]
)

# vagrant halt
gulp.task "halt", shell.task(
  ["cd "+config.wp.dir+" && vagrant halt"]
)

# vagrant provison
gulp.task "provision", shell.task(
  ["cd "+config.wp.dir+" && vagrant provision"]
)


# Wordpress init
gulp.task "wp-init", () -> runSequence(
  "wp-dl",
  "wp-replace",
  "wp-themeinit",
)
