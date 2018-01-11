//require route
var express = require('express');
var router = express.Router();

//require controller
var controller = require('./category-controller');

router.route('/')
  .get(controller.getCategories)
  .post(controller.add)
  .put(controller.update)

router.route('/:id(\\d{1,20})')
  .get(controller.getById)
  .delete(controller.delete);

router.get('/:name([a-z])', controller.getByName);

//route ro subcategory
router.route('/:catId(\\d{1,20})/subCategories')
  .get(controller.getSubCategories)
  .post(controller.addSubcategory)
  .put(controller.updateSubcategory)

router.route('/subCategories/:subId(\\d{1,20})')
  .get(controller.getBySubCategoryId)
  .delete(controller.deleteSubcategory)

router.get('/subCategories', controller.getAllSubcategories);
  
router.get('/subCategories/:name([a-z])', controller.getSubCategoryByName);

module.exports = router;