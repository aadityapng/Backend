const fetchAllMasterService = require("../../services/master/admin/fetchAllMasterAdminService.js");
const createMasterAdminService = require("../../services/master/admin/createMasterAdminService.js");
const findOneMasterAdminService = require("../../services/master/admin/findOneMasterAdminService.js");
const updateMasterAdminService = require("../../services/master/admin/updateMasterAdminService.js");
const deleteMasterAdminService = require("../../services/master/admin/deleteMasterAdminService.js");

const getAllMasterAdmin = async (req, res) => {
  const result = await fetchAllMasterService(req, res);
  return res
    .status(200)
    .send({ message: "Data fetched successfully", data: result });
};

const createMasterAdmin = async (req, res) => {
  const result = await createMasterAdminService(req, res);
  return res
    .status(200)
    .send({ message: "Data created successfully", data: result });
};

const findOneMasterAdmin = async (req, res) => {
  const result = await findOneMasterAdminService(req, res);
  return res
    .status(200)
    .send({ message: "Data fetched successfully", data: result });
};

const updateMasterAdmin = async (req, res) => {
  const result = await updateMasterAdminService(req, res);
  return res
    .status(200)
    .send({ message: "Data updated successfully", data: result });
};

const deleteMasterAdmin = async (req, res) => {
  const result = await deleteMasterAdminService(req, res);
  return res
    .status(200)
    .send({ message: "Data deleted successfully", data: result });
};

module.exports = {
  getAllMasterAdmin,
  createMasterAdmin,
  findOneMasterAdmin,
  updateMasterAdmin,
  deleteMasterAdmin,
};
