var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	jscs = require('gulp-jscs'),
	mocha = require('gulp-mocha');

gulp.task('jshint', function () {
	return gulp
		.src(['index.js', 'gulpfile.js', 'test/*.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(jshint.reporter('fail'));
});

gulp.task('jscs', function () {
	return gulp
		.src(['index.js', 'test/*.js'])
		.pipe(jscs())
		.pipe(jscs.reporter())
		.pipe(jscs.reporter('fail'));
});

gulp.task('mocha', function () {
	return gulp
		.src('test/*.js')
		.pipe(mocha());
});

gulp.task('default', ['jshint', 'jscs', 'mocha']);
