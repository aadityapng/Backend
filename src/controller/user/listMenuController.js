const fetchAllMenusService = require("../../services/master/user/fetchAllMenusService");

exports.getAllMenus = async (req, res) => {
  try {
    const menus = await fetchAllMenusService();
    res.status(200).json({ menus });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
