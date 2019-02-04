var gulp = require('gulp');
var concat = require("gulp-concat");
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var exec = require('child_process').exec;
var plumber = require('gulp-plumber');

var dir = process.env.JS_BUILD_DIR || '.';

function build_js (done) {
  exec(`parcel build ${dir}/src/index.js -d ${dir}/dist -o pytexas.js`, function (err, stdout, stderr) {
    console.log(stdout);
    console.error(stderr);
    done(err);
  });
}

function create_dist (done) {
  exec(`mkdir ${dir}/dist/`, function (err, stdout, stderr) {
    console.log(stdout);
    console.error(stderr);
    done();
  });
}

function copy_files (done) {
  var commands = [
    `rm -rf ${dir}/dist/img`,
    `rm -rf ${dir}/dist/md`,
    `cp node_modules/vuetify/dist/vuetify.min.css dist`,
    `cp -r ${dir}/img/ ${dir}/dist/`,
    `cp -r ${dir}/md/ ${dir}/dist/`,
    `cp ${dir}/favicon.ico ${dir}/dist/`,
  ];
  exec(commands.join(' &&'), function (err, stdout, stderr) {
    console.log(stdout);
    console.error(stderr);
    done();
  });
}

function build_less (done) {
  return gulp
    .src([`${dir}/src/**/*.less`])
    .pipe(plumber())
    .pipe(less({paths: []}))
    .pipe(concat('global.css'))
    .pipe(gulp.dest(`${dir}/dist`));
}

function watch () {
  gulp.watch(`${dir}/src/**/*.less`, gulp.parallel(build_less));
  gulp.watch([`${dir}/src/**/*.js`, "src/**/*.vue"], gulp.parallel(build_js));
  gulp.watch(`${dir}/img/**/*`, gulp.parallel(copy_files));
  gulp.watch(`${dir}/md/**/*`, gulp.parallel(copy_files));
}

var defaultTasks = gulp.series(
  create_dist,
  gulp.parallel(build_js, build_less, copy_files)
);

gulp.task('watch', gulp.series(defaultTasks, watch));

gulp.task('default', defaultTasks);
