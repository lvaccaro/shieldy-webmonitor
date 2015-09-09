var express = require("express");
var app     = express();
var path    = require("path");

/*
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/html/index.html'));
  //__dirname : It will resolve to your project folder.
});*/

//app.use(app.router);
app.use(express.static(__dirname + '/html'));

app.listen(3000);

console.log("Running at Port 3000");
