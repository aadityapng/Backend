/**
 * @swagger
 * components:
 *   schemas:
 *     user-cart:
 *       type: object
 *       required:
 *         - user_id
 *         - menu_id
 *         - quantity
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the admin
 *         user_id:
 *           type: integer
 *           description: The user_id of cart
 *         menu_id:
 *           type: integer
 *           description: The menu_id of cart
 *         quantity:
 *           type: integer
 *           description: The quantity of cart
 *
 *       example:
 *         user_id: 25
 *         menu_id: 2
 *         quantity: 2
 *
 */
/**
 * @swagger
 * tags:
 *   name: user
 *   description: The user menu managing API
 * /user-cart:
 *   post:
 *     summary: post cart from user
 *     tags: [user]
 *     responses:
 *       200:
 *         description: The list of the admins
 *
 *
 */

const express = require("express");
const router = express.Router();
const cartController = require("../../controller/user/cartController");

router.post("/cart", cartController.addToCart);

module.exports = router;
