// Initialize packges used in this Gulpfile
var gulp = require('gulp');
var sass = require('gulp-sass');
var wait = require('gulp-wait');

// Sass task: compiles the style.scss file into style.css in the same directory
gulp.task('sass', function(){
    return gulp.src('app/scss/style.scss')
        .pipe(wait(500))
        .pipe(sass())
        .pipe(gulp.dest('dist'))
});

// Watch task: watches for changes to *.scss, then runs the 'sass' task
gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
});

// Defines the default task to run, when you type in "gulp" into the command line.
// We want to run 'sass,' then run the watch task.
gulp.task('default', ['sass', 'watch']);