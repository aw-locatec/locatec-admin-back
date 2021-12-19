module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Product', {
    latitude: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    lognitude: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  }, {
    freezeTableName: true,
    timestamps: true,
  });
};