const MasterAdmin = require("../../../models/admin.js");
const bcryptjs = require("bcryptjs");

module.exports = async (req, res) => {
  req.body.created_at = new Date().toDateString();
  req.body.password = await bcryptjs.hash(process.env.DEFAULT_PASSWORD, 12);
  req.body.created_by = req.userId;
  req.body.role_id = 1;
  const { name, username, password, created_at, created_by, role_id } =
    req.body;

  try {
    return await MasterAdmin.create({
      name,
      username,
      password,
      role_id,
      created_at,
      created_by,
    });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};
