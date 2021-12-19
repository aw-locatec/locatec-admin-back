const {
  Product
} = require('../models');
const {
  Op
} = require("sequelize");

module.exports = {
  register: async (
    latitude, lognitude, type, iamgey) => {
    try {
      const product = await Product.create({
        latitude, lognitude, type, iamge
      });

      return product;
    } catch (err) {
      throw err;
    }
  },
  findById: async (id) => {
    try {
      const product = await Product.findOne({
        where: {
          id,
        },
        raw: true
      });

      return product;
    } catch (err) {
      throw err;
    }
  },
  findByIdIncludeDel: async (id) => {
    try {
      const product = await Product.findOne({
        where: {
          id,
        }
      });

      return product;
    } catch (err) {
      throw err;
    }
  },
  findAll: async () => {
    try {
      const products = await Product.findAll({
        // where: {
        //   isDeleted: false
        // }
      });

      return products;
    } catch (err) {
      throw err;
    }
  },
  change: async (
    id,
    latitude,
    lognitude,
    type,
    image) => {
    try {
      await Product.update({
        latitude,
        lognitude,
        type,
        image
      }, {
        where: {
          id
        }
      });
    } catch (err) {
      throw err;
    }
  },
  findAids: async () => {
    try {
      const products = await Product.findAll({
        where: {
          CategoryId: {
            [Op.or]: [7, 8, 9]
          },
          // isDeleted: false
        }
      });

      return products;
    } catch (err) {
      throw err;
    }
  },
  findMassage: async () => {
    try {
      const products = await Product.findAll({
        where: {
          CategoryId: {
            [Op.or]: [10, 11]
          },
          // isDeleted: false
        }
      });

      return products;
    } catch (err) {
      throw err;
    }
  },
  permit: async (
    productId
  ) => {
    try {
      const products = await Product.update({
        isRegister: false,
        where: {
          id: productId
        }
      });

      return products;
    } catch (err) {
      throw err;
    }
  },
  permit: async (
    productId
  ) => {
    try {
      const products = await Product.update({
        isRegister: true,
        where: {
          id: productId
        }
      });

      return products;
    } catch (err) {
      throw err;
    }
  },
  update: async (
    id,
    name,
    img1,
    img2,
    img3,
    price,
    count,
    CategoryId,
    detail,
    delivery) => {
    try {
      await Product.update({
        name,
        img1,
        img2,
        img3,
        price,
        count,
        CategoryId,
        detail,
        delivery
      }, {
        where: {
          id
        }
      });
    } catch (err) {
      throw err;
    }
  },
  sell: async (id, count, transaction) => {
    try {
      await Product.update({
        count,
      }, {
        where: {
          id
        },
        transaction
      });
    } catch (err) {
      throw err;
    }
  },
  delete: async (id) => {
    try {
      await Product.update({
        isDeleted: true
      }, {
        where: {
          id
        }
      });
    } catch (err) {
      throw err;
    }
  }
}