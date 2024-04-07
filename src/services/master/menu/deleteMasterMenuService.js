const MasterMenu = require("../../../models/menu");

module.exports = async (req, res) => {
  req.body.deletedAt = new Date().toDateString();
  req.body.deletedby = req.userId;

  const { deletedAt, deletedby } = req.body;
  const { id } = req.params;

  try {
    return await MasterMenu.update(
      {
        deletedAt,
        deletedby,
      },
      { where: { id } }
    );
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};
