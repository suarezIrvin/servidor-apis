const CommentsModel = require('../models/commentsModel');

const commentsController = {

  getComment: async (req, res) => {
    try {
      const [rows] = await CommentsModel.getAllComments();
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getCommentEvent: async (req, res) => {
    try {
      const { evento_id } = req.params;
      const { page = 1, limit = 10 } = req.query;
      const [rows] = await CommentsModel.getCommentEvent(evento_id, page, limit);
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createComment: async (req, res) => {
    try {
      const { evento_id, usuario_id, comentario, fecha } = req.body;

      // Validar que todos los campos requeridos están presentes
      if (!evento_id || !usuario_id || !comentario || !fecha) {
        return res.status(400).send('Faltan datos requeridos');
      }

      const [result] = await CommentsModel.createComment(evento_id, usuario_id, comentario, fecha);
      res.status(201).json({ message: 'Comentario creado exitosamente', comentarioId: result.insertId });
    } catch (error) {
      res.status(500).send('Error al crear el comentario');
    }
  },

  deleteComment: async (req, res) => {
    try {
      const { comentario_id } = req.params;
      const [result] = await CommentsModel.deleteComment(comentario_id);

      if (result.affectedRows > 0) {
        res.status(200).json({ message: 'Comentario eliminado correctamente' });
      } else {
        res.status(404).send('Comentario no encontrado');
      }
    } catch (error) {
      res.status(500).send('Error al eliminar el comentario');
    }
  }

};

module.exports = commentsController;


// const getCommentEvent = async (req, res) => {
//   try {
//     const { evento_id } = req.params;
//     const { page = 1, limit = 10 } = req.query;
//     const offset = (page - 1) * limit;

//     // Consulta SQL con JOIN para incluir el nombre del usuario
//     const [comentarios] = await pool.query(
//       `
//       SELECT c.comentario_id, c.usuario_id, c.evento_id, c.comentario, c.fecha, u.nombre AS usuario_nombre
//       FROM Comentarios c
//       JOIN Usuarios u ON c.usuario_id = u.usuario_id
//       WHERE c.evento_id = ?
//       LIMIT ? OFFSET ?
//       `,
//       [evento_id, parseInt(limit), parseInt(offset)]
//     );

//     res.json(comentarios);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };



// const createComment = async (req, res) => {
//   try {
//     const { evento_id, usuario_id, comentario, fecha } = req.body;

//     // Validar que todos los campos requeridos están presentes
//     if (!evento_id || !usuario_id || !comentario || !fecha) {
//       return res.status(400).send('Faltan datos requeridos');
//     }

//     // Verificar la existencia del evento
//     const [eventoExists] = await pool.query('SELECT 1 FROM Eventos WHERE evento_id = ?', [evento_id]);
//     if (eventoExists.length === 0) {
//       return res.status(404).send('Evento no encontrado');
//     }

//     // Verificar la existencia del usuario
//     const [usuarioExists] = await pool.query('SELECT 1 FROM Usuarios WHERE usuario_id = ?', [usuario_id]);
//     if (usuarioExists.length === 0) {
//       return res.status(404).send('Usuario no encontrado');
//     }

//     // CONSULTA
//     const query = `
//       INSERT INTO Comentarios (evento_id, usuario_id, comentario, fecha)
//       VALUES (?, ?, ?, ?)
//     `;
//     const values = [evento_id, usuario_id, comentario, fecha];

//     // Ejecutar la consulta
//     const [result] = await pool.query(query, values);

//     // RESPUESTA
//     res.status(201).json({ message: 'Comentario creado exitosamente', comentarioId: result.insertId });
//   } catch (error) {
//     // MSG ERROR
//     console.error('Error al crear el comentario:', error);
//     res.status(500).send('Error al crear el comentario');
//   }
// };



// const deleteComment = async (req, res) => {
//     try {
//       const { comentario_id } = req.params;
  
//       const [existingComentario] = await pool.query(
//         'SELECT * FROM Comentarios WHERE comentario_id = ?',
//         [comentario_id]
//       );
  
//       if (!existingComentario.length) {
//         return res.status(404).send('Comentario no encontrado');
//       }
  
//       const query = 'DELETE FROM Comentarios WHERE comentario_id = ?';
//       const [result] = await pool.query(query, [comentario_id]);
  
//       if (result.affectedRows > 0) {
//         res.status(200).json({ message: 'Comentario eliminado correctamente' });
//       } else {
//         res.status(500).send('Error al intentar eliminar el comentario');
//       }
//     } catch (error) {
//       console.error('Error al eliminar el comentario:', error);
//       res.status(500).send('Error al eliminar el comentario');
//     }
//   };
  
  
// module.exports = {
//   getComment,
//   getCommentEvent,
//   createComment,
//   deleteComment
// };
