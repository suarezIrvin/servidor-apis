const pool = require("../config/connection");

const User = {
  // Función para obtener el usuario por email
  findByEmail: async (email) => {
    const [users] = await pool.query("SELECT * FROM usuarios WHERE email = ?", [
      email,
    ]);
    return users;
  },

  // Función para actualizar el token de reseteo
  updateResetToken: async (hashedToken, resetExpire, email) => {
    const [result] = await pool.query(
      "UPDATE usuarios SET resetPasswordToken = ?, resetPasswordExpire = ? WHERE email = ?",
      [hashedToken, resetExpire, email]
    );
    return result;
  },

  // Función para obtener el usuario por token de reseteo válido y no expirado
  findByToken: async (token) => {
    const [users] = await pool.query(
      "SELECT * FROM usuarios WHERE resetPasswordToken = ? AND resetPasswordExpire > NOW()",
      [token]
    );
    return users;
  },

  // Función para actualizar la contraseña del usuario
  updatePassword: async (hashedPassword, userId) => {
    const [result] = await pool.query(
      "UPDATE usuarios SET contrasena = ?, resetPasswordToken = NULL, resetPasswordExpire = NULL WHERE usuario_id = ?",
      [hashedPassword, userId]
    );
    return result;
  },
};

module.exports = User;