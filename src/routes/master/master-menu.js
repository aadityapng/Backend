const express = require("express");
const router = express.Router();

const {
  createMasterMenu,
  deleteMasterMenu,
  getAllMasterMenu,
  findOneMasterAdmin,
  updateMasterMenu,
} = require("../../controller/master/menuController");

router.get("/menu", getAllMasterMenu);
router.post("/", createMasterMenu);
router.get("/:id", findOneMasterAdmin);
router.put("/:id", updateMasterMenu);
router.delete("/:id", deleteMasterMenu);

module.exports = router;
