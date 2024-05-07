const addToCartService = require("../../services/master/user/addToCartService");

exports.addToCart = async (req, res) => {
  try {
    const { menuId, quantity } = req.body;
    const userId = req.user.id; 

    const cartItem = await addToCartService(userId, menuId, quantity);
    res.status(201).json({ cartItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
