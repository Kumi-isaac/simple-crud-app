const express = require("express");
const product = reqiure("../models/product.model.js");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

router.get("/", getProducts);
router.get("/:id", getProduct);

router.post("/", createProducts);

// update product
router.put("/:id", updateProducts);

// delete product
router.delete("/:id", deleteProducts);

module.exports = router;
