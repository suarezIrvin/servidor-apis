const Notification = require('../models/notificationModel');

const notificationController = {
  create: async (req, res) => {
    const { usuario_id, mensaje } = req.body;
    if (!usuario_id || !mensaje) {
      return res.status(400).json({ error: 'Missing fields' });
    }
    try {
      await Notification.create(usuario_id, mensaje);
      res.status(201).json({ message: 'Notification created successfully' });
    } catch (error) {
      console.error('Error creating notification:', error);
      res.status(500).json({ error: 'Error creating notification' });
    }
  },

  getAll: async (req, res) => {
    try {
      const notifications = await Notification.findAll(); 
      if (notifications.length === 0) {
        return res.status(404).json({ message: 'No notifications found' });
      }
      res.status(200).json(notifications); 
    } catch (error) {
      console.error('Error fetching notifications:', error);
      res.status(500).json({ error: 'Error fetching notifications' });
    }
  }
};

module.exports = notificationController;
