'use strict';

const gulp  = require('gulp');
const gutil = require('gulp-util');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const config = require('../config.json');

// sass to css
gulp.task('styles', () => {	

	// src
	const filePath = 'sass/**/*.sass';
	const src = config.paths.src;		
	const dest = config.paths.dest + 'css';

	// run task
	const run = (e, path) => {

		if (gutil.env.dev) {	
			// dev has sourcemaps		
			gulp.src(src + filePath)
				.pipe(sourcemaps.init())
				.pipe(sass().on('error', sass.logError))
				.pipe(sourcemaps.write())		
				.pipe(gulp.dest(dest));

		} else {
			// default no sourcemaps
			gulp.src(src + filePath)
				.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
				.pipe(gulp.dest(dest));
		};				
	};

	// watch 
	if (gutil.env.dev) {
		gulp.watch(filePath, { cwd : src }, file => {
			gutil.log(file);
			run();
		});
	}

	return run();
});