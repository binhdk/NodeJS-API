//require model
var Customer = require('../../data/db/models').Customer;

exports.getCustomers = function (req, res, next) {
    res.send('call get customer detail func');
};

exports.getById = function (req, res, next) {
    res.send('call get customer detail func');
};

exports.getByName = function (req, res, next) {
    res.send(req.params.name);
};

exports.filter = function (req, res, next) {
    res.send(req.body);
};

exports.delete = function (req, res, next) {
    res.send('call delete customer func');
};

exports.add = function (req, res, next) {
    res.send('call add customer function');
};
exports.update = function (req, res, next) {
    res.send('call update customer function');
};

//relate to transaction/buy
exports.getOrders = function (req, res, next) {
    res.send(req.params.id);
};