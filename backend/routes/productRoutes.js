const express = require("express");
const {
  fetchProducts,
  createProducts,
  editProducts,
  deleteProducts,
} = require("../controllers/productControllers");
const { auth } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/fetch-products", auth, fetchProducts);
router.post("/create-products", auth, createProducts);
router.put("/edit-products/:productId", auth, editProducts);
router.delete("/delete-products/:productId", auth, deleteProducts);

module.exports = router;
