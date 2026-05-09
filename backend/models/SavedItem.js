const { DataTypes } =
  require("sequelize");

const {
  sequelize
} = require("../config/db");

const SavedItem =
  sequelize.define("SavedItem", {

    username: {
      type: DataTypes.STRING,
      allowNull: false
    },

    product: {
      type: DataTypes.STRING,
      allowNull: false
    }

  });

module.exports = SavedItem;
