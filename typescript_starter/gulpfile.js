/*eslint-env node  */
var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var tslint = require("gulp-tslint");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");

var tsProject = ts.createProject('tsconfig.json');
var webpackConfig = require("./webpack.config.js");

// Compile all typescript sources in "ts"
gulp.task('compileTypescript', function () {
  var tsResult = tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject));
  return tsResult.js
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest('src'));
});

gulp.task("serve", function() {
  webpackConfig.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/");
  var myConfig = Object.create(webpackConfig);
  myConfig.devtool = "eval";
  myConfig.debug = true;

  var server = new WebpackDevServer(webpack(myConfig), {
    publicPath: myConfig.output.publicPath,
    contentBase: "app",
    hot: true,
    inline: true,
    stats: {
      color: true
    }
  });

  server.listen(8080, "localhost", function(err) {
    if (err) {
      throw new gutil.PluginError("webpack-dev-server", err);
    }

    // Server listening
    gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
  });
});

// Lint the typescript files
gulp.task("tslint", function() {
  gulp.src("ts/**/*.ts")
    .pipe(tslint({ formatter: "verbose" }))
    .pipe(tslint.report());
});

// Watch for changes
gulp.task("watch", function() {
  gulp.watch(['ts/**/*.ts'], ['compileTypescript']);
});
