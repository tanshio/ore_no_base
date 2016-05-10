import gulp from 'gulp'
import pug from 'gulp-pug'
import browserSync from 'browser-sync'

import config from "../../config/config.json"
import data from "../../config/data.json"

import gulpLoadPlugins from 'gulp-load-plugins'
const $ = gulpLoadPlugins()

gulp.task("pug", function() {
  var YOUR_LOCALS;
  YOUR_LOCALS = {};
  return gulp.src([config.pug.src + "**/*.pug", "!" + config.pug.src + "include/**/*.pug", "!" + config.pug.src + "**/_*.pug"]).pipe($.plumber({
    errorHandler: $.notify.onError("<%= error.message %>")
  })).pipe($.data(function(file) {
    var origin, page_url, path, root, site_url, textAfter, urlTemp;
    if (file) {
      root = process.cwd();
      origin = file.path;
      textAfter = origin.replace(root + "/" + config.pug.src, "");
      path = textAfter.replace(".pug", "");
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
  })).pipe($.pug({
    pretty: true
  })).pipe(gulp.dest(config.pug.dist)).on("end", browserSync.reload);
});
