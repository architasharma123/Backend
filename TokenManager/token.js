var jwt = require('jsonwebtoken');
//var config = require('../config');

function auth(req, res, next) {
    console.log(req.userId,"skkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
//  var token = req.headers['x-access-token'];
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader

  if (!token)
    return res.status(403).send({ error: "Authorization Required", message: 'Failed to authenticate token.' });
    
  jwt.verify(token,"longer-secret-key-is-better", function(err, decoded) {
    if (err)
    return res.status(403).send({ error: err, message: 'Failed to authenticate token.'});
    
    // if everything good, save to request for use in other routes
    req.user = decoded.user;
    if(decoded.user.otp == req.body.otp){
     
     next()

    }else{
        return res.status(404).send({message:"Invalid user token"})
    }
  
  });
};

module.exports = 
    auth;