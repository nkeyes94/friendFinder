//Express config
var express = require("express");
var app = express();

//Server port config
var PORT = process.env.PORT || 8080;

//Server listener
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:"+ PORT);
});
