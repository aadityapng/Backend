const MasterMenu = require("../../../models/menu");

module.exports = async (req, res) => {
  req.body.createdAt = new Date().toDateString();
  req.body.createdBy = req.userId;

  const { category_id, name, price, createdAt, createdBy } = req.body;

  try {
    return await MasterMenu.create({
      category_id,
      name,
      price,
      createdAt,
      createdBy,
    });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};
