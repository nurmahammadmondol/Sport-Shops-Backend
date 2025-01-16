




const express = require('express');




const addtocartPtoductsController = require("../../src/controllers/Cart/add.cart.controller");
const getcartPtoductsController = require("../../src/controllers/Cart/getOne.cart.controller");

const deletecartPtoductsController = require("../../src/controllers/Cart/delete.cart.controllers");

const cartRouter = express.Router();
// Sample route to get all items


cartRouter.route("/add").post(addtocartPtoductsController);
cartRouter.route("/:email").get(getcartPtoductsController);
cartRouter.route("/:email").delete(deletecartPtoductsController);

module.exports = cartRouter;
