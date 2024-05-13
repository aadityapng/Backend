const MasterMenu = require("../../../models/menu");
const { uploadCloudinary } = require("../../../helper/index");

module.exports = async (req, res) => {
  req.body.createdAt = new Date().toDateString();
  req.body.createdBy = req.userId;

  const url = await uploadCloudinary(req.file.path);
  if (url) {
    req.body.menu_photo = url.toString();
    const { category_id, name, price, createdAt, createdBy, menu_photo } =
      req.body;
    try {
      return await MasterMenu.create({
        category_id,
        name,
        price,
        menu_photo,
        createdAt,
        createdBy,
      });
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  } else {
    return res.json({
      message: "error when upload to cloudinary",
    });
  }
};
