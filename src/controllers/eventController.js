const Event = require("../models/eventModel");
const eventModel = require("../models/eventModel");

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
        if (!result) {
            return res.status(404).json({ message: "Evento no encontrado" });
        }
        res.status(200).json(result);
    } catch (error) {
        console.error('Error al obtener el evento:', error);
        res.status(500).send('Error al obtener el evento');
    }
    },

    searchFilter: async (req, res) => {
        const { name, location, start_date, end_date, category_id, event_type } = req.query; 

    
        // Verificar si al menos uno de los campos está presente
        if (!name && !location && !start_date && !end_date && !category_id && !event_type) {
            return res.status(400).json({ error: 'Debes proporcionar al menos uno de los siguientes campos: nombre, ubicacion,fecha,categoria o tipo de evento' });
        }
    
        try {
            const result = await Event.searchFilter(name, location, start_date, end_date,category_id, event_type);

            if (result.length === 0) {
                return res.status(404).json({ message: 'No se encontraron eventos que coincidan con los criterios de búsqueda.' });
            }
           
            res.status(200).json(result);
        } catch (error) {
         console.error('Error al filtrar los eventos:', error);
        res.status(500).send('Error al filtrar los eventos');
        }
    },
    

    postEvent: async (req, res) => {
        const { 
            nombre, 
            fecha_inicio, 
            fecha_termino, 
            requerimientos,        
            organizador_id,      
            escenario,           
            tipo_evento,  
            categoria_id, 
            ubicacion, 
            max_per, 
            imagen_url, 
            precio, 
            descripcion, 
            horarios 
        } = req.body;
    
        // Depuración para ver qué se está recibiendo
        console.log('Horarios recibidos:', horarios);
        console.log('Cuerpo de la solicitud:', req.body);
    
        // Validar que todos los campos necesarios estén presentes
        if (!nombre || !fecha_inicio || !fecha_termino || !requerimientos || !organizador_id || !escenario ||
            !tipo_evento || !categoria_id || !ubicacion || !max_per || !imagen_url || !precio || !descripcion || 
            !horarios || !Array.isArray(horarios) || horarios.length === 0) {
            return res.status(400).send('Todos los campos son obligatorios y debe haber al menos un horario.');
        }
    
        // Validar tipo_evento y categoria_id
        const validTipoEventoIds = [1, 2];  // Tipos de evento válidos
        const validCategoriaIds = [1, 2, 3, 4];  // Ids válidos de categorías
    
        if (!validTipoEventoIds.includes(tipo_evento)) {
            return res.status(400).send('tipo_evento inválido');
        }
    
        if (!validCategoriaIds.includes(categoria_id)) {
            return res.status(400).send('categoria_id inválido');
        }
    
        try {
            // Insertar el evento y sus horarios
            const resultEvento = await Event.postEvent(
                nombre, 
                fecha_inicio, 
                fecha_termino, 
                requerimientos,
                organizador_id,    
                escenario,         
                tipo_evento,  
                categoria_id, 
                ubicacion, 
                max_per, 
                imagen_url, 
                precio, 
                descripcion, 
                horarios
            );
    
            // Éxito al crear el evento
            res.status(201).json({
                message: 'Evento creado correctamente',
                evento_id: resultEvento.insertId
            });
        } catch (error) {
            console.error('Error al crear el evento:', error);
            res.status(500).send('Error al crear el evento');
        }
    },
    
    putEvent: async (req, res) => {
        const { id } = req.params;
        const { 
            nombre, 
            fecha_inicio, 
            fecha_termino, 
            requerimientos, 
            escenario, 
            ubicacion,  
            categoria_id, 
            max_per, 
            imagen_url, 
            precio, 
            descripcion, 
            tipo_evento,
            horarios // Asegúrate de que este valor sea correcto
        } = req.body;
    
        // Validar que todos los campos necesarios estén presentes
        if (!nombre || !fecha_inicio || !fecha_termino || !requerimientos || !escenario || !ubicacion || !categoria_id || !max_per || !imagen_url || !precio || !descripcion || !tipo_evento) {
            return res.status(400).send('Todos los campos obligatorios deben estar presentes');
        }
    
        try {
            // Actualizar el evento usando el método updateEvent
            const result = await Event.updateEvent(
                id, 
                nombre, 
                fecha_inicio, 
                fecha_termino, 
                escenario, 
                tipo_evento, 
                categoria_id, 
                ubicacion, 
                max_per, 
                imagen_url, 
                precio, 
                descripcion, 
                requerimientos, // Agregado en lugar de hora y hora_termino
                horarios // Asegúrate de que este valor sea correcto
            );
    
            // Éxito al actualizar
            res.status(200).send('Evento actualizado correctamente');
        } catch (error) {
            console.error('Error al actualizar el evento:', error);
            res.status(500).send('Error al actualizar el evento');
        }
    },
    

    getApprovedEvent: async (req, res) => {
        try {
            // Llama al método del modelo para obtener los eventos aprobados
            const events = await Event.getApprovedEvents();
            
            // Devuelve la lista de eventos aprobados en formato JSON
            res.status(200).json(events);
        } catch (error) {
            // Maneja errores y envía una respuesta de error
            console.error('Error al obtener la lista de eventos aprobados:', error);
            res.status(500).send('Error al obtener la lista de eventos aprobados');
        }
    },
    
    getPendingEvent: async (req, res) => {
        try {
            const events = await Event.getPendingEvents();
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
            
            const result = await Event.updateEventStatus(evento_id, estado);

            
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
            const result = await Event.updateEventStatus(evento_id, estado);

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