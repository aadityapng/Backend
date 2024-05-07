const MasterMenuCategories = require("../../../models/masterMenuCategories.js");

module.exports = (req, res) => {
  const { id } = req.params;

  try {
    return MasterMenuCategories.findOne({
      attributes: ["id", "name"],
      where: { id }
    });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};