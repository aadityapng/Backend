const createMasterMenuService = require("../../services/master/menu/createMasterMenuService");
const deleteMasterMenuService = require("../../services/master/menu/deleteMasterMenuService");
const fetchAllMasterMenuService = require("../../services/master/menu/fetchMasterMenuService");
const findOneMasterMenuService = require("../../services/master/menu/findOneMasterMenuService");
const updateMasterMenuServive = require("../../services/master/menu/updateMasterMenuService");

const createMasterMenu = async (req, res) => {
  const result = await createMasterMenuService(req, res);
  return res.status(200).send({
    message: "Data created succesfully",
    data: result,
  });
};

const deleteMasterMenu = async (req, res) => {
  const result = await deleteMasterMenuService(req, res);
  return res.status(200).send({
    message: "Data deleted succesfully",
    data: result,
  });
};
const getAllMasterMenu = async (req, res) => {
  const result = await fetchAllMasterMenuService(req, res);
  return res.status(200).send({
    message: "Data fetched succesfully",
    data: result,
  });
};
const findOneMasterMenu = async (req, res) => {
  const result = await findOneMasterMenuService(req, res);
  return res.status(200).send({
    message: "Data fetched succesfully",
    data: result,
  });
};
const updateMasterMenu = async (req, res) => {
  const result = await updateMasterMenuServive(req, res);
  return res.status(200).send({
    message: "Data update succesfully",
    data: result,
  });
};

module.exports = {
  createMasterMenu,
  deleteMasterMenu,
  getAllMasterMenu,
  findOneMasterMenu,
  updateMasterMenu,
};
