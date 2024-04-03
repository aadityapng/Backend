const express = require("express");
const router = express.Router();

// Middleware autentikasi
const authMiddleware = require("../middleware/auth.js");

// Routing untuk autentikasi
const authRoute = require("./auth.js");
router.use("/auth", authRoute);

// Middleware autentikasi untuk rute yang memerlukan autentikasi
router.use(authMiddleware);

// Routing untuk Master Admin
const masterAdminRoute = require("./master/masterAdminRoute.js");
router.use("/master-admin", masterAdminRoute);

// Routing untuk Master Menu Categories
const masterMenuCategoriesRoute = require("./master/masterMenuCategoriesRoute.js");
router.use("/master-menu-categories", masterMenuCategoriesRoute);


module.exports = router;