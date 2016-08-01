//configuration
var config = require("./config/config");

//gulp 
var gulp = require("gulp");

//gulp-load-plugins
var plugins = require("gulp-load-plugins")({
	rename : {
	    "gulp-jshint" : "gulpJSHint"
	},
	pattern : ["*"]
});

//Tasks
gulp.task("build", require(config.path.gulpTasks + "/build")(gulp, plugins, config));
gulp.task("build-jshint", require(config.path.gulpTasks + "/build.jshint")(gulp, plugins, config));
gulp.task("build-jslint", require(config.path.gulpTasks + "/build.jslint")(gulp, plugins, config));