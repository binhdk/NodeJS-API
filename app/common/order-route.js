//require route
var express = require('express');
var router = express.Router();

//require controller
var controller = require('./order-controller');

//route order
router.route('/')
  .get(controller.getOrders)
  .post(controller.createOrder)
  .put(controller.updateOrder)

router.route('/:id(\\d{1,20})')
  .get(controller.getOrderById)
  .delete(controller.deleteOrder);

router.get('/filter', controller.filterOrders);
  
//route order-detail
router.route('/:orderId(\\d{1,20})/orderdetail')
  .get(controller.getOrderDetailsByOrderId)
  .post(controller.createOrderDetail)
  .put(controller.updateOrderDetail)
router.route('/orderdetail/:orderDetailId(\\d{1,20})')
  .get(controller.getOrderDetailById)
  .delete(controller.deleteOrderDetail)

router.get('/orderdetail', controller.getAllSubcategories);
router.get('/orderdetail/filter', controller.filterOrderDetails);

module.exports = router;
