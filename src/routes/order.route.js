const express = require('express');




const ordersPtoductsController = require("../../src/controllers/Order/add.order.controller");
const getordersPtoductsController = require("../../src/controllers/Order/getone.order.controller");


const orderRouter = express.Router();
// Sample route to get all items




orderRouter.route("/add").post(ordersPtoductsController);
orderRouter.route("/:eamil").get(getordersPtoductsController);
module.exports = orderRouter;
