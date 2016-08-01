//configuration
var config = require("./config/config");

//app module
var app = require("./src/server/app");

//http module
var http = require("http").createServer(app);

//http listen
http.listen(config.port, config.host, function(){
    console.log("Listening on %s:%s", config.host, config.port);
});