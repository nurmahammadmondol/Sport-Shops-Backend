const express = require('express');

const getAllRegisterController = require("../../src/controllers/resgister/getAll.resgister.controller");

const addRegisterController = require("../../src/controllers/resgister/add.resgister.controller");
const getSingleRegisterController = require("../../src/controllers/resgister/single.register.controller");
const updateRegisterController = require("../../src/controllers/resgister/edit.resgister.controller");

const deleteRegisterController = require("../../src/controllers/resgister/delete.resgister.controller");


const approveRegisterController = require("../../src/controllers/resgister/approve.register.controller");

const loginController = require("../../src/controllers/resgister/login.controller");
const logoutController = require("../../src/controllers/resgister/logout.controller");
const registerRouter = express.Router();
// Sample route to get all items

registerRouter.route("/add").post(addRegisterController);
registerRouter.route("/").get(getAllRegisterController);
registerRouter.route("/:id").get(getSingleRegisterController);
registerRouter.route("/:id").patch(updateRegisterController);
registerRouter.route("/:id").delete(deleteRegisterController);
registerRouter.route("/approve/:id").patch(approveRegisterController)
registerRouter.route("/auth/:email").get(loginController)
registerRouter.route("/logout/:email").patch(logoutController)
module.exports = registerRouter;
