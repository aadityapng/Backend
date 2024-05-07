const Cart = require("../../../models/Cart");

module.exports = async (userId, menuId, quantity) => {
  try {
    const cartItem = await Cart.create({
      user_id: userId,
      menu_id: menuId,
      quantity,
    });
    return cartItem;
  } catch (error) {
    throw new Error("Failed to add item to cart" + error.message);
  }
};
