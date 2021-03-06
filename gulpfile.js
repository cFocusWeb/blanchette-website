const gulp = require('gulp');
const imagemin = require("gulp-imagemin");
const imageresize = require('gulp-image-resize');
const parallel = require("concurrent-transform");
var runSequence = require('run-sequence');
var del = require('del');
var exec = require('child_process').exec;

// image resizing variables
const imagefull = 1920;
const imagehalf = 1024;
const imagequart = 600;
const imagethumb = 80;

// clean images from dir
gulp.task("clean-image", function(){
  return del([
    'themes/blanchette/static/img/**/*',
    'themes/blanchette/static/quart/img/**/*',
    'themes/blanchette/static/half/img/**/*',
    'themes/blanchette/static/thumb/img/**/*',
    // we don't want to clean this file though so we negate the pattern
    '!themes/blanchette/static/img/ico',
    '!themes/blanchette/static/img/ico/*',
    '!themes/blanchette/static/img/logos',
    '!themes/blanchette/static/img/logos/*'
  ]);
});
// resize and optimize images
gulp.task("image-resize", () => {
  return gulp.src("themes/blanchette/source-images/*/*.{jpg,png,jpeg,gif}")
    .pipe(imageresize({ width: imagefull }))
    .pipe(gulp.dest("themes/blanchette/static/img"))
    .pipe(imageresize({ width: imagehalf }))
    .pipe(gulp.dest("themes/blanchette/static/half/img"))
    .pipe(imageresize({ width: imagequart }))
    .pipe(gulp.dest("themes/blanchette/static/quart/img"))
    .pipe(imageresize({ width: imagethumb }))
    .pipe(gulp.dest("themes/blanchette/static/thumb/img"));
});

// hugo production call
gulp.task("hugo", function (cb) {
  exec('hugo --cleanDestinationDir', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

// watching images and resizing
gulp.task("watch", function() {
  gulp.watch('themes/blanchette/source-images/*.{jpg,png,jpeg,gif}', function(){ runSequence('clean-image', 'image-resize') });
});

// watching images and resizing
gulp.task("dev",  function(callback) {
  runSequence('clean-image',
              'image-resize',
              'watch');
});

// optimizing images and calling hugo for production
gulp.task("prod",  function(callback) {
  runSequence('clean-image',
              'image-resize',
              'hugo');
});
