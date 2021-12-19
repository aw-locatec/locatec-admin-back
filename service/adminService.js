const util = require('../modules/util');
const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const userMethod = require('../method/userMethod');
const productMethod = require('../method/productMethod');
const crypto = require('crypto');

module.exports = {
  login: async (
    loginId,
    password,
    res
  ) => {
    if (!loginId || !password) {
      console.log('필요값 누락');

      return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
    try {
      const existUserId = await userMethod.readOneLoginId(loginId);

      res.status(statusCode.OK).send(util.success(statusCode.OK, "관리자 로그인 성공", {
        loginId,
        email
      }));

      return;
    } catch (err) {
      console.error(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, "관리자 로그인 실패"));

      return;
    }
  },
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
      const location = await productMethod.register(latitude, lognitude, type, iamge);

      res.status(statusCode.OK).send(util.success(statusCode.OK, "관리자 상품 직접 등록 성공", {
        location
      }));

      return;
    } catch (err) {
      console.error(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, "관리자 상품 직접 등록 실패"));

      return;
    }
  },
  change: async (
    productId,
    latitude,
    lognitude,
    type,
    image,
    res
  ) => {
    if (!productId) {
      console.log('필요값 누락');

      return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
    try {
      const location = await productMethod.change(productId, latitude, lognitude, type, image);

      res.status(statusCode.OK).send(util.success(statusCode.OK, "location 수정 성공", {
        location 
      }));

      return;
    } catch (err) {
      console.error(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, "location 수정 실패"));

      return;
    }
  },
  delete: async (
    productId,
    res
  ) => {
    if (!productId) {
      console.log('필요값 누락');

      return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
    try {
      const location = await productMethod.delete(productId);

      res.status(statusCode.OK).send(util.success(statusCode.OK, "location 삭제 성공", {
        location
      }));

      return;
    } catch (err) {
      console.error(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, "location 삭제 실패"));

      return;
    }
  },
  permit: async (
    productId,
    res
  ) => {
    if (!productId) {
      console.log('필요값 누락');

      return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
    try {
      const location = await productMethod.permit(productId);

      res.status(statusCode.OK).send(util.success(statusCode.OK, "location 등록 요청 수락 성공", {
        location
      }));

      return;
    } catch (err) {
      console.error(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, "location 등록 요청 수락 실패"));

      return;
    }
  },
  reject: async (
    productId,
    res
  ) => {
    if (!productId) {
      console.log('필요값 누락');

      return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
    try {
      const location = await productMethod.reject(loginId);

      res.status(statusCode.OK).send(util.success(statusCode.OK, "location 등록 요청 거절 성공", {
        location
      }));

      return;
    } catch (err) {
      console.error(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, "location 등록 요청 거절 실패"));

      return;
    }
  },
  findNotRegisterd: async (
    productId,
    res
  ) => {
    if (!productId) {
      console.log('필요값 누락');

      return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
    try {
      const location = await productMethod.findAll();

      res.status(statusCode.OK).send(util.success(statusCode.OK, "등록 요청 모두 확인 성공", {
        location
      }));

      return;
    } catch (err) {
      console.error(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, "등록 요청 모두 확인 실패"));

      return;
    }
  },
  findAll: async (res) => {
    try {
      const location = await productMethod.findAll();

      res.status(statusCode.OK).send(util.success(statusCode.OK, "location 모두 조회 성공", {
        location
      }));

      return;
    } catch (err) {
      console.error(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, "location 모두 조회 실패"));

      return;
    }
  },
}