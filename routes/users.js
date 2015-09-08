/* ROUTEs
  get /login -> render login
  post /login -> authenticate -> attach info

*/

var router = require('express').Router();

router.get('/login',function(req, res, next){
  res.render('login');
  return  next();
});

router.post('/login',function(req,res, next){
  //auth wid database then attach info
});

router.post('/logout',function(req, res, next){
  // destroy sessions dont forget to call NEXT
})
