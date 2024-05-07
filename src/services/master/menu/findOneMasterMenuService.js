const MasterMenu = require("../../../models/menu");

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    return await MasterMenu.findOne({
      attributes: ["id", "category_id", "name", "price"],
      where: { id },
    });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};
