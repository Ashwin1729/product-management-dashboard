const Sequelize = require("sequelize");

const sequelize = require("../config/database");

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
  password: {
    type: Sequelize.STRING,
  },
  confirmed_password: {
    type: Sequelize.STRING,
  },
});

module.exports = User;
