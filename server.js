// * Importing our required packages
var express = require("express");
const path = require("path");
const { get } = require("request");

// * App & PORT config
var PORT = process.env.PORT || 8080;
var app = express();

// * Middleware config
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// * Importing our routers
require("./app/router/apiRoutes")(app);
require("./app/router/htmlRoutes")(app);

app.use(express.static(path.join(__dirname, "/public/router")));

app.listen(PORT, function(){
    console.log("Application listening on localhost:"+ PORT);
});