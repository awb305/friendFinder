// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());




// =============================================================================
//Program here

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);






// =============================================================================



// =============================================================================
// LISTENER
// Start the server
// =============================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  