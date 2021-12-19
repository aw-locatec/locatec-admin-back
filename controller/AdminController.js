const adminService = require('../service/adminService');
const passport = require('passport');

module.exports = {
  login: async (req, res) => {
    const {
      loginId,
      password,
    } = req.body;

    await userService.login(loginId, password, res);

    if (res.statusCode == 200) {
      req.session.passport = {
        "user": {
          "loginId": loginId,
          "isAdmin": true
        }
      };
      console.log(req.session);
      req.session.save();
      return res;
    }
  },
  register: async (req, res) => {
    const {
      latitude,
      lognitude,
      type,
      image
    } = req.body;
    await adminService.register(
      latitude,
      lognitude,
      type,
      image,
      res);

    return res;
  },
  change: async (req, res) => {
    const {
      productId
    } = req.body;
    await adminService.change(productId, res);

    return res;
  },
  delete: async (req, res) => {
    const {
      productId
    } = req.body;
    await adminService.delete(email, res);

    return res;
  },
  permit: async (req, res) => {
    const {
      productId
    } = req.body;
    await adminService.permit(productId, res);

    return res;
  },
  reject: async (req, res) => {
    const {
      productId
    } = req.body;
    await adminService.reject(productId, res);

    return res;
  },
  findNotRegisterd: async (req, res) => {
    await adminService.findNotRegisterd(productId, res);

    return res;
  },
  findAll: async (req, res) => {
    await adminService.findAll(res);

    return res;
  },
  
}