// * Requiring our Friends file
var friends = require("../data/friends");
module.exports = function(app) {

    // * Route to get friends from the list
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function(req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity
        };
        console.log("IN CALL")
        console.log(req.body.score);
        console.log(friends);
        var userScore = req.body.score;
        var totalDifference;
        for(let i = 0; i < friends.length; i++){
            var curFriend = friends[i];
            console.log(curFriend);
            console.log(userScore.length);
            totalDifference = 0;
            for(let x = 0; x < userScore.length; x++){
                var curFrScore = curFriend.scores[x];
                var curUsScore = userScore[x];
                console.log(curFrScore);
                console.log(curUsScore);
                totalDifference += Math.abs(parseInt(curUsScore) - parseInt(curFrScore));
            }

            if (totalDifference <= bestMatch.friendDifference) {
                bestMatch.name = curFriend.name;
                bestMatch.photo = curFriend.photo;
                bestMatch.friendDifference = totalDifference;
            }
            console.log(bestMatch.name);
        }
    });
};