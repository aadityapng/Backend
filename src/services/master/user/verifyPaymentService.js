const OrderTransaction = require("../../../models/OrderTransaction");
const DetailOrderTransaction = require("../../../models/DetailOrderTransaction");

module.exports = async (req, res) => {
  req.body.date = new Date();
  req.body.payment_status = "Sudah Dibayar";
  req.body.order_status = "Menunggu Verifikasi Admin";
  const {
    table_id,
    payment_method,
    menus,
    payment_amount,
    date,
    payment_status,
    order_status,
  } = req.body;

  let totalAmount = 0;
  for (let i = 0; i < menus.length; i++) {
    const menu = menus[i];
    totalAmount += menu.total_price;
  }

  if (totalAmount !== payment_amount) {
    return res
      .status(500)
      .json({ message: "Payment amount must be equal with total amount" });
  }

  try {
    const order = await OrderTransaction.create({
      table_id,
      date,
      payment_method,
      payment_status,
      order_status,
    });

    let detailOrder = [];
    for (let i = 0; i < menus.length; i++) {
      const menu = menus[i];
      detailOrder.push({
        order_id: order.id,
        menu_id: menu.id,
        quantity: menu.quantity,
        total_price: menu.total_price,
        notes: menu.notes,
      });
    }

    await DetailOrderTransaction.bulkCreate(detailOrder);

    return order.id;
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
