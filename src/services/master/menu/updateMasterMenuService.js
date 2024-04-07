const MasterMenu = require("../../../models/menu");

module.exports = async (req, res) => {
  req.body.updateAt = new Date().toDateString();
  req.body.updateBy = req.userId;

  const { category_id, name, price, updateAt, updateBy } = req.body;

  try {
    return await MasterMenu.update(
      {
        category_id,
        name,
        price,
        updateAt,
        updateBy,
      },
      { where: { id } }
    );
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};
