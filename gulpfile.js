var gulp = require('gulp');
var exec = require('child_process').exec;
var plumber = require('gulp-plumber');

function build_js (done) {
  exec('parcel build src/index.js -d dist -o pytexas.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.error(stderr);
    done(err);
  });
}

function watch () {
  gulp.watch("src/**/*.js", gulp.parallel(build_js));
}

var defaultTasks = gulp.parallel(build_js);

gulp.task('watch', gulp.series(defaultTasks, watch));

gulp.task('default', defaultTasks);
