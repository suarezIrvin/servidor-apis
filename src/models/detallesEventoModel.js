const pool = require('../config/connection'); 

const getDetallesEventoByEventoId = async (evento_id) => {
    const query = `
      SELECT DE.*, E.nombre AS nombre_evento 
      FROM Detalles_Evento DE
      JOIN Eventos E ON DE.evento_id = E.evento_id
      WHERE DE.evento_id = ?
    `;
    try {
      const [results] = await pool.query(query, [evento_id]);
      return results;
    } catch (error) {
      throw error;
    }
  };

module.exports = {
    getDetallesEventoByEventoId
}