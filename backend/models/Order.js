const { DataTypes } =
  require("sequelize");

const {
  sequelize
} = require("../config/db");

const Order =
  sequelize.define("Order", {

    username: {
      type: DataTypes.STRING,
      allowNull: false
    },

    product: {
      type: DataTypes.STRING,
      allowNull: false
    },

    location: {
      type: DataTypes.STRING,
      allowNull: false
    },

    deliveryDays: {
      type: DataTypes.INTEGER,
      allowNull: false
    }

  });

module.exports = Order;
