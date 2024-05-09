/**
 * @swagger
 * components:
 *   schemas:
 *     Menu:
 *       type: object
 *       required:
 *         - category_id
 *         - name
 *         - price
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the admin
 *         category_id:
 *           $ref: '#/components/schemas/MenuCategory'
 *         name:
 *           type: string
 *           description: The name of menu
 *         price:
 *           type: decimal
 *           description: The price of menu
 *         created_by:
 *           type: integer
 *           description: The creator of the menu
 *         created_at:
 *           type: string
 *           format: date
 *           description: The date the menu was added
 *         updated_by:
 *           type: integer
 *           description: The user who update the menu
 *         updated_at:
 *           type: string
 *           format: date
 *           description: The date the menu was updated
 *         deleted_by:
 *           type: integer
 *           description: The user who delete the menu
 *         deleted_at:
 *           type: string
 *           format: date
 *           description: The date the menu was deleted
 *       example:
 *         category_id: 1
 *         name: nasi goreng
 *         price: 10000
 */
/**
 * @swagger
 * tags:
 *   name: Menu
 *   description: The menus managing API
 * /master-menu:
 *   get:
 *     summary: Lists all the master Menu
 *     tags: [Menu]
 *     responses:
 *       200:
 *         description: The list of the menu
 *   post:
 *     summary: Create a new menu
 *     tags: [Menu]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Menu'
 *     responses:
 *       200:
 *         description: The created menu.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Menu'
 *       500:
 *         description: Some server error
 * /master-menu/{id}:
 *   get:
 *     summary: Get the menu by id
 *     tags: [Menu]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The menu id
 *     responses:
 *       200:
 *         description: The menu response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Menu'
 *       404:
 *         description: The menu was not found
 *   put:
 *    summary: Update the menu by the id
 *    tags: [Menu]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The menu id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Menu'
 *    responses:
 *      200:
 *        description: The menu was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Menu'
 *      404:
 *        description: The menu was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the menu by id
 *     tags: [Menu]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The menu id
 *
 *     responses:
 *       200:
 *         description: The menu was deleted
 *       404:
 *         description: The menu was not found
 */

const express = require("express");
const router = express.Router();

const {
  createMasterMenu,
  deleteMasterMenu,
  getAllMasterMenu,
  findOneMasterMenu,
  updateMasterMenu,
} = require("../../controller/master/menuController");

router.get("/menu", getAllMasterMenu);
router.post("/", createMasterMenu);
router.get("/:id", findOneMasterMenu);
router.put("/:id", updateMasterMenu);
router.delete("/:id", deleteMasterMenu);

module.exports = router;
