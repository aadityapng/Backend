const express = require("express");
const router = express.Router();

// Middleware autentikasi
const authMiddleware = require("../middleware/auth.js");

// Routing untuk Payment
const paymentRoute = require("./user/paymentRoute");
router.use("/api", paymentRoute);

// Routing untuk autentikasi
const authRoute = require("./auth.js");
router.use("/auth", authRoute);

// Routing untuk List Menu
const menuRoute = require("./user/listMenuRoute.js");
router.use("/api", menuRoute);

// Middleware autentikasi untuk rute yang memerlukan autentikasi
router.use(authMiddleware);

// Routing untuk Master Admin
const masterAdminRoute = require("./master/master-admin.js");
router.use("/master-admin", masterAdminRoute);

// Routing untuk Master Menu Categories
const masterMenuCategoriesRoute = require("./master/master-menu-categories.js");
router.use("/master-menu-categories", masterMenuCategoriesRoute);

// Routing untuk Master Menu
const masterMenuRoute = require("./master/master-menu.js");
router.use("/master-menu", masterMenuRoute);

// Routing untuk Master Table
const masterTableRoute = require("./master/master-table");
router.use("/master-table", masterTableRoute);

// Routing untuk Cart
const cartRoute = require("./user/cartRoute.js");
router.use("/api", cartRoute);

// Routing Order
const orderRoute = require("./order.js");
router.use("/order", orderRoute);

module.exports = router;
