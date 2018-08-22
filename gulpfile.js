var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var input = './src/scss/main.scss';
var output = './dist/css';

gulp.task('sass', function () {
    return gulp.src(input)
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({
            browsers: ['last 3 versions']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(output))
});

gulp.task('scripts', function() {
    return gulp.src('./src/js/**/*.js')
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('copy-images', function () {
    gulp
        .src('./src/img/**/*')
        // .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
});

// Default task
gulp.task('default', ['sass', 'scripts', 'copy-images']);