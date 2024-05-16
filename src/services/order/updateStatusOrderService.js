const Order = require("../../models/OrderTransaction");

module.exports = async (req, res) => {
  const { id } = req.params;
  const { order_status } = req.body;
  try {
    const OrderTransaction = await Order.update(
      { order_status },
      { where: { id } }
    );
    return OrderTransaction;
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
