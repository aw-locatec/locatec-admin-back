const express = require('express');
const passport = require('passport');
const router = express.Router();
const userController = require('../../controller/UserController');

router.post('/register/request', userController.registerRequset);
router.get('/register/reject', userController.reject);