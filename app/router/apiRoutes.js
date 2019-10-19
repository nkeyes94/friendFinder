// * Requiring our Friends file
var friends = require("../data/friends");
module.exports = function(app) {

    // * Route to get friends from the list
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        app.post("/api/friends", function(req, res) {
            var bestFriend = {
                name: "",
                photo: "",
            };
    
            var user = req.body;
            var userScores = user.scores;
            var totalDifference;
    
            for (var i = 0; i < friends.length; i++) {
                var currentFriend = friends[i];
                totalDifference = 0;
    
                console.log(currentFriend.name);
    
                for (var j = 0; j < currentFriend.scores.length; j++) {
                    var currentFriendScore = currentFriend.scores[j];
                    var currentUserScore = userScores[j];
    
                    totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
                }
    
                if (totalDifference <= bestMatch.friendDifference) {
                    bestMatch.name = currentFriend.name;
                    bestMatch.photo = currentFriend.photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
            res.json(bestMatch);
    })
})};