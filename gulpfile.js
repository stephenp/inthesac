var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat')
    imagemin = require('gulp-imagemin'),
    connect = require('gulp-connect');

gulp.task('default', ['build', 'serve', 'watch']);

gulp.task('build', [
  'build-styles',
  'build-scripts',
  'build-views',
  'build-images',
  'build-fonts',
  'build-misc'
]);

gulp.task('build-styles', function() {
  return gulp.src([
      './bower_components/bootstrap-sass-official/assets/stylesheets/_bootstrap.scss',
      './src/styles/main.scss'
    ])
    .pipe(concat('main.scss'))
    .pipe(sass())
    .pipe(gulp.dest('./dist/styles/'));
});

gulp.task('build-scripts', function() {
  return gulp.src([
      './bower_components/angular/angular.js',
      './bower_components/angular-animate/angular-animate.js',
      './bower_components/angular-resource/angular-resource.js',
      './bower_components/angular-route/angular-route.js',
      './src/scripts/**/*'
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/scripts/'));
});

gulp.task('build-views', function() {
  return gulp.src('./src/views/**/*')
    .pipe(gulp.dest('./dist/views/'));
});

gulp.task('build-images', function() {
  return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images/'));
});

gulp.task('build-fonts', function() {
  return gulp.src('./bower_components/bootstrap-sass-official/assets/fonts/**/*')
    .pipe(gulp.dest('./dist/fonts/'));
});

gulp.task('build-misc', function() {
  return gulp.src(['./src/*.*'])
    .pipe(gulp.dest('./dist/'))
});

gulp.task('serve', ['build'], function() {
  connect.server({
    root: 'dist',
    port: 9000,
    livereload: true
  });
});

gulp.task('watch', function() {

});