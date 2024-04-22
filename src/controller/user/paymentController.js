const verifyPaymentService = require("../../services/master/user/verifyPaymentService");

exports.verifyPayment = async (req, res) => {
  try {
    const { orderId } = req.body;
    const updatedOrderTransaction = await verifyPaymentService(orderId);
    if (updatedOrderTransaction[0] === 0) {
      return res.status(404).json({ error: "Order transaction not found" });
    }
    res.status(200).json({ message: "Payment verification successful" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
