//require route
var express = require('express');
var router = express.Router();

//require controller
var controller = require('./search-controller');

// router.route('/')
// .get(controller.getProducts)
// .post(controller.add)
// .put(controller.update)

// router.route('/:id(\\d{1,20})')
// .get(controller.getById)
// .delete(controller.delete);

module.exports = router;

