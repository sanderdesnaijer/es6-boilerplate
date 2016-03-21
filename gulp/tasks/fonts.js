'use strict';

const gulp  = require('gulp');
const gutil = require('gulp-util');
const config = require('../config.json');

// move fonts to dist folder
gulp.task('fonts', () => {

	// src
	const filePath = 'fonts/**/*.{eot,svg,ttf,woff,woff2}';
	const src = config.paths.src;
	const dest = config.paths.dest + 'fonts';

	// run task
	const run = (e, path) => {
		gulp.src(src + filePath)    
    		.pipe(gulp.dest(dest));
	};
	
	// watch task
	if (gutil.env.dev) {
		gulp.watch(filePath, { cwd: config.paths.src }, file => {
			gutil.log(file);
			run();
		});
	}

	return run();
});