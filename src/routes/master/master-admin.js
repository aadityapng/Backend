const express = require("express");
const router = express.Router();

const {
  getAllMasterAdmin,
  createMasterAdmin,
  findOneMasterAdmin,
  updateMasterAdmin,
  deleteMasterAdmin,
} = require("../../controller/master/adminController.js");

router.get("/", getAllMasterAdmin);
router.post("/", createMasterAdmin);
router.get("/:id", findOneMasterAdmin);
router.put("/:id", updateMasterAdmin);
router.delete("/:id", deleteMasterAdmin);

module.exports = router;
