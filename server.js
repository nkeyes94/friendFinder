// * Importing our required packages
var express = require("express");

// * App & PORT config
var PORT = process.env.PORT || 8080;
var app = express();

// * Middleware config
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function(){
    console.log("Application listening on localhost:"+ PORT);
})