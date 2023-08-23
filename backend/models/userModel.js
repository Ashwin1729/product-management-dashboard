const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const User = sequelize.define("user", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  full_name: {
    type: Sequelize.STRING,
  },

  email: {
    type: Sequelize.STRING,
  },
  username: {
    type: Sequelize.STRING,
  },
  pic: {
    type: Sequelize.STRING,
    defaultValue:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
  password: {
    type: Sequelize.STRING,
  },
  confirmed_password: {
    type: Sequelize.STRING,
  },
});

module.exports = User;
