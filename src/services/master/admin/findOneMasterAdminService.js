const MasterAdmin = require("../../../models/admin.js");

module.exports = (req, res) => {
  const { id } = req.params;
  try {
    return MasterAdmin.findOne({
      attributes: ["id", "name", "username", "role_id"],
      where: { id },
    });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};
