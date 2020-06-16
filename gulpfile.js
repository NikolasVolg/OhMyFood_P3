const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

const pathScssFiles = 'src/styles/*.scss'

gulp.task('styles', () => {
    return gulp.src(pathScssFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src'));
});

gulp.task('clean', () => {
    return del([
        'src/main.css',
    ]);
});

gulp.task('watch:style', () => {
    gulp.watch(pathScssFiles, (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
});

gulp.task('default', gulp.series(['clean', 'styles']));