/**
 * Created by jonny on 2/5/15.
 */
/**
 * Allows us to auto-reload browser when developing frontend
 * To make this work run "gulp" (w/out the quotes) in terminal
 * npm install --save-dev gulp
 * npm install --save-dev gulp-watch
 * npm install --save-dev gulp-livereload
 * npm install --save-dev gulp-less
 * npm install --save-dev gulp-webserver
 */


// plugins
var gulp = require('gulp');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var less = require('gulp-less');
var webserver = require('gulp-webserver');
//var connect = require('gulp-connect');

//gulp.task('connect', function(){
//    connect.server({
//        root: 'app/',
//        livereload: true,
//        port: 8000,
//        open: true
//    });
//});


gulp.task('js', function() {
    gulp.src(['*.js', 'views/**/*.js'])
});

gulp.task('html', function() {
    gulp.src(['*.html', 'views/**/*.html'])
});

gulp.task('css', function() {
    gulp.src('/css/*.css')
});

gulp.task('watch', function() {
    gulp.watch(['*.js', 'views/**/*.js'], ['js']);
    gulp.watch('css/*.css', ['css']);
    gulp.watch(['*.html', 'views/**/*.html'], ['html']);
})

gulp.task('webserver', function() {
    gulp.src('jonwood.me/')
        .pipe(webserver({
            livereload: true,
            open: true,
            port: 8080
            }));
});

gulp.task('default', ['watch', 'js', 'html', 'css', 'webserver']);