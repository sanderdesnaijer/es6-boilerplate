'use strict';

const gulp  = require('gulp');
const gutil = require('gulp-util');
const config = require('../config.json');

// simple templates task
gulp.task('templates', () => {

	// src
	const filePath = '**/*.html';			
	const src = config.paths.src;
	const dest = config.paths.dest;

	// run task
	const run = (e, path) => {
		gulp.src(src + filePath)
			.pipe(gulp.dest(dest));
	};

	// watch
	if (gutil.env.dev) {
		gulp.watch(filePath, { cwd : config.paths.src }, file => {
			gutil.log(file);
			run();
		});
	}

	return run();
});