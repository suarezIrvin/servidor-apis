const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;
const validateRole = (allowedRoles) => {
  return (req, res, next) => {
    const authHeader = req.header("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Token not found or badly formatted" });
    }
    const token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded;
      if (!allowedRoles.includes(req.user.rol)) {
        return res.status(403).json({
          message: "You don't have permission to access this resource",
        });
      }
      next();
    } catch (error) {
      res.status(401).json({
        message: "Invalid or expired token",
      });
    }
  };
};


/* 
FORMA DE USAR - dependiendo del rol que se quiera validar
validateRole([1, 2]), 
*/

module.exports = { validateRole };
