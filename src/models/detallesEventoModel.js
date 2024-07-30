const pool = require('../config/connection'); 

const getDetallesEventoByEventoId = async (evento_id) => {
    const query = `
      SELECT 
    a.detalle_evento_id, a.evento_id, a.descripcion, a.requerimientos, a.Precio, 
    b.nombre as nombre_evento, b.fecha_inicio, b.fecha_termino, b.hora, b.ubicacion, b.max_per,
    c.nombre as tipo_evento,
    d.nombre as categoria,
    e.nombre as organizador_nombre,
    f.imagen_url 
    FROM Detalles_Evento a
    INNER JOIN Eventos b ON a.evento_id = b.evento_id
    INNER JOIN Tipos_Evento c ON b.tipo_evento_id = c.tipo_evento_id
    INNER JOIN Categorias d ON b.categoria_id = d.categoria_id
    INNER JOIN Usuarios e ON b.organizador_id = e.usuario_id
    INNER JOIN Imagenes f ON b.evento_id = f.evento_id
    WHERE b.evento_id = ?
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