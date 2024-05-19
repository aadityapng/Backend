const db = require("../../../models");
const Menu = db.menu;
const MasterMenuCategory = db.menu_category;

module.exports = async () => {
  try {
    const menus = await Menu.findAll({
      attributes: ["id", "name", "price", "menu_photo"],
      where: { deletedAt: null },
      include: {
        model: MasterMenuCategory,
        required: true,
        attributes: ["id", "name"],
      },
    });
    return menus;
  } catch (error) {
    throw new Error("Failed to fetch menus" + error.message);
  }
};
