/**
 * @swagger
 * components:
 *   schemas:
 *     Table:
 *       type: object
 *       required:
 *         - no
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the table
 *         no:
 *           type: integer
 *           description: The number of the table
 *         created_by:
 *           type: integer
 *           description: The creator of the table
 *         created_at:
 *           type: string
 *           format: date
 *           description: The date the table was added
 *         updated_by:
 *           type: integer
 *           description: The user who update the table
 *         updated_at:
 *           type: string
 *           format: date
 *           description: The date the table was updated
 *         deleted_by:
 *           type: integer
 *           description: The user who delete the table
 *         deleted_at:
 *           type: string
 *           format: date
 *           description: The date the table was deleted
 *       example:
 *         name: admin1
 *         username: admin1
 *         password: admin123!
 *         role_id: 1
 */
/**
 * @swagger
 * tags:
 *   name: Table
 *   description: The Table managing API
 * /master-table:
 *   get:
 *     summary: Lists all the master table
 *     tags: [Table]
 *     responses:
 *       200:
 *         description: The list of the table
 *   post:
 *     summary: Create a new Table
 *     tags: [Table]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Table'
 *     responses:
 *       200:
 *         description: The created table.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Table'
 *       500:
 *         description: Some server error
 * /master-table/{id}:
 *   get:
 *     summary: Get the table by id
 *     tags: [Table]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The table id
 *     responses:
 *       200:
 *         description: The table response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Table'
 *       404:
 *         description: The table was not found
 *   put:
 *    summary: Update the table by the id
 *    tags: [Table]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The table id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Table'
 *    responses:
 *      200:
 *        description: The table was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Table'
 *      404:
 *        description: The table was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the table by id
 *     tags: [Table]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The table id
 *
 *     responses:
 *       200:
 *         description: The table was deleted
 *       404:
 *         description: The table was not found
 */

const express = require("express");
const router = express.Router();
const masterTableController = require("../../controller/master/masterTableController");

router.post("/master-tables", masterTableController.createMasterTable);
router.get("/master-tables", masterTableController.fetchAllMasterMenu);
router.get("/master-tables/:id", masterTableController.findOneMasterTable);
router.put("/master-tables/:id", masterTableController.updateMasterTable);
router.delete("/master-tables/:id", masterTableController.deleteMasterTable);

module.exports = router;
