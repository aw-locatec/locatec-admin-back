const util = require('../modules/util');
const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const productMethod = require('../method/productMethod');
const crypto = require('crypto');


module.exports = {
  register: async (
    latitude,
    lognitude,
    type,
    image,
    res
  ) => {
    if (!latitude|| !lognitude|| !type|| !image) {
      console.log('필요값 누락');

      return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
    try {
      const location = await productMethod.create(latitude, lognitude, type, iamge);

      res.status(statusCode.OK).send(util.success(statusCode.OK, "사용자 location 요청 성공", {
        location
      }));

      return;
    } catch (err) {
      console.error(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, "사용자 location 요청 실패"));

      return;
    }
  },
  findRegistered: async (
    latitude,
    lognitude,
    type,
    image,
    res
  ) => {
    if (!latitude|| !lognitude|| !type|| !image) {
      console.log('필요값 누락');

      return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
    try {
      const location = await productMethod.findAll();

      res.status(statusCode.OK).send(util.success(statusCode.OK, "등록 완료된 location 모두 조회 성공", {
        location
      }));

      return;
    } catch (err) {
      console.error(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, "등록 완료된 location 모두 조회 실패"));

      return;
    }
  },
}