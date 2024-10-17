const { check } = require("express-validator");
const pool = require("../config/connection");



const TicketModel = {
  getAllTickets: () => {
    return pool.execute(
      `
            SELECT t.ticket_id, t.info, t.code, t.status, h.horario_id, e.evento_id, e.nombre AS evento_nombre
            FROM tickets t
            JOIN horarios h ON t.id_horario = h.horario_id
            JOIN eventos e ON h.evento_id = e.evento_id
            `
    );
  },

  getTicketsByEvent: (evento_id, page = 1, limit = 10) => {
    const offset = (page - 1) * limit;
    return pool.execute(
      `
            SELECT t.ticket_id, t.info, t.code, t.status, h.horario_id, e.evento_id, e.nombre AS evento_nombre
            FROM tickets t
            JOIN horarios h ON t.id_horario = h.horario_id
            JOIN eventos e ON h.evento_id = e.evento_id
            WHERE e.evento_id = ?
            LIMIT ? OFFSET ?
            `,
      [evento_id, parseInt(limit), parseInt(offset)]
    );
  },

  createTicket: (info, code, status, id_horario) => {
    const query = `
            INSERT INTO tickets (info, code, status, id_horario)
            VALUES (?, ?, ?, ?)
        `;
    const values = [info, code, status, id_horario];
    return pool.execute(query, values);
  },

  deleteTicket: (ticket_id) => {
    const query = "DELETE FROM tickets WHERE ticket_id = ?";
    return pool.execute(query, [ticket_id]);
  },

  /* NEW CODE */

  getTicketById: (ticket_id) => {
    return pool.execute(
      `
      SELECT * FROM tickets WHERE ticket_id = ?
            `,
      [ticket_id]
    );
  },

  getTicketsByEvent2: (evento_id, page, limit) => {
    const offset = (page - 1) * limit;
    return pool.execute(
      `
        SELECT t.ticket_id, t.info, t.code, t.status, h.hora_inicio, h.hora_fin, e.nombre, e.fecha_inicio, e.fecha_termino
        FROM tickets t
        JOIN horarios h ON t.id_horario = h.horario_id
        JOIN eventos e ON h.evento_id = e.evento_id
        WHERE e.evento_id = ?
        LIMIT ${parseInt(limit)} OFFSET ${parseInt(offset)}
        `,
      [evento_id]
    );
  },
  updateTicket: (ticket_id, status) => {
    const query = "UPDATE tickets SET status = ? WHERE ticket_id = ?";
    const values = [status, ticket_id];
    return pool.execute(query, values);
  },

  update: (id, data) => {
    const fields = Object.keys(data);
    const setClause = fields.map(field => `${field} = ?`).join(', ');
    const query = `
        UPDATE tickets
        SET ${setClause}
        WHERE ticket_id = ?;
    `;
    const values = [...Object.values(data), id];

    return pool.execute(query, values);
  },

  getTicketByCode: (code) => {
    const query = `SELECT * FROM tickets WHERE code = ?`;
    return pool.execute( query, [code] );
  },

  validateTicket: (code) => {
    const query = `SELECT code,redeem FROM tickets WHERE code = ?`;
    return pool.execute( query, [code] );
  },

  confirmPayTicket: (evento_id) => {
    const query = `
    INSERT INTO pagos (monto, fecha, usuario_id, evento_id, f_inicio_ep, f_FIN_ep)
    VALUES (0, CURRENT_DATE(), 70, ?, NULL, NULL);
  `;
    return pool.execute( query, [evento_id]  );
  },

  addPayTicket: () => {
    const query = `SELECT LAST_INSERT_ID() as pago_id;`;
    return pool.execute(query);
  },


  updateTicketWithPagoId: (payId, code) => {
    const query = `UPDATE tickets SET pago_id = ? WHERE code = ?`;
    return pool.execute(query, [payId, code]);
},

  updateTicketHorarioId: (horarioId, code) => {
    const query = `UPDATE tickets SET horario_id = ? WHERE code = ?`;
    return pool.execute(query, [horarioId, code]);
  },

  
};

module.exports = TicketModel;
