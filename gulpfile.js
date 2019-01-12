var gulp = require('gulp');
var concat = require("gulp-concat");
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var exec = require('child_process').exec;
var plumber = require('gulp-plumber');

function build_js (done) {
  exec('parcel build src/index.js -d dist -o pytexas.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.error(stderr);
    done(err);
  });
}

function create_dist (done) {
  exec('mkdir dist/', function (err, stdout, stderr) {
    console.log(stdout);
    console.error(stderr);
    done();
  });
}

function copy_files (done) {
  var commands = [
    'rm -rf dist/img',
    'rm -rf dist/md',
    'cp node_modules/vuetify/dist/vuetify.min.css dist',
    'cp -r img/ dist/',
    'cp -r md/ dist/',
    'cp favicon.ico dist/',
  ];
  exec(commands.join(' &&'), function (err, stdout, stderr) {
    console.log(stdout);
    console.error(stderr);
    done();
  });
}

function build_less (done) {
  return gulp
    .src(["src/**/*.less"])
    .pipe(plumber())
    .pipe(less({paths: []}))
    .pipe(concat('pytexas.css'))
    .pipe(gulp.dest("dist"));
}

function watch () {
  gulp.watch("src/**/*.less", gulp.parallel(build_less));
  gulp.watch("src/**/*.js", gulp.parallel(build_js));
  gulp.watch("img/**/*", gulp.parallel(copy_files));
  gulp.watch("md/**/*", gulp.parallel(copy_files));
}

var defaultTasks = gulp.series(
  create_dist,
  gulp.parallel(build_js, build_less, copy_files)
);

gulp.task('watch', gulp.series(defaultTasks, watch));

gulp.task('default', defaultTasks);
