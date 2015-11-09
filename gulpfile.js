var gulp = require('gulp'),
	minifyCss = require('gulp-minify-css'),
	rename = require("gulp-rename"),
	notify = require("gulp-notify");


gulp.task('default', function() {
   gulp.src('main.css')
    .pipe(minifyCss())
    .pipe(rename('main.min.css'))
    .pipe(notify('Gulp was Here!'))
    .pipe(gulp.dest(''));
});

gulp.task('watch', function(){
	gulp.watch('*.css', ['default'])
})