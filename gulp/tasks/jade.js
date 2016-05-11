import gulp from 'gulp'
import jade from 'gulp-jade'
import browserSync from 'browser-sync'

import config from "../../config/config.json"
import data from "../../config/data.json"

import gulpLoadPlugins from 'gulp-load-plugins'
const $ = gulpLoadPlugins()

gulp.task("jade", function() {
  var YOUR_LOCALS;
  YOUR_LOCALS = {};
  return gulp.src([config.jade.src + "**/*.jade", "!" + config.jade.src + "include/**/*.jade", "!" + config.jade.src + "**/_*.jade"]).pipe($.plumber({
    errorHandler: $.notify.onError("<%= error.message %>")
  })).pipe($.data(function(file) {
    var origin, page_url, path, root, site_url, textAfter, urlTemp;
    if (file) {
      root = process.cwd();
      origin = file.path;
      textAfter = origin.replace(root + "/" + config.jade.src, "");
      path = textAfter.replace(".jade", "");
      if (data[path]) {
        site_url = "";
        page_url = "";
        if (config.root.staging === "true") {
          site_url = config.server.staging;
        } else {
          site_url = config.server.production;
        }
        urlTemp = path.split("/");
        if (path === "index") {
          page_url = "";
        } else {
          page_url = path + ".html";
        }
        return {
          "title": data[path]["title"],
          "keyword": data[path]["keyword"],
          "desc": data[path]["desc"],
          "path": path,
          "url": site_url + page_url,
          "site_name": data["index"]["title"]
        };
      } else {
        return {
          "title": null,
          "keyword": null,
          "desc": null
        };
      }
    }
  })).pipe($.jade({
    pretty: true
  })).pipe(gulp.dest(config.jade.dist)).on("end", browserSync.reload);
});
