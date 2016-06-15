var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

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

// Watch for changes
gulp.task("watch", function() {
  gulp.watch(['ts/**/*.ts'], ['compileTypescript']);
});
