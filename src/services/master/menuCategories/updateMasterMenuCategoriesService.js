const MasterMenuCategories = require("../../../models/masterMenuCategories.js");

module.exports = async (req, res) => {
  req.body.updated_at = new Date().toDateString();
  req.body.updated_by = req.userId;

  const { name, updated_at, updated_by } = req.body;
  const { id } = req.params;

  try {
    return await MasterMenuCategories.update(
      { name, updated_at, updated_by },
      { where: { id } }
    );
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};