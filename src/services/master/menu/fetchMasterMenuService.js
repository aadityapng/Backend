const db = require("../../../models");
const MasterMenu = db.menu;
const MasterMenuCategory = db.menu_category;

module.exports = async (req, res) => {
  try {
    return await MasterMenu.findAll({
      attributes: ["id", "category_id", "name", "price"],
      where: { deletedAt: null },
      include: {
        model: MasterMenuCategory,
        required: true,
        attributes: ["id", "name"],
      },
    });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};
