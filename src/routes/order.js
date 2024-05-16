const express = require("express");
const router = express.Router();
const orderController = require("../controller/orderController");

router.get("/", orderController.fetchAllOrder);
router.get("/detail/:id", orderController.getOrderDetailByOrderId);
router.put("/update-status/:id", orderController.updateStatusOrder);

module.exports = router;
