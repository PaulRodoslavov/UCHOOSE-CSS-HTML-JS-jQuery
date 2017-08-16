const config = require('../config');
const gulp = require('gulp');
const cached = require('gulp-changed');

gulp.task('fonts', function() {
  return gulp.src('./app/fonts/**/*', {base: 'app'})
    .pipe(cached('./.tmp/fonts'))
    .pipe(gulp.dest('./.tmp'));
});
