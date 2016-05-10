import gulp from 'gulp'
import gulpif from 'gulp-if'
import replace from 'gulp-replace'
import shell from 'gulp-shell'
import yaml from 'js-yaml'
import fs from 'fs'

import config from "../../config/config.json"

var createYaml, plugin, pluginArr, pluginList;

gulp.task("wp-dl", shell.task(["git clone https://github.com/vccw-team/vccw" + " " + config.wp.dir]));

plugin = null;

if (config.wp.plugin) {
  plugin = true;
  pluginArr = ["plugins:"];
  config.wp.plugin.forEach(function(v) {
    return pluginArr.push("  - " + v);
  });
  pluginList = pluginArr.join("\n");
}

createYaml = (function(_this) {
  return function() {
    var data;
    data = yaml.dump(config.wp.site, {
      flowLevel: 3,
      styles: {
        "!!int": "hexadecimal",
        "!!null": "camelcase"
      }
    });
    console.log(data);
    return fs.writeFile(config.wp.dir + "site.yml", data, function(err) {
      return console.log(err);
    });
  };
})(this);

gulp.task("createYaml", function() {
  return createYaml();
});

gulp.task("wp-replace", function() {
  return gulp.src(config.wp.dir + "/provision/default.yml").pipe(replace("Welcome to the VCCW", config.wp.siteName)).pipe(replace("wordpress.local", config.wp.url)).pipe(replace("en_US", "ja")).pipe(replace("192.168.33.10", config.wp.ip)).pipe(gulpif(config.wp.plugin, replace(/plugins:[\s\S]*tinymce-templates/, config.wp.pluginList))).pipe(gulp.dest(config.wp.name + "/provision/"));
});

gulp.task("wp-themeinit", shell.task(["git clone https://github.com/Automattic/_s" + " " + config.wp.dir + "/www/wordpress/wp-content/themes/" + config.wp.themeName]));

gulp.task("up", shell.task(["cd " + config.wp.dir + " && vagrant up"]));

gulp.task("halt", shell.task(["cd " + config.wp.dir + " && vagrant halt"]));

gulp.task("provision", shell.task(["cd " + config.wp.dir + " && vagrant provision"]));

gulp.task("wp-init", function() {
  return runSequence("wp-dl", "wp-replace", "wp-themeinit");
});
