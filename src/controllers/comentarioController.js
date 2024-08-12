const pool = require('../config/connection'); 

const getComentarios = async (req, res) => {
  try {
    // Consulta SQL con JOIN para incluir el nombre del usuario
    const [comentarios] = await pool.query(
      `
      SELECT c.Comentario_id, c.Usuario_id, c.Evento_id, c.Comentario, c.Fecha, u.Nombre AS Usuario_nombre
      FROM Comentarios c
      JOIN Usuarios u ON c.Usuario_id = u.Usuario_id
      `
    );

    res.json(comentarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getComentariosEvento = async (req, res) => {
  try {
    const { evento_id } = req.params;
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    // Consulta SQL con JOIN para incluir el nombre del usuario
    const [comentarios] = await pool.query(
      `
      SELECT c.comentario_id, c.usuario_id, c.evento_id, c.comentario, c.fecha, u.nombre AS usuario_nombre
      FROM Comentarios c
      JOIN Usuarios u ON c.usuario_id = u.usuario_id
      WHERE c.evento_id = ?
      LIMIT ? OFFSET ?
      `,
      [evento_id, parseInt(limit), parseInt(offset)]
    );

    res.json(comentarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



const createComentarios = async (req, res) => {
  try {
    const { evento_id, usuario_id, comentario, fecha } = req.body;

    // Validar que todos los campos requeridos están presentes
    if (!evento_id || !usuario_id || !comentario || !fecha) {
      return res.status(400).send('Faltan datos requeridos');
    }

    // Verificar la existencia del evento
    const [eventoExists] = await pool.query('SELECT 1 FROM Eventos WHERE evento_id = ?', [evento_id]);
    if (eventoExists.length === 0) {
      return res.status(404).send('Evento no encontrado');
    }

    // Verificar la existencia del usuario
    const [usuarioExists] = await pool.query('SELECT 1 FROM Usuarios WHERE usuario_id = ?', [usuario_id]);
    if (usuarioExists.length === 0) {
      return res.status(404).send('Usuario no encontrado');
    }

    // CONSULTA
    const query = `
      INSERT INTO Comentarios (evento_id, usuario_id, comentario, fecha)
      VALUES (?, ?, ?, ?)
    `;
    const values = [evento_id, usuario_id, comentario, fecha];

    // Ejecutar la consulta
    const [result] = await pool.query(query, values);

    // RESPUESTA
    res.status(201).json({ message: 'Comentario creado exitosamente', comentarioId: result.insertId });
  } catch (error) {
    // MSG ERROR
    console.error('Error al crear el comentario:', error);
    res.status(500).send('Error al crear el comentario');
  }
};



const deleteComentario = async (req, res) => {
    try {
      const { comentario_id } = req.params;
  
      const [existingComentario] = await pool.query(
        'SELECT * FROM Comentarios WHERE comentario_id = ?',
        [comentario_id]
      );
  
      if (!existingComentario.length) {
        return res.status(404).send('Comentario no encontrado');
      }
  
      const query = 'DELETE FROM Comentarios WHERE comentario_id = ?';
      const [result] = await pool.query(query, [comentario_id]);
  
      if (result.affectedRows > 0) {
        res.status(200).json({ message: 'Comentario eliminado correctamente' });
      } else {
        res.status(500).send('Error al intentar eliminar el comentario');
      }
    } catch (error) {
      console.error('Error al eliminar el comentario:', error);
      res.status(500).send('Error al eliminar el comentario');
    }
  };
  
  
module.exports = {
  getComentarios,
  getComentariosEvento,
  createComentarios,
  deleteComentario,
};
