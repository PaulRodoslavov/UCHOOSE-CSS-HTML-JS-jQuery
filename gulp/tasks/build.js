'use strict';

const gulp = require('gulp');
const config = require('../config');

// Build
gulp.task('build', ['html', 'styles', 'browserify', 'images', 'fonts', 'extras'], function() {
  return gulp.src([
    './.tmp/images/**/*.{jpeg, png, svg}',
    './.tmp/styles/*.css',
    './.tmp/scripts/*.js',
    './.tmp/fonts/**/*'
  ], {base: '.tmp'})
    .pipe(gulp.dest(config.dist))
});
