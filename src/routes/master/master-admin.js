/**
 * @swagger
 * components:
 *   schemas:
 *     Admin:
 *       type: object
 *       required:
 *         - name
 *         - username
 *         - password
 *         - role_id
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the admin
 *         name:
 *           type: string
 *           description: The name of admin
 *         username:
 *           type: string
 *           description: The username of admin
 *         password:
 *           type: string
 *           description: The password of admin
 *         role_id:
 *           type: integer
 *           description: The role of the admin
 *         created_by:
 *           type: integer
 *           description: The creator of the admin
 *         created_at:
 *           type: string
 *           format: date
 *           description: The date the admin was added
 *         updated_by:
 *           type: integer
 *           description: The user who update the admin
 *         updated_at:
 *           type: string
 *           format: date
 *           description: The date the admin was updated
 *         deleted_by:
 *           type: integer
 *           description: The user who delete the admin
 *         deleted_at:
 *           type: string
 *           format: date
 *           description: The date the admin was deleted
 *       example:
 *         name: admin1
 *         username: admin1
 *         password: admin123!
 *         role_id: 1
 */
/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: The admins managing API
 * /master-admin:
 *   get:
 *     summary: Lists all the master admin
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: The list of the admins
 *   post:
 *     summary: Create a new admin
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Admin'
 *     responses:
 *       200:
 *         description: The created admin.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Admin'
 *       500:
 *         description: Some server error
 * /master-admin/{id}:
 *   get:
 *     summary: Get the admin by id
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The admin id
 *     responses:
 *       200:
 *         description: The admin response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Admin'
 *       404:
 *         description: The admin was not found
 *   put:
 *    summary: Update the admin by the id
 *    tags: [Admin]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The admin id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Admin'
 *    responses:
 *      200:
 *        description: The admin was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Admin'
 *      404:
 *        description: The admin was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the admin by id
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The admin id
 *
 *     responses:
 *       200:
 *         description: The admin was deleted
 *       404:
 *         description: The admin was not found
 */
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
