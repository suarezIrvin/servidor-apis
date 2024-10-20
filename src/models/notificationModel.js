const pool = require('../config/connection');

const Notification = {
  create: async (usuario_id, mensaje) => {
    try {
      const [result] = await pool.execute(
        'INSERT INTO notificaciono (usuario_id, mensaje) VALUES (?, ?)',
        [usuario_id, mensaje]
      );
      return result;
    } catch (error) {
      console.error('Error al crear la notificación:', error);
      throw error;
    }
  },

  findAll: async () => {
    try {
      const [rows] = await pool.execute('SELECT * FROM notificaciono');
      return rows; 
    } catch (error) {
      console.error('Error al obtener las notificaciones:', error);
      throw error;
    }
  },
};

module.exports = Notification;
