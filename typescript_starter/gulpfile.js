/*eslint-env node  */
var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var tslint = require("gulp-tslint");

var tsProject = ts.createProject('tsconfig.json');

// Compile all typescript sources in "ts"
gulp.task('compileTypescript', function () {
  var tsResult = tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject));
  return tsResult.js
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest('src'));
});


gulp.task("tslint", function() {
  gulp.src("ts/**/*.ts")
    .pipe(tslint({ formatter: "verbose" }))
    .pipe(tslint.report());
});

// Watch for changes
gulp.task("watch", function() {
  gulp.watch(['ts/**/*.ts'], ['compileTypescript']);
});
