'use strict';

const config = require('../config');
const gulp = require('gulp');
const gulpIf = require('gulp-if');
const csso = require('gulp-csso');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const size = require('gulp-size');
const debug = require('gulp-debug');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const bs = require('browser-sync').get('devServer');

// Styles
gulp.task('styles', function () {
  return gulp.src('./app/styles/app.scss', {base: 'app'})
    .pipe(plumber({
      errorHandler: notify.onError(function(err) {
        return {
          title: 'styles',
          message: err.message
        }
      })
    }))
    .pipe(gulpIf(config.dev, sourcemaps.init()))
    .pipe(sass({
      style: config.dev ? 'expanded' : 'nested'
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(csso())
    .pipe(gulpIf(config.dev, sourcemaps.write('.')))
    .pipe(gulp.dest('./.tmp'))
    .pipe(bs.reload({stream: true}))
    .pipe(size());
});


