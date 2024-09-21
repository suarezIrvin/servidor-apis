const pool = require('../config/connection');

const Membership = {
  create: (tipo, descripcion, costo, meses) => {
    return pool.execute(
      'INSERT INTO Membresia (tipo, descripcion, costo, meses) VALUES (?, ?, ?, ?)',
      [tipo, descripcion, costo, meses]
    );
  },

  findById: (membresia_id) => {
    return pool.execute(
      'SELECT * FROM Membresia WHERE membresia_id = ?',
      [membresia_id]
    );
  },

  findAll: () => {
    return pool.execute('SELECT * FROM Membresia');
  },

  update: (membresia_id, tipo, descripcion, costo, meses) => {
    return pool.execute(
      'UPDATE Membresia SET tipo = ?, descripcion = ?, costo = ?, meses = ? WHERE membresia_id = ?',
      [tipo, descripcion, costo, meses, membresia_id]
    );
  },

  delete: (membresia_id) => {
    return pool.execute(
      'DELETE FROM Membresia WHERE membresia_id = ?',
      [membresia_id]
    );
  }
};

module.exports = Membership;