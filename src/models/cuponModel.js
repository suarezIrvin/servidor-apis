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
    const query = 'SELECT ticket_id, info, code, status, redeem FROM tickets';
    return pool.query(query);
  }
  
};

module.exports = Coupon;
