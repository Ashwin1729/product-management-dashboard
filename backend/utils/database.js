const Sequelize = require("sequelize");

const sequelize = new Sequelize("product-management", "root", "MySQLRoot123", {
  dialect: "mysql",
  host: "localhost",
});

const test = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

test();

module.exports = sequelize;
