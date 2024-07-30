const pool = require('../config/connection');
const util = require('node:util');


const getDetalleEventoId = async (data, callback) =>{
    const {evento_id} = data;
    const sql = `SELECT 
    a.detalle_evento_id, a.evento_id, a.descripcion, a.requerimientos, a.precio, 
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
    WHERE b.evento_id = ?`;

    const query = util.promisify(pool.query).bind(pool);

    try {
      const results = await query(sql, [evento_id]);
      return results;
    } catch (error) {
      console.error("Error al realizar la consulta:", error);
      throw error;
    }
  }



module.exports = {
    getDetalleEventoId
}