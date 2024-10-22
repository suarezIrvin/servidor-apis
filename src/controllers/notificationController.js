const Notification = require('../models/notificationModel');

const notificationController = {
  create: async (req, res) => {
    const { usuario_id, mensaje } = req.body;
    if (!usuario_id || !mensaje) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    try {
      await Notification.create(usuario_id, mensaje);

      res.status(201).json({ message: 'Notificación creada con éxito' });
    } catch (error) {
      console.error('Error al crear la notificación:', error);

      res.status(500).json({ error: 'Error al crear la notificación' });
    }
  },

  getAll: async (req, res) => {
    try {
      const notifications = await Notification.findAll();

      if (notifications.length === 0) {
        return res.status(404).json({ message: 'No se encontraron notificaciones' });
      }

      res.status(200).json(notifications);
    } catch (error) {
      console.error('Error al obtener las notificaciones:', error);

      res.status(500).json({ error: 'Error al obtener las notificaciones' });
    }
  }
};

module.exports = notificationController;
