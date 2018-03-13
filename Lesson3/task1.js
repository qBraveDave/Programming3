var express = require("express");
var app = express();

app.get("/google", function(req, res){
   res.redirect("http://google.com");
});

app.get("/google/:search", function(req, res){
    var search = req.params.search;
    res.redirect("http://google.com/search?q=" + search);
 });

app.get("/*", function(req, res){
    res.send("<hr> 404. That's an error.Page not found <hr>");
 });

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
