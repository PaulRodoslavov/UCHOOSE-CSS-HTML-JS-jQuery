const gulp = require('gulp');

gulp.task('extras', function(cb) {
  gulp.src([
    'app/*',
    '!app/*.html',
    '!app/less'
  ], {dot: true})
    .pipe(gulp.dest('dist'));
  cb();
});
