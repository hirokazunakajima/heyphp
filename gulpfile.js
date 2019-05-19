var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', function() {

    browserSync.init({
        proxy: "hirokazunakajima.local/code/"
    });

    gulp.watch("./../*.php").on('change', browserSync.reload);
});


gulp.task('watch', ['serve']);