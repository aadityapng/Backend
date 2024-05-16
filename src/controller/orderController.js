const fetchAllOrderService = require("../services/order/fetchAllOrderService");
const getOrderDetailByOrderIdService = require("../services/order/getOrderDetailByOrderIdService");
const updateStatusOrderService = require("../services/order/updateStatusOrderService");

const fetchAllOrder = async (req, res) => {
  const result = await fetchAllOrderService(req, res);
  return res
    .status(200)
    .send({ message: "Data fetched successfully", data: result });
};

const getOrderDetailByOrderId = async (req, res) => {
  const result = await getOrderDetailByOrderIdService(req, res);
  if (!result) {
    return res.status(404).send({ message: "Data not found" });
  }
  return res
    .status(200)
    .send({ message: "Data fetched successfully", data: result });
};

const updateStatusOrder = async (req, res) => {
  const result = await updateStatusOrderService(req, res);
  return res
    .status(200)
    .send({ message: "Data updated successfully", data: result });
};

module.exports = {
  fetchAllOrder,
  getOrderDetailByOrderId,
  updateStatusOrder,
};
