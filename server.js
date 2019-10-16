// * Bringing in required packages
var express = require("express");

// * App and port config
var app = express();
var PORT = process.env.PORT || 8080;

// * Middleware config
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// * Bringing in our routers
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// * Final server config
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
