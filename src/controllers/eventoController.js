const { json } = require('express');
const pool = require('../config/connection');



const Evento = async (req, res) => {
    try{
      const [result] = await pool.query(
        `SELECT a.evento_id, a.nombre AS nombre_evento, a.fecha_inicio, a.fecha_termino, a.hora, a.ubicacion, a.max_per, a.estado, a.fecha_autorizacion, b.nombre AS tipo_evento, e.nombre AS organizador_nombre, e.nombre AS autorizado_nombre, c.estado, d.nombre AS categoria_nombre, f.imagen_url 
              FROM Eventos a 
              INNER JOIN Tipos_Evento b ON a.tipo_evento_id = b.tipo_evento_id  
              INNER JOIN Validacion c ON a.validacion_id = c.validacion_id 
              INNER JOIN Categorias d ON a.categoria_id = d.categoria_id
              INNER JOIN Usuarios e ON a.organizador_id = e.usuario_id
              INNER JOIN Imagenes f ON a.evento_id = f.evento_id
              WHERE c.estado = "APROBADO"
              ORDER BY ABS(DATEDIFF(fecha_inicio, CURDATE()))`
      );
      res.status(200).json(result);
    } catch (error) {
      console.log("erro al obtener eventos: ", error);
      res.status(500).send("error al obtener eventos");
    }
  };

  const filtroEvento = async (req, res) => {
    const { category, tipo_evento } = req.query;
    try {
      const sql = `SELECT a.evento_id, a.nombre AS nombre_evento, a.fecha_inicio, a.fecha_termino, a.hora, a.ubicacion, a.max_per, a.estado, a.fecha_autorizacion, 
                            b.nombre AS tipo_evento, e.nombre AS organizador_nombre, e.nombre AS autorizado_nombre, c.estado, d.nombre AS categoria_nombre 
                     FROM Eventos a 
                     INNER JOIN Tipos_Evento b ON a.tipo_evento_id = b.tipo_evento_id  
                     INNER JOIN Validacion c ON a.validacion_id = c.validacion_id 
                     INNER JOIN Categorias d ON a.categoria_id = d.categoria_id
                     INNER JOIN Usuarios e ON a.organizador_id = e.usuario_id
                     WHERE d.nombre = ? OR b.nombre = ?
                     ORDER BY ABS(DATEDIFF(fecha_inicio, CURDATE()))`;
  
      const [rows] = await pool.query(sql, [category, tipo_evento]);
  
      if (rows.length === 0) {
        if (category) {
          return res.status(404).json({ message: `No existen eventos para la categoría de evento ${category}` });  
        } else if (tipo_evento) {
          return res.status(404).json({ message: `No existen eventos para el tipo de evento ${tipo_evento}` });  
        }
      }
  
      res.status(200).json(rows);
    } catch (error) {
      console.error("Error al obtener filtro:", error);
      res.status(500).json({ error: "Error al obtener filtro" });
    }
  };
  
  
  module.exports = {
    Evento,
    filtroEvento
  };