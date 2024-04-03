const MasterMenuCategories = require("../../../models/masterMenuCategories.js");

module.exports = (req, res) => {
  try {
    return MasterMenuCategories.findAll({
      attributes: ["id", "name"],
      where: { deleted_at: null }
    });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};