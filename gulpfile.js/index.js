const { task, src, dest } = require('gulp');
const { pipeline } = require('readable-stream');
const { default: uglify } = require('gulp-uglify-es');

require("@babel/register");

const defaultTasks = require('./defaultTask.js')

task('default', cb => {
    defaultTasks.log('index.js');
    defaultTasks.input('Hi');
    cb();
});

task('build', () => pipeline(
    src('src/*.js'),
    uglify(),
    dest('./dist'))
);
