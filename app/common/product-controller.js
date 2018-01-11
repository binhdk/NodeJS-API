// require model 
var Product = require('../../data/db/models').Product;
var ProductAttribute = require('../../data/db/models').ProductAttribute;

exports.getProducts = function (req, res, next) {
    Product.all().then(products => {
        res.send(products);
    });
};

exports.getById = function (req, res, next) {
    Product.findById(res.params.id).then(product => {
        res.send(product);
    });
};

exports.getByName = function (req, res, next) {
    res.send(req.params.name);
};

exports.getByCategory = function (req, res, next) {
    res.send(req.params.catId);
};

exports.getByManifacture = function (req, res, next) {
    res.send(req.params.manifacture);
};

exports.filter = function (req, res, next) {
    res.send(req.body);
};

exports.delete = function (req, res, next) {
    Product.destroy({id: req.params.id}).then (row => {
        res.send('Delete successful!');
    });
};

exports.add = function (req, res, next) {
    var product = req.body;
    res.send(product);
};

exports.update = function (req, res, next) {
    res.send(req.body);
};