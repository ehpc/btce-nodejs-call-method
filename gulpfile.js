var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	jscs = require('gulp-jscs');

gulp.task('jshint', function () {
	return gulp
		.src(['index.js', 'gulpfile.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(jshint.reporter('fail'));
});

gulp.task('jscs', function () {
	return gulp
		.src('index.js')
		.pipe(jscs())
		.pipe(jscs.reporter())
		.pipe(jscs.reporter('fail'));
});

// All at once
gulp.task('default', ['jshint', 'jscs']);
