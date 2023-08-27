const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./utils/database");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const Product = require("./models/productModel");
const User = require("./models/userModel");

const server = express();
dotenv.config();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("API is running successfully ...");
});

server.use("/api/users", userRoutes);
server.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

sequelize
  .sync()
  .then((result) => {
    server.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
