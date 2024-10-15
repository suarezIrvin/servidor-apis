const pool = require('../config/connection');

const User = {
  create: (nombre, email, lastName, hashedPassword, telefono, rolId) => {
    return pool.query(
      "INSERT INTO usuarios (nombre, email, last_name, contrasena, telefono, rol_id) VALUES (?, ?, ?, ?, ?, ?)",
      [nombre, email, lastName, hashedPassword, telefono, rolId]
    )
  },

  findById: (usuarioId) => {
    return pool.query(
      "SELECT * FROM usuarios WHERE usuario_id = ?",
      [usuarioId]
    )
  },

  findAll: () => {
    return pool.query("SELECT * FROM usuarios")
  },

  update: (updateUserQuery, values) => {
    return pool.query(updateUserQuery, values)
  },

  delete: (usuarioId) => {
    return pool.query(
      "DELETE FROM usuarios WHERE usuario_id = ?",
      [usuarioId]
    )
  }
};

module.exports = User;