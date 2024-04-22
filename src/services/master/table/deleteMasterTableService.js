const MasterTable = require("../../../models/masterTable");

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedRows = await MasterTable.destroy({ where: { id } });
    return deletedRows;
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};