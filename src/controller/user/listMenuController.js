const getAllMenusService = require("../../services/master/user/getAllMenusService");

exports.getAllMenus = async (req, res) => {
  try {
    const menus = await getAllMenusService();
    res.status(200).json({ menus });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
