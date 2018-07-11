// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information 

var friends = require("../data/friends");

// ROUTING

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
   
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };
    
    console.log(req.body);

    //divide user's data
    var userData = req.body;
    var userScores = userData.scores;

    //calculate difference
    var totalDifference = 0;

    //loop thru friend's data
    for (var i=0; i < friends.length; i++) {
      console.log(friends[i]);
      totalDifference = 0;

      //loop thru friend's scores
      for (var j=0; j < friends[i].scores[j]; j++) {
        //calculate difference and store answer
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

        if (totalDifference <= bestMatch.friendDifference) {
          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
    }

    //save user's data
    friends.push(userData);
    //return user's bestMatch
    res.json(bestMatch);
  });
};