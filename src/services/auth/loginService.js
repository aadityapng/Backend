const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET_KEY;
const Admin = require("../../models/admin.js");
const bcryptjs = require("bcryptjs");

module.exports = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({
      where: { username },
    });

    if (!admin) {
      return res.status(500).send({
        message: "Invalid Credentials",
      });
    }

    if (!(await bcryptjs.compare(password, admin.password))) {
      return res.status(500).send({ message: "Invalid Credential" });
    }

    const accessToken = jwt.sign({ id: admin.id }, secretKey, {
      expiresIn: "1h",
    });

    return {
      token: accessToken,
    };
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};
