const pool = require("../config/connection");

const CanjeoSinRegistroModel = {
  getTicketByCode: (code) => {
    const query = `SELECT * FROM tickets WHERE code = ?`;
    return pool.execute(query, [code]);
  },

  updateTicketToRedeemed: (ticket_id) => {
    const query = `UPDATE tickets SET redeem = 1 WHERE ticket_id = ?`;
    return pool.execute(query, [ticket_id]);
  }
};

module.exports = CanjeoSinRegistroModel;
