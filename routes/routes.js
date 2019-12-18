var express = require('express');
var userController = require('../controllers/userController');
var accountController = require('../controllers/accountController');
var testController = require('../controllers/testController');
var auth = require('../security/auth');

var router = express.Router();

router.post('/users', auth.authorize, userController.create);
router.get('/users', auth.authorize, userController.get);
router.get('/users/:id', auth.isAdmin, userController.getById);
router.put('/users/:id', auth.isAdmin, userController.update);
router.delete('/users/:id', auth.isAdmin, userController.remove);

router.post('/login', accountController.authenticate);

router.get('/test', testController.sample);

module.exports = router;