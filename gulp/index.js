'use strict';

const globby = require('globby');
const gulp   = require('gulp');
const gutil  = require('gulp-util');

globby.sync(__dirname + '/tasks/*.js').forEach(task => require(task));

// default gulp tasks
let defaultTasks = ['styles','templates','images','fonts','scripts','polyfill'];

// dev enviroment with watch tasks
if (gutil.env.dev) {
	defaultTasks.push('jslint');
}

gulp.task('default', defaultTasks);