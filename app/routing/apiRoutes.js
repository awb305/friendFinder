// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends= require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
    console.log('it worked');
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    console.log(req.body);

    let input = req.body; 
    let inputScores = input.scores;

    let diffArray = [];



   for(let i = 0; i<friends.length; i++){

      let compare = friends[i].scores;

      console.log("compare", compare);
      console.log("inputScores", inputScores);

      let totalDiff = 0;
      
      for(let j = 0; j< inputScores.length; j++){
        totalDiff += Math.abs(inputScores[j] - compare[j]);
      }
      
      diffArray.push(totalDiff);
    }

    let min = 500; 
    let match = 500;

    console.log("diff array", diffArray);

    for(let i = 0; i < diffArray.length; i++){
     if(diffArray[i] < match){
       match = diffArray[i];
       min = i;

     }
    }



    console.log("match", min);
   
    console.log("matching friend", friends[min]);
    
    friends.push(input);

    console.log(friends);
    res.json(friends[min]);

  });



  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    tableData = [];
    waitListData = [];

    console.log(tableData);
  });
};

