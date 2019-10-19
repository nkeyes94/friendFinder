// * Requiring our Friends file
var friends = require("../data/friends");
module.exports = function(app) {

    // * Route to get friends from the list
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

};