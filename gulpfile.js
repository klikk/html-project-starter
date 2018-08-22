const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('./src/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({
            browsers: ['last 3 versions']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('scripts', function() {
    return gulp.src('./src/js/**/*.js')
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('copy-images', function () {
    return gulp
        .src('./src/img/**/*')
        .pipe(gulp.dest('./dist/img'));
});

// Default task
gulp.task('default', gulp.parallel('sass', 'scripts', 'copy-images'));