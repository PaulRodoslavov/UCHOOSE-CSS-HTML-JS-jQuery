'use strict';

const config = require('../config');
const gulp = require('gulp');
const size = require('gulp-size');

gulp.task('html', function () {
  return gulp.src('app/*.html')
    .pipe(gulp.dest(config.dist))
    .pipe(size());
});
