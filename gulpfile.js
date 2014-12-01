/*eslint-env node */
var gulp = require("gulp");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var eslint = require("gulp-eslint");
var mochaPhantomJS = require("gulp-mocha-phantomjs");

gulp.task("lint", function () {
    gulp.src("jquery.autogrow.js")
        .pipe(eslint.failOnError());
});


gulp.task("test", function () {
    return gulp
        .src("tests/testrunner.html")
        .pipe(mochaPhantomJS());
});

gulp.task("compress", function () {
    gulp.src("jquery.autogrow.js")
        .pipe(uglify())
        .pipe(rename("jquery.autogrow.min.js"))
        .pipe(gulp.dest("."));
});

gulp.task("default", ["lint", "test", "compress"]);
