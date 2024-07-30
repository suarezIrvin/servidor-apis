const DetallesEvento = require('../models/detallesEventoModel');

const getDetallesEventoByEventoId = async (req, res) => {
    const evento_id = req.params.evento_id;
    try {
      const detallesEvento = await DetallesEvento.getDetallesEventoByEventoId(evento_id);
      res.json(detallesEvento);
    } catch (error) {
      console.error('Error al obtener detalles de evento por Evento ID:', error);
      res.status(500).json({ error: 'Error al obtener detalles de evento por Evento ID' });
    }
  };


module.exports = {
    getDetallesEventoByEventoId
}