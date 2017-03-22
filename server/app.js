/**
 * Created on : 20/03/2017
 * Author : Babar Bilal <babarxm@gmail.com>
 */

var express = require("express");

var bodyParser = require("body-parser");

var app = express();

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    req.baseURL = __dirname;
    next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true, limit: '50mb' }));

var http = require("http").createServer(app);
// var socket = require("socket.io")(http);
// socket.set("origins", "*");

// require("./socket")(socket);
app.use("/", require("./routes"));

var init = require("./initApp");
init.initCategories();

http.listen(3000, function(){
    console.log("Server is running on port", 3000);
})