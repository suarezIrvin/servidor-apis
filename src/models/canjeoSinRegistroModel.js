const pool = require("../config/connection");

const CanjeoSinRegistroModel = {
  getTicketByCode: (code) => {
    const query = `SELECT * FROM tickets WHERE code = ?`;
    return pool.execute(query, [code]);
  },

  updateTicketToRedeemed: (ticket_id, id_horario) => {
    const query = `
      UPDATE tickets 
      SET redeem = 1, 
          id_horario = ?, 
          canje_at = NOW()
      WHERE ticket_id = ?
    `;
    return pool.execute(query, [id_horario, ticket_id]);
  }
};

module.exports = CanjeoSinRegistroModel;
