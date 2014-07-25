/**
 * Admin routes
 */
var express = require('express');
var router = express.Router();

// Controllers
var adminLogin = require('../controllers/admin/login');
var adminRegister = require('../controllers/admin/register');

// Routing
router.get('/', adminLogin.home);
router.get('/login', adminLogin.login);
router.post('/login.json', adminLogin.postJson);
router.get('/register', adminRegister.register);
router.post('/register.json', adminRegister.postJson);
router.get('/register-apply', adminRegister.apply);
router.get('/register-decline', adminRegister.decline);

// Release
module.exports = router;