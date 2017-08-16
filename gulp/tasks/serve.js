'use strict';

const config = require('../config');
const gulp = require('gulp');
const bs = require('browser-sync').get('devServer');
const reload = bs.reload;

gulp.task('serve', ['styles', 'browserify', 'images', 'fonts'], function(cb) {
  bs.init({
    notify: false,
    port: 9000,
    browser: ['chrome'],
    server: {
      baseDir: ['./.tmp', './app']
    }
  });

  // Watch assets & .html files
  gulp.watch([
    './app/*',
    './.tmp/fonts/**/*',
    './.tmp/images/**/*'
  ]).on('change', reload);
  // Watch .css files
  gulp.watch('./app/styles/**/*.scss', ['styles']);
  // Watch .js files
  gulp.watch('./app/scripts/**/*.js', ['browserify']);
  // Watch image files
  gulp.watch('./app/images/**/*', ['images']);
  // Watch fonts files
  gulp.watch('./app/fonts/**/*', ['fonts']);

  cb();
});
