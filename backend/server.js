const express = require("express");
const path = require("path");

const dotenv = require("dotenv");
const sequelize = require("./config/database");

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddlewares");
const Product = require("./models/productModel");
const User = require("./models/userModel");

const server = express();
dotenv.config();

server.use(express.json());

server.use("/api/users", userRoutes);
server.use("/api/products", productRoutes);

// ------------------------- Deployment ----------------------------

const _dirname = path.resolve();
console.log(path.join(_dirname, "/frontend/build"));

if (process.env.NODE_ENV === "production") {
  server.use(express.static(path.join(_dirname, "/frontend/build")));

  server.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "build", "index.html"));
  });
} else {
  server.get("/", (req, res) => {
    res.send("API is running successfuly");
  });
}

// ------------------------- Deployment ----------------------------

server.use(notFound);
server.use(errorHandler);

const PORT = process.env.PORT || 5000;

sequelize
  .sync()
  .then((result) => {
    server.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
