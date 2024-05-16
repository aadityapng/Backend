const Order = require("../../models/OrderTransaction");

module.exports = async (req, res) => {
  try {
    const orders = await Order.findAll();
    return orders;
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
