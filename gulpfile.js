var gulp = require('gulp'),
  del = require('del'),
  merge = require('merge2'),
  sass = require('node-sass');
  tsc = require('gulp-typescript'),
  flatten = require('gulp-flatten'),
  sourcemaps = require('gulp-sourcemaps'),
  tsProject = tsc.createProject('tsconfig.json'),
  inlineNg2Template = require('gulp-inline-ng2-template');

gulp.task('copy', function() {
  return gulp.src([''])
    .pipe(gulp.dest('lib'));
});

gulp.task('inline', function() {
  var tsResult = gulp.src(['typings/index.d.ts', 'src/**/*.ts'], {
      base: 'src'
    })
    .pipe(sourcemaps.init())
    .pipe(inlineNg2Template({ base: 'src' }))
    .pipe(tsc(tsProject));

  return merge([
    tsResult.dts
    .pipe(flatten())
    .pipe(gulp.dest('lib')),
    tsResult.js
    .pipe(flatten())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('lib'))
  ]);
});

gulp.task('cleanup', function() {
  return del('lib')
});

gulp.task('default', gulp.series('cleanup', 'inline'));
