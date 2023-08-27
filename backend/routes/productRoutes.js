const express = require("express");
const {
  fetchProducts,
  createProducts,
  editProducts,
  deleteProducts,
} = require("../controllers/productControllers");

const router = express.Router();

router.get("/fetch-products", fetchProducts);
router.post("/create-products", createProducts);
router.put("/edit-products/:productId", editProducts);
router.delete("/delete-products/:productId", deleteProducts);

module.exports = router;
