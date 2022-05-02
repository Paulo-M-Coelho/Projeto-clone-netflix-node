const express = require('express');
const router = express.Router();
const userContoller = require('../controllers/userController');
const auth = require('../controllers/authController')


router.get('/register', userContoller.pageRegister);
router.get('/login', userContoller.pageLogin)

router.post('/register',express.urlencoded({extended:true}), userContoller.register);

router.post('/login',express.urlencoded({extended:true}),userContoller.login);

router.post('/logout',auth,express.urlencoded({extended:true}),userContoller.logout)

module.exports = router