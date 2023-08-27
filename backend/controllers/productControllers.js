const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

const createProducts = asyncHandler(async (req, res) => {
  const { title, price, imageUrl, description, quantity } = req.body;

  if (!title || !price || !imageUrl || !description || !quantity) {
    res.status(400);
    throw new Error("Please enter all the required fields of a product!");
  }

  const result = await Product.create({
    title,
    price,
    imageUrl,
    description,
    quantity,
  });

  const data = result.toJSON();

  if (result) {
    res.status(201).json({
      id: data.id,
      title: data.title,
      price: data.price,
      imageUrl: data.imageUrl,
      description: data.description,
      quantity: data.quantity,
    });
  } else {
    res.status(400);
    throw new Error("Failed to create a product ...");
  }
});

const fetchProducts = asyncHandler(async (req, res) => {
  const response = await Product.findAll();
  const data = response.map((product) => {
    return product.dataValues;
  });

  if (response) {
    res.status(201).json(data);
  } else {
    res.status(400);
    throw new Error("Failed to fetch products ...");
  }
});

const editProducts = asyncHandler(async (req, res) => {
  const productId = req.params.productId;
  const { title, price, imageUrl, description, quantity } = req.body;

  if (!title || !price || !imageUrl || !description || !quantity) {
    res.status(400);
    throw new Error("Please provide all the required fields of a product!");
  }

  // updating a product with given Id
  const updatedProduct = {
    title,
    price,
    imageUrl,
    description,
    quantity,
  };

  const [response] = await Product.update(updatedProduct, {
    where: {
      id: productId,
    },
  });

  if (response) {
    res.status(201).json(updatedProduct);
  } else {
    res.status(400);
    throw new Error("Failed to update a product ...");
  }
});

const deleteProducts = asyncHandler(async (req, res) => {
  const productId = req.params.productId;

  const response = await Product.destroy({
    where: { id: productId },
  });

  if (response) {
    res.status(201).json(1);
  } else {
    res.status(400);
    throw new Error("Failed to delete a product ...");
  }
});

module.exports = {
  createProducts,
  fetchProducts,
  editProducts,
  deleteProducts,
};
