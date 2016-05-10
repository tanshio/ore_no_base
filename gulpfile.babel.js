"use strict"

// Gulp Setup

import gulp from 'gulp'
import minimist from 'minimist'
import gutil from 'gulp-util'
import requireDir from 'require-dir'

const minimistOption = {
  string: 'env',
  "default": {
    env: process.env.NODE_ENV || 'development'
  }
};

const options = minimist(process.argv.slice(2), minimistOption);

let isProduction = false;

if (options.env === 'production') {
  isProduction = true;
}

gutil.log('[env]', gutil.colors.yellow(options.env), '[isProduction]', gutil.colors.yellow(isProduction));

requireDir("./gulp/tasks", {
  recurse: true
});
