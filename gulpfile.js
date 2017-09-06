// Sass configuration
var gulp = require('gulp'),
sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('style.scss')
        .pipe(sass())
        .pipe(gulp.dest(function (f) {
            return 'public/static/css/';
        }))
});

gulp.task('default', ['sass'], function () {
    gulp.watch('style.scss', ['sass']);
})
