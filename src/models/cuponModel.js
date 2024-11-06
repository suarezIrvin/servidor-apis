const pool = require('../config/connection');

const Coupon = {
  create: (cupones) => {
    const query = `
      INSERT INTO tickets (ticket_id, info, code, status) 
      VALUES ?
    `;
    const values = cupones.map(cupon => [
      cupon.id, cupon.info, cupon.code, cupon.status
    ]);
    return pool.query(query, [values]);
  },

  getMaxId: () => {
    const query = 'SELECT MAX(ticket_id) AS maxId FROM tickets';
    return pool.query(query);
  },

  getAll: () => {
    const query = `
      SELECT t.ticket_id, t.info, t.code, t.status, t.redeem, u.nombre AS canjeado_por
      FROM tickets t
      JOIN pagos p ON t.pago_id = p.pago_id
      JOIN usuarios u ON p.usuario_id = u.usuario_id
    `;
    return pool.query(query);
  }
};

module.exports = Coupon;
