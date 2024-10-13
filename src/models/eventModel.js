const pool = require('../config/connection');

const Event = {
    getEvent: async () => {
        // Obtener eventos
        const [events] = await pool.query(
            `SELECT 
                e.evento_id, 
                e.nombre AS evento_nombre, 
                e.fecha_inicio, 
                e.fecha_termino,   
                e.ubicacion,
                e.descripcion,
                e.validacion_id, 
                e.escenario,  
                e.precio,  
                e.max_per, 
                e.estado, 
                e.autorizado_por, 
                e.fecha_autorizacion, 
                i.imagen_url,
                s.forma AS forma_escenario
            FROM 
                eventos e
            LEFT JOIN imagenes i ON i.evento_id = e.evento_id
            LEFT JOIN escenario s ON s.evento_id = e.evento_id`
        );

        // Obtener horarios
        const [horarios] = await pool.query(
            `SELECT 
                evento_id, 
                hora_inicio, 
                hora_fin
            FROM 
                horarios
            ORDER BY 
                evento_id, 
                hora_inicio;`
        );

        // Mapear horarios a eventos
        const eventMap = new Map();
        events.forEach(event => {
            eventMap.set(event.evento_id, {
                ...event,
                horarios: []
            });
        });

        horarios.forEach(horario => {
            if (eventMap.has(horario.evento_id)) {
                const event = eventMap.get(horario.evento_id);
                event.horarios.push(horario);
            }
        });

        // Convertir el mapa a un array y formatear horarios
        const result = [];
        eventMap.forEach(event => {
            let count = 1;
            event.horarios.forEach(horario => {
                event[`horario_inicio_${count}`] = horario.hora_inicio;
                event[`horario_fin_${count}`] = horario.hora_fin;
                count++;
            });
            delete event.horarios; // Opcional: Eliminar el array original si no es necesario
            result.push(event);
        });

        return result;
    },


    getEvetId: async (evento_id) => {
        // Obtener evento por ID
        const [events] = await pool.query(
            `SELECT 
                e.evento_id, 
                e.nombre AS evento_nombre, 
                e.fecha_inicio, 
                e.fecha_termino,   
                e.ubicacion,
                e.descripcion,
                e.validacion_id, 
                e.escenario,  
                e.precio,  
                e.max_per, 
                e.estado, 
                e.autorizado_por, 
                e.fecha_autorizacion, 
                i.imagen_url,
                s.forma AS forma_escenario
            FROM 
                eventos e
            LEFT JOIN imagenes i ON i.evento_id = e.evento_id
            LEFT JOIN escenario s ON s.evento_id = e.evento_id
            WHERE e.evento_id = ?`,
            [evento_id]
        );

        if (events.length === 0) {
            return null;
        }

        // Obtener horarios del evento específico
        const [horarios] = await pool.query(
            `SELECT 
                evento_id, 
                hora_inicio, 
                hora_fin
            FROM 
                horarios
            WHERE evento_id = ?
            ORDER BY 
                hora_inicio;`,
            [evento_id]
        );

        const event = {
            ...events[0],
            horarios: horarios
        };

        // Formatear horarios en propiedades individuales
        let count = 1;
        event.horarios.forEach(horario => {
            event[`horario_inicio_${count}`] = horario.hora_inicio;
            event[`horario_fin_${count}`] = horario.hora_fin;
            count++;
        });
        delete event.horarios;

        return event;
    },

    postEvent: async (nombre, fecha_inicio, fecha_termino, tipo_evento_id, categoria_id, ubicacion, max_per, imagen_url, precio, descripcion, horarios) => {
        const connection = await pool.getConnection(); // Iniciar una transacción
        try {
            await connection.beginTransaction();

            // Insertar el evento principal con el estado 'Pendiente' por defecto
            const [result] = await connection.query(
                `INSERT INTO eventos (nombre, fecha_inicio, fecha_termino, tipo_evento_id, categoria_id, ubicacion, max_per, precio, descripcion, estado, autorizado_por, fecha_autorizacion, validacion_id)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'Pendiente', NULL, NULL, NULL)`,
                [nombre, fecha_inicio, fecha_termino, tipo_evento_id, categoria_id, ubicacion, max_per, precio, descripcion]
            );

            const evento_id = result.insertId;

            // Insertar la imagen asociada al evento
            await connection.query(
                `INSERT INTO imagenes (evento_id, imagen_url) VALUES (?, ?)`,
                [evento_id, imagen_url]
            );

            // Insertar los horarios asociados al evento
            for (const horario of horarios) {
                await connection.query(
                    `INSERT INTO horarios (evento_id, hora_inicio, hora_fin) VALUES (?, ?, ?)`,
                    [evento_id, horario.hora_inicio, horario.hora_fin]
                );
            }

            await connection.commit(); // Confirmar la transacción
            return result;
        } catch (error) {
            await connection.rollback(); // Revertir la transacción en caso de error
            throw error;
        } finally {
            connection.release(); // Liberar la conexión
        }
    },

    updateEvent: async (id, nombre, fecha_inicio, fecha_termino, hora, ubicacion, max_per, imagen_url, monto, descripcion) => {
        const [result] = await pool.query(
            `UPDATE Eventos 
             SET nombre = ?, fecha_inicio = ?, fecha_termino = ?, hora = ?, tipo_evento_id = ?, categoria_id = ?, ubicacion = ?, max_per = ?
             WHERE evento_id = ?`,
            [nombre, fecha_inicio, fecha_termino, hora, ubicacion, max_per, id]
        );

        // Actualizar la imagen asociada al evento
        await pool.query(
            `UPDATE Imagenes 
             SET imagen_url = ?
             WHERE evento_id = ?`,
            [imagen_url, id]
        );

        // Actualizar el pago asociado al evento
        await pool.query(
            `UPDATE Pagos 
             SET monto = ?
             WHERE evento_id = ?`,
            [monto, id]
        );

        // No se actualiza la tabla Escenario ya que no se relaciona con forma y asiento

        // Actualizar la descripción en la tabla Detalles_Evento
        await pool.query(
            `UPDATE Detalles_Evento 
             SET descripcion = ?
             WHERE evento_id = ?`,
            [descripcion, id]
        );

        return result;
    },

    deleteEvent: async (evento_id) => {
        const [result] = await pool.query('DELETE FROM Eventos WHERE evento_id = ?', [evento_id]);


        return result;
    }


}

