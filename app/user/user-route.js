//require route
var express = require('express');
var router = express.Router();

//require controller
var controller = require('./user-controller');

router.route('/')
    .post(controller.add)
    .put(controller.update)
    .get(controller.getUsers);

router.route('/:id(\\d{1,20})')
    .get(controller.getById)
    .delete(controller.delete);

router.post('/login', controller.login);

router.post('/logout', controller.logout);

//require user role
router.get('/roles', controller.getRoles);
router.get('/roles/:roleId(\\d{1,20})', controller.getRoleById);

module.exports = router;