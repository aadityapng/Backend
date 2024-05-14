/**
 * @swagger
 * components:
 *   schemas:
 *     user-menu:
 *       type: object
 *       required:
 *         - category_id
 *         - name
 *         - price
 *         - stock
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
 *         stock:
 *           type: integer
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
 *         stock: 10
 */
/**
 * @swagger
 * tags:
 *   name: user
 *   description: The user menu managing API
 * /user-menu:
 *   get:
 *     summary: get all the menu from user
 *     tags: [user]
 *     responses:
 *       200:
 *         description: The list of the admins
 *
 *
 */

const express = require("express");
const router = express.Router();
const menuController = require("../../controller/user/listMenuController");

router.get("/menus", menuController.getAllMenus);

module.exports = router;