const eventModel = {
    getApprovedEvents: async () => {
        try {
            const [rows] = await pool.query(
                `SELECT e.evento_id, e.nombre AS evento_nombre, e.fecha_inicio, e.fecha_termino, e.hora, 
                        te.nombre AS tipo_evento, c.nombre AS categoria, 
                        e.ubicacion, e.max_per, e.estado, e.autorizado_por, e.fecha_autorizacion, e.validacion_id, 
                        (SELECT i.imagen_url FROM Imagenes i WHERE i.evento_id = e.evento_id LIMIT 1) AS imagen_url,
                        (SELECT p.monto FROM Pagos p WHERE p.evento_id = e.evento_id LIMIT 1) AS monto,
                        (SELECT s.forma FROM Escenario s WHERE s.evento_id = e.evento_id LIMIT 1) AS forma_escenario,
                        (SELECT d.descripcion FROM Detalles_Evento d WHERE d.evento_id = e.evento_id LIMIT 1) AS descripcion
                 FROM Eventos e
                 JOIN Tipos_Evento te ON e.tipo_evento_id = te.tipo_evento_id
                 JOIN Categorias c ON e.categoria_id = c.categoria_id
                 WHERE e.estado = 'Aprobado'`
            );

            return rows; // Devolvemos los datos obtenidos en la consulta
        } catch (error) {
            console.error('Error al obtener la lista de eventos aprobados:', error);
            throw error; // Lanzamos el error para que pueda ser manejado por el controlador
        }

    },

    getPendingEvents: async () => {
        try {
            const [rows] = await pool.query(
                `SELECT e.evento_id, e.nombre AS evento_nombre, e.fecha_inicio, e.fecha_termino, e.hora, 
                        te.nombre AS tipo_evento, c.nombre AS categoria, 
                        e.ubicacion, e.max_per, e.estado, e.autorizado_por, e.fecha_autorizacion, e.validacion_id, 
                        (SELECT i.imagen_url FROM Imagenes i WHERE i.evento_id = e.evento_id LIMIT 1) AS imagen_url,
                        (SELECT p.monto FROM Pagos p WHERE p.evento_id = e.evento_id LIMIT 1) AS monto,
                        (SELECT s.forma FROM Escenario s WHERE s.evento_id = e.evento_id LIMIT 1) AS forma_escenario,
                        (SELECT d.descripcion FROM Detalles_Evento d WHERE d.evento_id = e.evento_id LIMIT 1) AS descripcion
                 FROM Eventos e
                 JOIN Tipos_Evento te ON e.tipo_evento_id = te.tipo_evento_id
                 JOIN Categorias c ON e.categoria_id = c.categoria_id
                 WHERE e.estado = 'Pendiente'`
            );
            return rows;
        } catch (error) {
            console.error('Error al obtener la lista de eventos pendientes:', error);
            throw error;
        }
    },

    updateEventStatus: async (evento_id, estado) => {
        try {
            const [result] = await pool.query(
                `UPDATE Eventos SET estado = ? WHERE evento_id = ?`,
                [estado, evento_id]
            );
            return result;
        } catch (error) {
            console.error('Error al actualizar el estado del evento:', error);
            throw error;
        }
    },



}


module.exports = Event;