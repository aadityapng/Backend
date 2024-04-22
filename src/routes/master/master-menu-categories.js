const express = require("express");
const router = express.Router();
const {
  getAllMasterMenuCategories,
  createMasterMenuCategories,
  findOneMasterMenuCategories,
  updateMasterMenuCategories,
  deleteMasterMenuCategories,
} = require("../../controller/master/masterMenuCategoriesController.js");

router.get("/", getAllMasterMenuCategories);
router.post("/", createMasterMenuCategories);
router.get("/:id", findOneMasterMenuCategories);
router.put("/:id", updateMasterMenuCategories);
router.delete("/:id", deleteMasterMenuCategories);

module.exports = router;