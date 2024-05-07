const express = require('express');
const router = express.Router();
const masterTableController = require('../../controller/master/masterTableController');

router.post('/master-tables', masterTableController.createMasterTable);
router.get('/master-tables', masterTableController.fetchAllMasterMenu);
router.get('/master-tables/:id', masterTableController.findOneMasterTable);
router.put('/master-tables/:id', masterTableController.updateMasterTable);
router.delete('/master-tables/:id', masterTableController.deleteMasterTable);

module.exports = router;