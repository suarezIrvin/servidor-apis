const pool = require('../config/connection'); 

const getComentarios = async (_req, res) => {
  try {
    const [comentarios] = await pool.query(
      'SELECT * FROM Comentarios'
    );
    res.json(comentarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getComentariosEvento = async (req, res) => {
    try {
      const { evento_id } = req.params; 

      const [comentarios] = await pool.query(
        'SELECT * FROM Comentarios WHERE evento_id = ?',
        [evento_id]
      );
  
      res.json(comentarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

// Función para verificar si el usuario existe
const userExists = async (usuario_id) => {
  const userCheckQuery = 'SELECT usuario_id FROM Usuarios WHERE usuario_id = ?'; // Usa 'usuario_id' en lugar de 'id'
  const [userCheckResult] = await pool.query(userCheckQuery, [usuario_id]);
  return userCheckResult.length > 0;
};

const createComentarios = async (req, res) => {
  try {
    const { evento_id, usuario_id, comentario, fecha } = req.body;

    // Validar que todos los campos requeridos están presentes
    if (!evento_id || !usuario_id || !comentario || !fecha) {
      return res.status(400).send('Faltan datos requeridos');
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
