var express = require('express'),
  path = require('path'),
  logger = require('morgan'),
  session = require('express-session'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser');

var app = express();

app.set("view engine", 'jade');
app.set("views", path.join(__dirname,"views"));


app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({safe:true}));

app.get('/',function(req,res,next){
  res.render('exercise');
});

var PORT = process.env.PORT || 8080
app.listen(PORT, function(){
  console.log('listening at 8080');
});