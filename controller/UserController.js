const userService = require('../service/adminService');


module.exports = {
    registerRequset: async (req, res) => {
        const imgFile = req.file;
        const {
            latitude,
            lognitude,
            type,
            image
        } = req.body;

        await userService.register(
            latitude,
            lognitude,
            type,
            image,
            res);

        return res;
    },

    findRegistered: async (req, res) => {
        await userService.findRegistered(
            res);

        return res;
    },
}