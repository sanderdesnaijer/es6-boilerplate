const gulp  = require('gulp');
const gutil = require('gulp-util');
const jscs = require('gulp-jscs');	
const config = require('../config.json');

// lint js code
gulp.task('jslint', () => {
	
	// src
	const filePath = 'js/**/*.js';
	const src = config.paths.src;

	// run task
	const run = (e, path) => {
		gulp.src(src + 'js/**/*.js')
			.pipe(jscs())
    		.pipe(jscs.reporter());
	};

	// watch task
	if (gutil.env.dev) {
		gulp.watch(filePath, { cwd: src }, file => {
			gutil.log(file);
			run();
		});
	}

	return run();
});