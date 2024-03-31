const MasterAdmin = require("../../../models/admin.js");

module.exports = (req, res) => {
  try {
    return MasterAdmin.findAll({
      attributes: ["id", "name", "username", "role_id"],
      where: { deleted_at: null },
    });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};
