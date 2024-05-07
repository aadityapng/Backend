const MasterTable = require("../../../models/masterTable");

module.exports = async (req, res) => {
  const { id } = req.params;
  const { no } = req.body;

  try {
    const updatedRows = await MasterTable.update({ no }, { where: { id } });
    return updatedRows;
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};