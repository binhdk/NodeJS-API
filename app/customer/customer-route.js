//require route
var express = require('express');
var router = express.Router();

// require controller
var controller = require('./customer-controller')

//relate to customer account
router.route('/')
    .get(controller.getCustomers)
    .post(controller.add)
    .put(controller.update)

router.route('/:id(\\d{1,20})')
    .get(controller.getById)
    .delete(controller.delete);

router.get('/filter', controller.filter);

//relate to transaction/buy
router.get('/:id(\\d{1,20})/orders', controller.getOrders);


module.exports = router;