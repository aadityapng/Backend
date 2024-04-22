const MasterTable = require("../../../models/masterTable");

module.exports = async (req, res) => {
  try {
    const masterTables = await MasterTable.findAll();
    return masterTables;
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};