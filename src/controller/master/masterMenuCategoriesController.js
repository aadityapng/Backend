const fetchAllMasterMenuCategoriesService = require("../../services/master/menuCategories/fetchAllMasterMenuCategoriesService.js");
const createMasterMenuCategoriesService = require("../../services/master/menuCategories/createMasterMenuCategoriesService.js");
const findOneMasterMenuCategoriesService = require("../../services/master/menuCategories/findOneMasterMenuCategoriesService.js");
const updateMasterMenuCategoriesService = require("../../services/master/menuCategories/updateMasterMenuCategoriesService.js");
const deleteMasterMenuCategoriesService = require("../../services/master/menuCategories/deleteMasterMenuCategoriesService.js");

const getAllMasterMenuCategories = async (req, res) => {
  const result = await fetchAllMasterMenuCategoriesService(req, res);
  return res
    .status(200)
    .send({ message: "Data fetched successfully", data: result });
};

const createMasterMenuCategories = async (req, res) => {
  const result = await createMasterMenuCategoriesService(req, res);
  return res
    .status(200)
    .send({ message: "Data created successfully", data: result });
};

const findOneMasterMenuCategories = async (req, res) => {
  const result = await findOneMasterMenuCategoriesService(req, res);
  return res
    .status(200)
    .send({ message: "Data fetched successfully", data: result });
};

const updateMasterMenuCategories = async (req, res) => {
  const result = await updateMasterMenuCategoriesService(req, res);
  return res
    .status(200)
    .send({ message: "Data updated successfully", data: result });
};

const deleteMasterMenuCategories = async (req, res) => {
  const result = await deleteMasterMenuCategoriesService(req, res);
  return res
    .status(200)
    .send({ message: "Data deleted successfully", data: result });
};

module.exports = {
  getAllMasterMenuCategories,
  createMasterMenuCategories,
  findOneMasterMenuCategories,
  updateMasterMenuCategories,
  deleteMasterMenuCategories,
};
