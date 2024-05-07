const createMasterTableService = require("../../services/master/table/createMasterTableService");
const fetchAllMasterTablesService = require("../../services/master/table/fetchAllMasterTablesService");
const findOneMasterTableService = require("../../services/master/table/findOneMasterTableService");
const updateMasterTableService = require("../../services/master/table/updateMasterTableService");
const deleteMasterTableService = require("../../services/master/table/deleteMasterTableService");

const createMasterTable = async (req, res) => {
  const result = await createMasterTableService(req, res);
  return res.status(200).send({ message: "Data created successfully", data: result });
};

const fetchAllMasterMenu = async (req, res) => {
  const result = await fetchAllMasterTablesService(req, res);
  return res.status(200).send({ message: "Data fetched successfully", data: result });
};

const findOneMasterTable = async (req, res) => {
  const result = await findOneMasterTableService(req, res);
  if (!result) {
    return res.status(404).send({ message: "Data not found" });
  }
  return res.status(200).send({ message: "Data fetched successfully", data: result });
};

const updateMasterTable = async (req, res) => {
  const result = await updateMasterTableService(req, res);
  if (result[0] === 0) {
    return res.status(404).send({ message: "Data not found" });
  }
  return res.status(200).send({ message: "Data updated successfully", data: result });
};

const deleteMasterTable = async (req, res) => {
  const result = await deleteMasterTableService(req, res);
  if (result === 0) {
    return res.status(404).send({ message: "Data not found" });
  }
  return res.status(200).send({ message: "Data deleted successfully", data: result });
};

module.exports = {
  createMasterTable,
  fetchAllMasterMenu,
  findOneMasterTable,
  updateMasterTable,
  deleteMasterTable,
};
