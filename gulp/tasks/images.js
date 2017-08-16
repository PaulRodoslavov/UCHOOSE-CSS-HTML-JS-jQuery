'use strict';

const config = require('../config');
const path = require('path');
const gulp = require('gulp');
const cache = require('gulp-cache');
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const rename = require('gulp-rename');
const size = require('gulp-size');
const bs = require('browser-sync').get('devServer');

// Images
gulp.task('images', function() {
	return gulp.src('app/images/**/*', {base: 'app'})
		.pipe(changed('./.tmp/images')) // Ignore unchanged files
		.pipe(imagemin()) // Optimize
		.pipe(gulp.dest('./.tmp'));
});

