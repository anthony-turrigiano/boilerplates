module.exports = function(gulp, plugins, config){
    return function(){
        return gulp
                    .watch(config.path.src.public + "/**/*.js", ['build-jshint']);
    };  
};