'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const babelify = require('babelify');
const uglify = require('gulp-uglify');
const buffer = require('vinyl-buffer');
const config = require('../config.json');

// build js file
gulp.task('polyfill', () => {

	const src = config.paths.src;
	const dest = config.paths.dest;
	const entry = 'js/polyfill.js';

	const run = () => {
		let	bundler = browserify(entry, {
				debug : false,
				basedir: src,
				fullPaths : true
			});

			return bundler.transform(babelify)
				.bundle()
				.on('error', gutil.log)
				.pipe(source('polyfill.js'))
				.pipe(buffer())
				.pipe(uglify())
				.pipe(gulp.dest(dest + 'js/'));;
		};
	
	return run();
});	