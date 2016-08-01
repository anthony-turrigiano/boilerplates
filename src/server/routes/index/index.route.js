// serve static module
var serve = require("serve-static");

//path module
var path = require("path");

//configuration
var config = require(path.resolve("./config/config"));

module.exports = function(app){
    app.use(serve(path.resolve(config.path.src.views + "/html"),{"index": ["index.html"]}));

    app.use("/*", function(req, res){
        res.sendFile(path.resolve(config.path.src.views + "/html/index.html"));
    });
};