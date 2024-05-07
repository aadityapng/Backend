const express = require("express");
const router = express.Router();
const menuController = require("../../controller/user/listMenuController");

router.get("/menus", menuController.getAllMenus);

module.exports = router;
