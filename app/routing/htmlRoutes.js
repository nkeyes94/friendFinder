// * Requiring path
var path = require("path");

module.exports = function(app) {

  // * When the survey route is hit, render the survey page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // * If the route cannot be found, the application will return to the home page
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

};
