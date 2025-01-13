const express = require('express');
const productsRouter = express.Router();
const getAllPtoductsController = require("../../src/controllers/products/getAll.products.controller");
// Sample route to get all items
productsRouter.route("/").get(getAllPtoductsController);

module.exports = productsRouter;
