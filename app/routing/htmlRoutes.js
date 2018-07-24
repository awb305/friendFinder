app.get("/survey", function(req,res){
    res.sendfile(path.join(__dirname,"survey.html"));
});

app.get("/", function(req, res){
    res.sendfile(path.join(__dirname, "survey.html"));
});