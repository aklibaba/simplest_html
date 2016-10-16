var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');

var sassSources = './sass/*.scss';
var sassDestination = './';
var reloadSources = ['**/*.html', '**/*.php', '**/*.css', '**/*.js'];


//used to check if gulpfile is working
// gulp.task('log', function (done, notDone) {
//     console.log('works?');
// });


var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

gulp.task('sass', function () {
    return gulp.src(sassSources)
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('./map'))
        .pipe(gulp.dest(sassDestination));

});
gulp.task('watch', ['sass'], function () {

    //start the livereload server, optionally livereload({ start: true });
    livereload.listen(35729);

    var timer = null;

    //reload function, applies delay to reload
    var reload = function (file) {
        timer = setTimeout(function () {
            livereload.changed(file.path);
        }, 1500)
    };

    gulp.watch(reloadSources).on('change', reload);

    gulp.watch(sassSources, ['sass']);
});

