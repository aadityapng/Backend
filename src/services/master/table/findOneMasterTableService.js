const MasterTable = require("../../../models/masterTable");

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const masterTable = await MasterTable.findByPk(id);
    return masterTable;
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};