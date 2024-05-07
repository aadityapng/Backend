const MasterTable = require("../../../models/masterTable");

module.exports = async (req, res) => {
  const { no } = req.body;

  try {
    const newMasterTable = await MasterTable.create({ no });
    return newMasterTable;
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};