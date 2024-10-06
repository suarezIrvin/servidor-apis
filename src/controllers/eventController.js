const Event = require("../models/eventModel");


const eventController = {

    getEvent: async (req, res) => {
        try {
            const result = await Event.getEvent();
            res.status(200).json(result);
        } catch (error) {
            console.error('Error al obtener la lista de eventos:', error);
            res.status(500).send('Error al obtener la lista de eventos');
        }
    },

    getIdEvent: async (req, res) => {
        const { evento_id } = req.params;
        try {
           
    
            const result = await Event.getEvetId(evento_id);
    
            res.status(200).json(result);
        } catch (error) {
            console.error('Error al obtener el evento:', error);
            res.status(500).send('Error al obtener el evento');
        }
    },

    postEvent: async (req, res) => {
        const { nombre, fecha_inicio, fecha_termino, hora, tipo_evento_id, categoria_id, ubicacion, max_per, imagen_url, monto, descripcion } = req.body;
        // Validar que todos los campos necesarios estén presentes
        if (!nombre || !fecha_inicio || !fecha_termino || !hora || !tipo_evento_id || !categoria_id || !ubicacion || !max_per || !imagen_url || !monto || !descripcion) {
            return res.status(400).send('Todos los campos son obligatorios');
        }
    
        // Validar tipo_evento_id y categoria_id
        const validTipoEventoIds = [1, 2];
        const validCategoriaIds = [1, 2, 3, 4];
    
        if (!validTipoEventoIds.includes(tipo_evento_id)) {
            return res.status(400).send('tipo_evento_id inválido');
        }
    
        if (!validCategoriaIds.includes(categoria_id)) {
            return res.status(400).send('categoria_id inválido');
        }
    
        try {
            // Insertar el evento
            const resultEvento = await Event.postEvent(nombre, fecha_inicio, fecha_termino, hora, tipo_evento_id, categoria_id, ubicacion, max_per, imagen_url, monto, descripcion);
    
            // Éxito al crear el evento
            res.status(201).json({
                message: 'Evento creado correctamente',
                evento_id: evento_id
            });
        } catch (error) {
            console.error('Error al crear el evento:', error);
            res.status(500).send('Error al crear el evento');
        }
    },
    

    putEvent: async (req, res) => {
        const { id } = req.params;
        const { evento_nombre, fecha_inicio, fecha_termino, hora, ubicacion,  categoria_id, max_per, estado, autorizado_por, fecha_autorizacion, validacion_id, imagen_url, monto, descripcion, forma_escenario } = req.body;
    
        // Validar que todos los campos necesarios estén presentes
       
    
    
    
        try {
            // Actualizar el evento
        const result = await Event.updateEvent(id, evento_nombre, fecha_inicio, fecha_termino, hora, ubicacion, categoria_id, max_per, estado, autorizado_por, fecha_autorizacion, validacion_id, imagen_url, monto, descripcion, forma_escenario );

    
            // Éxito al actualizar
            res.status(200).send('Evento actualizado correctamente');
        } catch (error) {
            console.error('Error al actualizar el evento:', error);
            res.status(500).send('Error al actualizar el evento');
        }
    },
    
    

    getApprovedEvent: async (req, res) => {
        try {
            const events = await eventModel.getApprovedEvents();
            res.status(200).json(events);
        } catch (error) {
            res.status(500).send('Error al obtener la lista de eventos aprobados');
        }
    },
    
    getPendingEvent: async (req, res) => {
        try {
            const events = await eventModel.getPendingEvents();
            res.status(200).json(events);
        } catch (error) {
            res.status(500).send('Error al obtener la lista de eventos pendientes');
        }
    },
    
    postPendingEvent: async (req, res) => {
        const { evento_id, estado } = req.body;

        
        if (!['Aprobado', 'Rechazado'].includes(estado)) {
            return res.status(400).send('Estado inválido');
        }

        try {
            
            const result = await eventModel.updateEventStatus(evento_id, estado);

            
            if (result.affectedRows === 0) {
                return res.status(404).send('Evento no encontrado');
            }

           
            res.status(200).send('Estado del evento actualizado correctamente');
        } catch (error) {
            console.error('Error al actualizar el estado del evento:', error);
            res.status(500).send('Error al actualizar el estado del evento');
        }
    },

    delete: async (req, res) => { 
        const { evento_id } = req.params;
        
        if (isNaN(evento_id)) {
            return res.status(400).send('ID de evento inválido');
        }
    
        console.log('Evento ID:', evento_id);  
    
        try {
            const result = await Event.deleteEvent(evento_id);
            
            if (result.affectedRows === 0) {
                return res.status(404).send('Evento no encontrado');
            }
    
            res.status(200).send('Evento eliminado correctamente');
        } catch (error) {
            console.error('Error al eliminar el evento:', error);
            res.status(500).send('Error al eliminar el evento');
        }
    },
    
    postPendingEvent: async (req, res) => {
        const { evento_id, estado } = req.body;

        // Validar el estado
        if (!['Aprobado', 'Rechazado'].includes(estado)) {
            return res.status(400).send('Estado inválido');
        }

        try {
            // Actualizar el estado del evento a través del modelo
            const result = await eventModel.updateEventStatus(evento_id, estado);

            // Verificar si el evento fue encontrado y actualizado
            if (result.affectedRows === 0) {
                return res.status(404).send('Evento no encontrado');
            }

            // Éxito al actualizar el estado del evento
            res.status(200).send('Estado del evento actualizado correctamente');
        } catch (error) {
            console.error('Error al actualizar el estado del evento:', error);
            res.status(500).send('Error al actualizar el estado del evento');
        }
    } 
    
}

module.exports = eventController;