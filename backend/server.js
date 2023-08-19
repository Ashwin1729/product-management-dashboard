const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./utils/database");
const Product = require("./models/product");

const server = express();
dotenv.config();

server.get("/", (req, res) => {
  res.send("API is running successfully ...");
});

server.get("/api/products", (req, res) => {});
server.get("/api/products/:product_id", (req, res) => {});

const PORT = process.env.PORT || 5000;

sequelize
  .sync()
  .then((result) => {
    server.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
