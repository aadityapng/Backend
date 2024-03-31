const loginService = require("../services/auth/loginService.js");

const login = async (req, res) => {
  const result = await loginService(req, res);
  return res.status(200).send({ message: "Login successfully", data: result });
};

module.exports = { login };
