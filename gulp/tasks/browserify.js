'use strict';

const browserify = require('browserify');
const config = require('../config');
const partialify = require('partialify');
const minifyify = require('minifyify');
const babelify = require('babelify');
const gulp = require('gulp');
const debug = require('gulp-debug');
const rename = require('gulp-rename');
const source = require('vinyl-source-stream');
const bs = require('browser-sync').get('devServer');

// Browserify
gulp.task('browserify', ['jshint'], function() {
  return browserify({debug: true})
    .add('./app/scripts/main.js')
    .transform('babelify', {presets: ['es2015']})
    .transform('partialify') // Transform to allow requireing of templates
    .plugin('minifyify', {output: './.tmp/scripts/bundle.map'})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./.tmp/scripts'))
    .pipe(bs.reload({stream: true}));
});

