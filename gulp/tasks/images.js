'use strict';

const gulp  = require('gulp');
const gutil = require('gulp-util');
const config = require('../config.json');

// move images to dist folder
gulp.task('images', () => {

	// src
	const filePath = 'img/**/*.{gif,jpg,png,svg}';
	const src = config.paths.src;
	const dest = config.paths.dest + 'img';

	// run task
	const run = (e, path) => {
		gulp.src(src + filePath)    
    		.pipe(gulp.dest(dest));
	};
	
	// watch task
	if (gutil.env.dev) {
		gulp.watch(filePath, { cwd: src }, file => {
			gutil.log(file);
			run();
		});
	};

	return run();
});