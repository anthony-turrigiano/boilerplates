module.exports = function(gulp, plugins, config){
    return function(){
        return gulp
                .src(config.path.src.public + "/**/*.js")  
                .pipe(plugins.gulpJSHint())
                .pipe(plugins.gulpJSHint.reporter('jshint-stylish'));
    };  
};