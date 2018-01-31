const express = require('express');
const app = express();

var router = express.Router();
var path = __dirname + '/client/';

app.use(express.static('client'));

router.use(function (req,res,next) {
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about-us",function(req,res){
  res.sendFile(path + "/views/about.html");
});

router.get("/contact-us",function(req,res){
  res.sendFile(path + "/views/contact.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "/views/404.html");
});

app.listen(80, () => {
  console.log('listening on port 80!');
});
