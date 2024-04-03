const MasterMenuCategories = require("../../../models/masterMenuCategories.js");

module.exports = async (req, res) => {
  req.body.created_at = new Date().toDateString();
  req.body.created_by = req.userId;

  const { name, created_at, created_by } = req.body;

  try {
    return await MasterMenuCategories.create({ name, created_at, created_by });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};