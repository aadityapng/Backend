const Menu = require("../../../models/listMenu");

module.exports = async () => {
  try {
    const menus = await Menu.findAll({
      attributes: ["id", "name", "price", "stock"],
    });
    return menus;
  } catch (error) {
    throw new Error("Failed to fetch menus" + error.message);
  }
};
