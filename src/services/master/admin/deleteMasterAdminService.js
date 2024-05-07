const MasterAdmin = require("../../../models/admin.js");

module.exports = async (req, res) => {
  req.body.deleted_at = new Date().toDateString();
  req.body.deleted_by = req.userId;
  const { deleted_at, deleted_by } = req.body;
  const { id } = req.params;

  try {
    return await MasterAdmin.update(
      {
        deleted_at,
        deleted_by,
      },
      { where: { id } }
    );
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};
