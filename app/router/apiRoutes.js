// * Requiring our Friends file
var friends = require("../data/friends");
module.exports = function(app) {

    // * Route to get friends from the list
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function(req, res) {
        console.log("IN CALL")
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity
        };
        
        console.log(req.body.scores);
        var userScore = req.body.scores;

        for (var i = 0; i < friends.length; i++) {
            var currentFriend = friends[i];
            totalDifference = 0;

            for(let x = 0; x < userScore.length; x++){
                var currentFriendScore = friends.scores[x];
                var currentUserScore = userScore[x];

                var difference = currentFriendScore - currentUserScore;
                console.log(difference);
            }

        }
        res.json(bestMatch);
    });
};