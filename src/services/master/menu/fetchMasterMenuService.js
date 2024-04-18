const MasterMenu = require("../../../models/menu");

module.exports = async (req, res) => {
  try {
    return await MasterMenu.findAll({
      attributes: ["id", "category_id", "name", "price"],
      where: { deletedAt: null },
    });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};
