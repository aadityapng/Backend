const express = require("express");
const router = express.Router();
const paymentController = require("../../controller/user/paymentController");

router.post("/verify-payment", paymentController.verifyPayment);

module.exports = router;
