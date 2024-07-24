const jwt = require("jsonwebtoken");
const pool = require("../config/connection");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const [rows] = await pool.query(
      "SELECT * FROM Usuarios WHERE usuario_id = ?",
      [decoded.id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = rows[0];

    const expirationDate = new Date(decoded.exp * 1000);
    await pool.query(
      "INSERT INTO Tokens (usuario_id, token, expiracion) VALUES (?, ?, ?)",
      [req.user.usuario_id, token, expirationDate]
    );

    next();
  } catch (err) {
    console.error("Failed to authenticate token:", err);
    return res.status(401).json({ error: "Failed to authenticate token" });
  }
};

module.exports = authMiddleware;
