const OrderTransaction = require("../../../models/OrderTransaction");

module.exports = async (orderId) => {
  try {
    const updatedOrderTransaction = await OrderTransaction.update(
      { payment_status: "Sudah Dibayar" },
      { where: { id: orderId } }
    );
    return updatedOrderTransaction;
  } catch (error) {
    throw error("payment system error" + error.message);
  }
};
