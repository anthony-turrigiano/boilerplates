//path
var path = require("path");

//config
var config = require(path.resolve("./config/config"));

//express
var express = require("express");
var app = express();

//static files
app.use("/public", express.static(path.resolve(config.path.src.public)));

//modules
require("./modules/modules")(app);

//routes
require("./routes/routes")(app);

//export app
module.exports = app;