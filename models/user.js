module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    loginId: {
      type: DataTypes.STRING(30),
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
  }, {
    freezeTableName: true,
    timestamps: false,
  });
};