const express = require('express');
const router = express.Router();
const upload = require('../../modules/multer');
const adminController = require('../../controller/AdminController');


router.post('/login', adminController.login);
router.post('/register', upload.single('img'), adminController.register);
router.post('/change', upload.single('img'),adminController.change);
router.post('/delete', adminController.delete);
router.post('/register/permit', adminController.permit);
router.post('/register/reject', adminController.reject);
router.get('/find/NotRegistered', adminController.findNotRegisterd);
router.get('/find/all', adminController.findAll);

module.exports = router;
