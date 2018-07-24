<<<<<<< HEAD
// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
=======
app.get("/survey", function(req,res){
    res.sendfile(path.join(__dirname,"survey.html"));
});

app.get("/", function(req, res){
    res.sendfile(path.join(__dirname, "survey.html"));
});
>>>>>>> 8d13165b7b58924c2af26feb6fa21b22c2097c9f
