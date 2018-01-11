//require data model
var Category = require('../../data/db/models').Category;
var SubCategory = require('../../data/db/models').SubCategory;

//access category
exports.getCategories = function (req, res, next) {
    Category.all().then(categories => {
        res.send(categories);
    });
};

exports.getById = function (req, res, next) {
    res.send(req.params.id);
};

exports.getByName = function (req, res, next) {
    res.send(res.params.name);
}
exports.add = function (req, res, next) {
    if(!req.body)
      res.sendStatus(400);
    else {
      res.send(req.body);
    }
};

exports.delete = function (req, res, next) {
    res.send(req.params.id);
};

exports.update = function (req, res, next) {
    res.send(req.body);
};

//access subcategory

exports.getAllSubcategories = function (req, res, next) {
    res.send('get all subcategory');
};

exports.getSubCategories = function (req, res, next) {
    res.send(req.params.catId);
};

exports.getSubCategoryById = function (req, res, next) {
    res.send(req.params.id);
};

exports.getSubCategoryByName = function (req, res, next) {
    res.send(res.params.name);
}
exports.addSubcategory = function (req, res, next) {
    if(!req.body)
      res.sendStatus(400);
    else {
      res.send(req.body);
    }
};

exports.deleteSubcategory = function (req, res, next) {
    res.send(req.params.id);
};

exports.updateSubcategory = function (req, res, next) {
    res.send(req.body);
};