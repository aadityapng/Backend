/**
 * @swagger
 * components:
 *   schemas:
 *     MenuCategory:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the menu category
 *         name:
 *           type: string
 *           description: The name of menu category
 *         created_by:
 *           type: integer
 *           description: The creator of the menu category
 *         created_at:
 *           type: string
 *           format: date
 *           description: The date the menu category was added
 *         updated_by:
 *           type: integer
 *           description: The user who update the menu category
 *         updated_at:
 *           type: string
 *           format: date
 *           description: The date the menu category was updated
 *         deleted_by:
 *           type: integer
 *           description: The user who delete the menu category
 *         deleted_at:
 *           type: string
 *           format: date
 *           description: The date the menu category was deleted
 *       example:
 *         name: makanan
 */
/**
 * @swagger
 * tags:
 *   name: MenuCategory
 *   description: The MenuCategory managing API
 * /master-menu-categories:
 *   get:
 *     summary: Lists all the master menu categories
 *     tags: [MenuCategory]
 *     responses:
 *       200:
 *         description: The list of the menu category
 *   post:
 *     summary: Create a new MenuCategory
 *     tags: [MenuCategory]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MenuCategory'
 *     responses:
 *       200:
 *         description: The created menu category.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MenuCategory'
 *       500:
 *         description: Some server error
 * /master-menu-categories/{id}:
 *   get:
 *     summary: Get the menu category by id
 *     tags: [MenuCategory]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The menu category id
 *     responses:
 *       200:
 *         description: The menu category response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MenuCategory'
 *       404:
 *         description: The menu category was not found
 *   put:
 *    summary: Update the menu category by the id
 *    tags: [MenuCategory]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The menu category id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/MenuCategory'
 *    responses:
 *      200:
 *        description: The menu category was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MenuCategory'
 *      404:
 *        description: The menu category was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the menu category by id
 *     tags: [MenuCategory]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The menu category id
 *
 *     responses:
 *       200:
 *         description: The menu category was deleted
 *       404:
 *         description: The menu category was not found
 */

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
