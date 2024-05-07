const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET_KEY;

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded.id;
  } catch (error) {
    return null;
  }
};

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header

  if (!token) {
    return res.status(401).json({ message: "Authorization token is required" });
  }

  const userId = verifyToken(token);
  if (!userId) {
    return res.status(401).json({ message: "Invalid token" });
  }

  req.userId = userId; // Attach userId to request object for further processing
  next();
};

module.exports = authMiddleware;
