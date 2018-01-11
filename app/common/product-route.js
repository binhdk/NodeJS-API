//require route
var express = require('express');
var router = express.Router();

//require controller
var controller = require('./product-controller');

router.route('/')
.get(controller.getProducts)
.post(controller.add)
.put(controller.update)

router.get('/:name([a-z])', controller.getByName);
route.get('/getByCategory/:catId(\\d{1,20})', controller.getByCategory);
router.get('/filter', controller.filter)

router.route('/:id(\\d{1,20})')
.get(controller.getById)
.delete(controller.delete);

module.exports = router;

