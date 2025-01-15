const express = require('express');

const getAllPtoductsController = require("../../src/controllers/products/getAll.products.controller");

const addPtoductsController = require("../../src/controllers/products/add.products.controller");
const getSinglePtoductsController = require("../../src/controllers/products/single.products.controller");
const updatePtoductsController = require("../../src/controllers/products/edit.products.controller");
const deletePtoductsController = require("../../src/controllers/products/delete.products.controller");
const addtocartPtoductsController = require("../../src/controllers/products/addtocarrt.products.controller");
const getcartPtoductsController = require("../../src/controllers/products/getcart.products.controller");
const ordersPtoductsController = require("../../src/controllers/products/order.products.controller");
const getordersPtoductsController = require("../../src/controllers/products/getAllorder.products.controller");
const deletecartPtoductsController = require("../../src/controllers/products/deletecart.products.controller");

const productsRouter = express.Router();
// Sample route to get all items

productsRouter.route("/add").post(addPtoductsController);
productsRouter.route("/").get(getAllPtoductsController);
productsRouter.route("/:id").get(getSinglePtoductsController);
productsRouter.route("/:id").patch(updatePtoductsController);
productsRouter.route("/:id").delete(deletePtoductsController);
productsRouter.route("/addtocart").post(addtocartPtoductsController);
productsRouter.route("/cart/:email").get(getcartPtoductsController);
productsRouter.route("/cart/:email").delete(deletecartPtoductsController);
productsRouter.route("/order").post(ordersPtoductsController);
productsRouter.route("/order").get(getordersPtoductsController);
module.exports = productsRouter;
