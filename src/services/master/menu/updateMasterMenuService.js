const MasterMenu = require("../../../models/menu");
const { uploadCloudinary } = require("../../../helper/index");

module.exports = async (req, res) => {
  req.body.updateAt = new Date().toDateString();
  req.body.updateBy = req.userId;

  const url = await uploadCloudinary(req.file.path);
  if (url) {
    req.body.menu_photo = url.toString();
    const { category_id, name, price, updateAt, updateBy, menu_photo } =
      req.body;

    try {
      return await MasterMenu.update(
        {
          category_id,
          name,
          price,
          menu_photo,
          updateAt,
          updateBy,
        },
        { where: { id } }
      );
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  } else {
    return res.json({
      message: "error when upload to cloudinary",
    });
  }
};
