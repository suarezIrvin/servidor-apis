const pool = require("../config/connection");

const eventController = {
  createEvent: async (req, res) => {
    const {
      nombre,
      fecha_inicio,
      fecha_termino,
      hora,
      ubicacion,
      max_per,
      tipo_evento_id,
      categoria_id,
  } = req.body;
  
  try {
      // Usar un valor fijo para organizador_id
      const organizador_id = 2;
  
      const [result] = await pool.query(
          `INSERT INTO Eventos 
          (nombre, fecha_inicio, fecha_termino, hora, ubicacion, estado, max_per, tipo_evento_id, organizador_id, categoria_id) 
          VALUES (?, ?, ?, ?, ?, 'Pending', ?, ?, ?, ?)`,
          [
              nombre,
              fecha_inicio,
              fecha_termino,
              hora,
              ubicacion,
              max_per,
              tipo_evento_id,
              organizador_id, // siempre 2
              categoria_id,
          ]
      );
  
      if (result.affectedRows === 0) {
          return res.status(400).json({ error: "No se pudo crear el evento" });
      }
  
      const [newEvent] = await pool.query(
          "SELECT * FROM Eventos WHERE evento_id = ?",
          [result.insertId]
      );
  
      if (newEvent.length === 0) {
          return res.status(404).json({ error: "Evento no encontrado después de crear" });
      }
  
      res.status(201).json(newEvent[0]);
  } catch (error) {
      console.error("Error creating event:", error);
      
      // Identificar errores comunes
      if (error.code === 'ER_NO_SUCH_TABLE') {
          return res.status(500).json({ error: "La tabla 'Eventos' no existe" });
      } else if (error.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({ error: "Entrada duplicada, ya existe un evento con esos datos" });
      }
  
      res.status(500).json({ error: "Error interno del servidor", details: error.message });
  }
  },

  updateEvent: async (req, res) => {
    const { evento_id } = req.params;
    const {
      nombre,
      fecha_inicio,
      fecha_termino,
      hora,
      ubicacion,
      max_per,
      tipo_evento_id,
      categoria_id,
    } = req.body;

    try {
      const [event] = await pool.query(
        "SELECT * FROM Eventos WHERE evento_id = ?",
        [evento_id]
      );

      if (!event.length) {
        return res.status(404).json({ error: "Event not found" });
      }

      if (event[0].organizador_id !== req.user.usuario_id) {
        return res
          .status(403)
          .json({ error: "You do not have permission to update this event" });
      }

      await pool.query(
        `UPDATE Eventos SET nombre = ?, fecha_inicio = ?, fecha_termino = ?, hora = ?, ubicacion = ?, max_per = ?, tipo_evento_id = ?, categoria_id = ?, estado = 'Pending' WHERE evento_id = ?`,
        [
          nombre,
          fecha_inicio,
          fecha_termino,
          hora,
          ubicacion,
          max_per,
          tipo_evento_id,
          categoria_id,
          evento_id,
        ]
      );

      const updatedEvent = await pool.query(
        "SELECT * FROM Eventos WHERE evento_id = ?",
        [evento_id]
      );
      res.status(200).json(updatedEvent[0][0]);
    } catch (error) {
      console.error("Error updating event:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  listPendingEvents: async (req, res) => {
    try {
      const [pendingEvents] = await pool.query(
        "SELECT * FROM Eventos WHERE estado = ?",
        ["Pending"]
      );
      res.status(200).json(pendingEvents);
    } catch (error) {
      console.error("Error listing pending events:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  approveEvent: async (req, res) => {
    const { evento_id } = req.params;

    try {
      const [event] = await pool.query(
        "SELECT * FROM Eventos WHERE evento_id = ?",
        [evento_id]
      );

      if (!event.length) {
        return res.status(404).json({ error: "Event not found" });
      }

      await pool.query(
        `UPDATE Eventos SET estado = 'Approved', autorizado_por = ?, fecha_autorizacion = ? WHERE evento_id = ?`,
        [req.user.usuario_id, new Date(), evento_id]
      );

      const updatedEvent = await pool.query(
        "SELECT * FROM Eventos WHERE evento_id = ?",
        [evento_id]
      );
      res.status(200).json(updatedEvent[0][0]);
    } catch (error) {
      console.error("Error approving event:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  disapproveEvent: async (req, res) => {
    const { evento_id } = req.params;

    try {
      const [event] = await pool.query(
        "SELECT * FROM Eventos WHERE evento_id = ?",
        [evento_id]
      );

      if (!event.length) {
        return res.status(404).json({ error: "Event not found" });
      }

      await pool.query(
        `UPDATE Eventos SET estado = 'Disapproved', autorizado_por = ?, fecha_autorizacion = ? WHERE evento_id = ?`,
        [req.user.usuario_id, new Date(), evento_id]
      );

      const updatedEvent = await pool.query(
        "SELECT * FROM Eventos WHERE evento_id = ?",
        [evento_id]
      );
      res.status(200).json(updatedEvent[0][0]);
    } catch (error) {
      console.error("Error disapproving event:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  listOrganizerEvents: async (req, res) => {
    try {
      const [events] = await pool.query(
        "SELECT * FROM Eventos WHERE organizador_id = ?",
        [req.user.usuario_id]
      );
      res.status(200).json(events);
    } catch (error) {
      console.error("Error listing organizer events:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = eventController;
