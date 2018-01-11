// require data
var User = require('../../data/db/models/').User;

exports.getById = function (req, res, next) {
    User.findById(req.params.id).then(user => {
        res.send(user);
    });
   
};

exports.getUsers = function (req, res, next) {
    res.send('get user list');
};

exports.add = function (req, res, next) {
    res.send('add user');
};

exports.update = function (req, res, next) {
    res.send('update user');
};

exports.delete = function (req, res, next) {
    res.send('delete user');
};

exports.login = function (req, res, next) {
    res.send('login');
};

exports.logout = function (res, res, next) {
    res.send('logout');
};

//relate user role
exports.getRoles = function (req, res, next) {
    res.send('get all role');
};

exports.getRoleById = function (req, res, next) {
    res.send(req.params.roleId);
};


