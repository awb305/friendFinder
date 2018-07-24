// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
// Sets up the Express app to handle data parsing
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());


// =============================================================================
//Program here

require(path.join(__dirname,"routing/apiRoutes.js"), function(req, res){

    console.log("path found");



})




// =============================================================================



// =============================================================================
// LISTENER
// Start the server
// =============================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  