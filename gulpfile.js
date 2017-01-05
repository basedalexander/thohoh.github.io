'use strict';

var gulp = require('gulp');

// Build deps
var sass = require('gulp-sass');

// Dev deps
var sourcemaps = require('gulp-sourcemaps');

/* Setup ******/
var scss = {
    input : 'scss/**/*.scss',
    output: 'css',
    options: {
        errLogToConsole: true,
        outputStyle: 'compressed'
    }
};

gulp.task('sass', function () {
  return gulp
  .src(scss.input)
  .pipe(sass(scss.options)).on('error', sass.logError)
  .pipe(gulp.dest(scss.output));
});

gulp.task('sass-watch', function () {
  gulp.watch(scss.input, ['sass']);
});

gulp.task('default', ['sass', 'sass-watch']);
