const express = require("express");
const masterAdminRoute = require("./master/master-admin.js");
const authRoute = require("./auth.js");
const router = express.Router();
const authMiddleware = require("../middleware/auth.js");

router.use("/auth", authRoute);
router.use(authMiddleware);
router.use("/master-admin", masterAdminRoute);

module.exports = router;
