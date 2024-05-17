const verifyPaymentService = require("../../services/master/user/verifyPaymentService");

exports.verifyPayment = async (req, res) => {
  const orderNumber = await verifyPaymentService(req, res);
  return res.status(200).json({
    message: "Payment verification successful",
    orderNumber: orderNumber,
  });
};
