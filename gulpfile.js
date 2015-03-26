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
      './src/styles/main.scss'
    ])
    .pipe(concat('main.scss'))
    .pipe(sass())
    .pipe(gulp.dest('./dist/styles/'))
    .pipe(connect.reload());
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
    .pipe(gulp.dest('./dist/scripts/'))
    .pipe(connect.reload());
});

gulp.task('build-views', function() {
  return gulp.src('./src/views/**/*')
    .pipe(gulp.dest('./dist/views/'))
    .pipe(connect.reload());
});

gulp.task('build-images', function() {
  return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images/'))
    .pipe(connect.reload());
});

gulp.task('build-fonts', function() {
  return gulp.src([
      './bower_components/bootstrap-sass-official/assets/fonts/**/*',
      './src/fonts/**/*'
    ])
    .pipe(gulp.dest('./dist/fonts/'))
    .pipe(connect.reload());
});

gulp.task('build-misc', function() {
  return gulp.src(['./src/*.*'])
    .pipe(gulp.dest('./dist/'))
    .pipe(connect.reload())
});

gulp.task('watch', ['build'], function() {
  gulp.watch('./src/styles/**/*', ['build-styles']);
  gulp.watch('./src/scripts/**/*', ['build-scripts']);
  gulp.watch('./src/views/**/*', ['build-views']);
  gulp.watch('./src/images/**/*', ['build-images']);
  gulp.watch('./src/fonts/**/*', ['build-fonts']);
  gulp.watch('./src/*.*', ['build-misc']);
});

gulp.task('serve', ['build', 'watch'], function() {
  connect.server({
    root: 'dist',
    port: 9000,
    livereload: true
  });
});