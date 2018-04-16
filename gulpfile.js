// Initialize packges used in this Gulpfile
var gulp = require('gulp');
var sass = require('gulp-sass');
var wait = require('gulp-wait');
var useref = require('gulp-useref');

// Sass task: compiles the style.scss file into style.css in the same directory
gulp.task('sass', function(){
    return gulp.src('app/scss/style.scss')
        .pipe(wait(500))
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
});

// Images task: move the images to the dist folder (not worrying about optimizing them)
gulp.task('images', function(){
    return gulp.src('app/images/*')
        .pipe(wait(500))
        .pipe(gulp.dest('dist/images'));
});

// Watch tasks
gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/js/**/*.js', ['useref']);
    gulp.watch('app/index.html', ['useref']);
});

// Useref task: compiles the JS files
gulp.task('useref', function(){
    return gulp.src('app/index.html')
        .pipe(wait(500))
        .pipe(useref())
        .pipe(gulp.dest('dist'))
});

// Defines the default task to run, when you type in "gulp" into the command line.
// We want to run 'sass,' then run the watch task.
gulp.task('default', ['sass', 'useref', 'images', 'watch']);