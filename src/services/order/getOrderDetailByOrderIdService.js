const db = require("../../models");
const OrderDetail = db.orderDetail;
const MasterMenu = db.menu;

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const orderDetail = await OrderDetail.findAll({
      attributes: ["id", "quantity", "total_price", "notes"],
      where: { order_id: id },
      include: [
        {
          model: MasterMenu,
          required: true,
          attributes: ["name"],
        },
      ],
    });
    return orderDetail;
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
