//require data model
var Order = require('../../data/db/models').Order;
var OrderDetail = require('../../data/db/models').OrderDetail;

//relate order
exports.getOrderById = function (req, res, next) {
    res.send(req.params.orderId);
};

exports.getOrders = function (req, res, next) {
    res.send('get all order');
};

exports.getOrderByCustomer = function (req, res, next) {
    res.send(req.params.customerId);
}

exports.filterOrders = function (req, res, next) {
    res.send(req.body);
}
exports.createOrder = function (req, res, next) {
    res.send(req.body);
};

exports.deleteOrder = function (req, res, next) {
    res.send(req.params.orderId);
};

exports.updateOrder = function (req, res, next) {
    res.send(req.body);
};

//relate order-detail
exports.getOrderDetailById = function (req, res, next) {
    res.send(req.params.orderDetailId);
};

exports.getOrderDetails = function (req, res, next) {
    res.send('get all order');
};

exports.getOrderDetailsByOrderId = function (req, res, next) {
    res.send(req.params.orderId);
};


exports.filterOrderDetails = function (req, res, next) {
    res.send(req.body);
}

exports.createOrderDetail = function (req, res, next) {
    res.send(req.body);
};

exports.deleteOrderDetail = function (req, res, next) {
    res.send(req.params.orderDetailId);
};

exports.updateOrderDetail = function (req, res, next) {
    res.send(req.body);
};


