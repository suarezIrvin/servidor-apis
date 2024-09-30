const pool = require('../config/connection');

const Notification = {
  create: async (usuario_id, mensaje) => {
    try {
      const [result] = await pool.execute(
        'INSERT INTO NotificacionO (usuario_id, mensaje) VALUES (?, ?)',
        [usuario_id, mensaje]
      );
      return result;
    } catch (error) {
      console.error('Error creating notification:', error);
      throw error;
    }
  },

  findAll: async () => {
    try {
      const [rows] = await pool.execute('SELECT * FROM NotificacionO');
      return rows; 
    } catch (error) {
      console.error('Error fetching notifications:', error);
      throw error;
    }
  },
};

module.exports = Notification;
