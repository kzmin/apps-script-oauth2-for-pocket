const gulp = require('gulp');
const concat = require('gulp-concat');
const expose = require('gulp-expose');
const del = require('del');
const eslint = require('gulp-eslint');

gulp.task('dist', ['clean'], function() {
    gulp.src('src/*.js')
        .pipe(concat('OAuth2.gs'))
        .pipe(expose('this', 'OAuth2'))
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
    del([
        'dist/*'
    ]);
});

gulp.task('lint', () => {
    return gulp.src(['src/*.js', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});