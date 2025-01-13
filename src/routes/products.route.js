const express = require('express');

const getAllPtoductsController = require("../../src/controllers/products/getAll.products.controller");

const addPtoductsController = require("../../src/controllers/products/add.products.controller");
const getSinglePtoductsController = require("../../src/controllers/products/single.products.controller");
const updatePtoductsController = require("../../src/controllers/products/edit.products.controller");
const deletePtoductsController = require("../../src/controllers/products/delete.products.controller");


const productsRouter = express.Router();
// Sample route to get all items

productsRouter.route("/add").post(addPtoductsController);
productsRouter.route("/").get(getAllPtoductsController);
productsRouter.route("/:id").get(getSinglePtoductsController);
productsRouter.route("/:id").patch(updatePtoductsController);
productsRouter.route("/:id").delete(deletePtoductsController);

module.exports = productsRouter;
