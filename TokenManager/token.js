var jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  console.log(req.user,"skkkkkkkkkkkkkkkkkkkkkkkkkkkkk")

  if (!token)
    return res.status(403).send({ error: "Authorization Required", message: 'Failed to authenticate the token.'});
    
jwt.verify(token,"longer-secret-key-is-better", function(err, decoded) {
  if (err)
  return res.status(500).send({message: "token required", message: 'Failed to authenticate token.' });
    
  // if everything good, save to request for use in other routes
  req.userId = decoded.id;
  next();
});
}

module.exports = 
    auth;