const express = require('express');
const app = express();

var router = express.Router();
var path = __dirname + '/client/';

app.use(express.static('client'));

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  console.log(path)
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  console.log(path)

  res.sendFile(path + "/views/about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "/views/contact.html");
});

app.use("/",router);
//
// app.use("*",function(req,res){
//   res.sendFile(path + "404.html");
// });

app.listen(9000, () => {
  console.log('Example app listening on port 9000!');
});
