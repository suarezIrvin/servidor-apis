const pool = require("../config/connection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class AuthModel {
  static async getUserByEmail(email) {
    //
    const [rows] = await pool.query("SELECT * FROM Usuarios WHERE email = ?", [
      email,
    ]);
    return rows[0];
  }

  static async comparePasswords(contrasena, hashedPassword) {
    return await bcrypt.compare(contrasena, hashedPassword);
  }

  static async generateToken(user) {
    const token = jwt.sign(
      { id: user.usuario_id, rol: user.rol_id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    return token;
  }
}

module.exports = AuthModel;
