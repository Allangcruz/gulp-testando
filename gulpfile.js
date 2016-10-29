'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	htmlmin = require('gulp-htmlmin');

gulp.task('default', ['sass', 'js', 'image-min', 'html-min', 'watch']);

gulp.task('sass', function () {
	return gulp.src('assets/src/sass/**/*.scss')
		.pipe(concat('style.min.js'))
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('assets/css'));
});

gulp.task('js', function() {
  return gulp.src('assets/src/js/**/*.js')
	.pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'));
});

gulp.task('image-min', function() {
  return gulp.src('assets/src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('assets/img'));
});

gulp.task('html-min', function() {
  return gulp.src('_html/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('.'));
});


gulp.task('watch', function() {
	gulp.watch('assets/src/sass/**/*.scss', ['sass']);
	gulp.watch('assets/src/js/**/*.js', ['js']);
	gulp.watch('assets/src/img/*', ['image-min']);
	gulp.watch('_html/**/*.html', ['html-min']);
});


