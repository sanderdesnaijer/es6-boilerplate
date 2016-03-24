'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const watchify = require('watchify');
const babelify = require('babelify');
const config = require('../config.json');
const uglify = require('gulp-uglify');
const buffer = require('vinyl-buffer');

// build js file
gulp.task('scripts', () => {

	const filePath = 'js/**/*.js';
	const src = config.paths.src;
	const dest = config.paths.dest;
	const entry = 'js/app.js';

	const run = (e, path, watch) => {
		let bundler;
		let rebundle;

			// browserify options
			bundler = browserify(entry, {
				debug : gutil.env.dev,
				cache : {},
				basedir: src,
				packageCache : {},
				fullPaths : true
			});

			// watchify task
			if (gutil.env.dev) {
				bundler = watchify(bundler).on('log', ev => gutil.log(ev));
			};

			bundler.transform(babelify);

			rebundle = (ev) => {			
				// log changed file
				ev !== undefined ? gutil.log(ev) : false;	

				// build stream
				if (gutil.env.dev) {
					return bundler.bundle()
						.on('error', gutil.log)
						.pipe(source('scripts.js'))		
						.pipe(gulp.dest(dest + 'js/'));
				} else {
					return bundler.bundle()
						.on('error', gutil.log)
						.pipe(source('scripts.js'))		
						.pipe(buffer())			
						.pipe(uglify())
						.pipe(gulp.dest(dest + 'js/'));
				};			
  			};


			bundler.on('update', rebundle);

			return rebundle();
		};
	
	return run();
});	