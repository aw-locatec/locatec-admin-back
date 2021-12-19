const {
  User
} = require('../models');
const crypto = require('crypto');

module.exports = {
  readOneLoginId: async (loginId) => {
    try {
      const alreadyUser = await User.findOne({
        where: {
          loginId
        }
      });

      return alreadyUser;
    } catch (err) {
      throw err;
    }
  },
}