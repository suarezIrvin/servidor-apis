const DetalleEvento = require('../models/detallesEventoModel');


const DetalleEventoController = {
  getDetalleEvento: async (req, res) =>{
     const {evento_id} = req.params;
     try {
        const detalle = await DetalleEvento.getDetalleEventoId({evento_id})
            if (detalle.length === 0) {
             return res.status(404).json({ message: 'No hay detalles de eventos registrados' });
            }
            res.status(200).json(detalle);
     } catch (error) {
        console.error('Error fetching detalle evento:', error);
        return res.status(500).json({ error: 'Error fetching detalle evento' });
     }
     
  }
}



module.exports = {
    DetalleEventoController
}