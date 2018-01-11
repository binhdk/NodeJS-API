//require data model
var User = require('../data/db/models').User;
var jwt = require('jsonwebtoken');

exports.authenticate = function (app){
 return function (req, res) {
  User.findOne({
    where: {email: req.body.email},
    attributes: ['email', 'password_hash']
  }).then(function(user) {
    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {
        var token = jwt.sign(user, app.get('superSecret'), {
        expiresInMinutes: 1440 
        });
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }   
    }
  }).catch(err => {
    res.send(err);
  });
};
}