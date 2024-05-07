const express = require('express');
const router = express.Router();
const cartController = require('../../controller/user/cartController');

router.post('/cart', cartController.addToCart);

module.exports = router;