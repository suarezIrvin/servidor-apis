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

    getEventByTicket: async (ticket) =>{
        const [result] = await pool.query(
            `SELECT t.ticket_id, t.code, t.status, h.hora_inicio, h.hora_fin, e.evento_id, e.nombre, e.fecha_inicio, e.ubicacion, e.tipo_evento, e.fecha_termino
        FROM tickets t
        JOIN horarios h ON t.id_horario = h.horario_id
        JOIN eventos e ON h.evento_id = e.evento_id
        WHERE t.ticket_id = ?`, [ticket]
        );
        return result;
    },

    
    searchFilter: async (name, location, start_date, end_date, category_id, event_type) => {
        let query = `
            SELECT 
                evento_id, 
                nombre, 
                fecha_inicio, 
                fecha_termino, 
                ubicacion, 
                categoria_id, 
                tipo_evento, 
                max_per, 
                descripcion, 
                precio  
            FROM 
                eventos 
            WHERE 
                1=1`;
        
        let queryParams = [];
    
        // Filtro por nombre del evento
        if (name) {
            query += ' AND nombre LIKE ?';
            queryParams.push(`%${name}%`);
        }
    
        // Filtro por ubicación del evento
        if (location) {
            query += ' AND ubicacion LIKE ?';
            queryParams.push(`%${location}%`);
        }
    
        // Filtro por rango de fechas (fecha de inicio y fecha de término)
        if (start_date) {
            query += ' AND fecha_inicio >= ?';
            queryParams.push(start_date);
        }
        if (end_date) {
            query += ' AND fecha_termino <= ?';
            queryParams.push(end_date);
        }
    
        // Filtro por categoría
        if (category_id) {
            query += ' AND categoria_id = ?';
            queryParams.push(category_id);
        }
    
        // Filtro por tipo de evento
        if (event_type) {
            query += ' AND tipo_evento = ?';
            queryParams.push(event_type);
        }
    
        // Obtener los eventos filtrados
        const [events] = await pool.query(query, queryParams);
    
        // Si no hay eventos, retornar un array vacío
        if (events.length === 0) {
            return [];
        }
    
        // Obtener los horarios para todos los eventos encontrados
        const [horarios] = await pool.query(
            `SELECT 
                evento_id, 
                hora_inicio, 
                hora_fin
            FROM 
                horarios
            WHERE 
                evento_id IN (?)
            ORDER BY 
                evento_id, 
                hora_inicio`,
            [events.map(event => event.evento_id)]  // Obtener solo los horarios de los eventos encontrados
        );
    
        // Mapear los eventos con sus horarios
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
    
        // Formatear los eventos con horarios en propiedades individuales
        const result = [];
        eventMap.forEach(event => {
            let count = 1;
            event.horarios.forEach(horario => {
                event[`horario_inicio_${count}`] = horario.hora_inicio;
                event[`horario_fin_${count}`] = horario.hora_fin;
                count++;
            });
            delete event.horarios; // Opcional: eliminar el array original de horarios si no es necesario
            result.push(event);
        });
    
        return result;
    },
    
    

    postEvent: async (nombre, fecha_inicio, fecha_termino, requerimientos, organizador_id, escenario, tipo_evento, categoria_id, ubicacion, max_per, imagen_url, precio, descripcion, horarios) => {
        const connection = await pool.getConnection(); // Iniciar una transacción
        try {
            await connection.beginTransaction();
    
            // Insertar el evento con validacion_id por defecto en 2
            const [result] = await connection.query(
                `INSERT INTO eventos (nombre, fecha_inicio, fecha_termino, requerimientos, organizador_id, escenario, tipo_evento, categoria_id, ubicacion, max_per, precio, descripcion, estado, validacion_id)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'Pendiente', 2)`,
                [nombre, fecha_inicio, fecha_termino, requerimientos, organizador_id, escenario, tipo_evento, categoria_id, ubicacion, max_per, precio, descripcion]
              );
              
            const evento_id = result.insertId;
    
            // Insertar la imagen asociada al evento
            await connection.query(
                `INSERT INTO imagenes (evento_id, imagen_url) VALUES (?, ?)`,
                [evento_id, imagen_url]
            );
    
            // Insertar los horarios si existen
            if (Array.isArray(horarios) && horarios.length > 0) {
                for (const horario of horarios) {
                    await connection.query(
                        `INSERT INTO horarios (evento_id, hora_inicio, hora_fin) VALUES (?, ?, ?)`,
                        [evento_id, horario.hora_inicio, horario.hora_fin]
                    );
                }
            }
    
            await connection.commit(); // Confirmar la transacción
            return result;
        } catch (error) {
            await connection.rollback(); // Revertir en caso de error
            throw error;
        } finally {
            connection.release(); // Liberar la conexión
        }
    },
    
    
    
    updateEvent: async (evento_id, nombre, fecha_inicio, fecha_termino, escenario, tipo_evento, categoria_id, ubicacion, max_per, imagen_url, precio, descripcion, requerimientos, horarios) => {
        const connection = await pool.getConnection();
        try {
            await connection.beginTransaction();
    
            // Actualizar el evento
            const [result] = await connection.query(
                `UPDATE eventos 
                 SET nombre = ?, fecha_inicio = ?, fecha_termino = ?, escenario = ?, 
                     tipo_evento = ?, categoria_id = ?, ubicacion = ?, max_per = ?, precio = ?, descripcion = ?, requerimientos = ?
                 WHERE evento_id = ?`,
                [nombre, fecha_inicio, fecha_termino, escenario, tipo_evento, categoria_id, ubicacion, max_per, precio, descripcion, requerimientos, evento_id]
            );
            
            // Actualizar la imagen asociada al evento
            await connection.query(
                `UPDATE imagenes 
                 SET imagen_url = ? 
                 WHERE evento_id = ?`,
                [imagen_url, evento_id]
            );
    
            // Eliminar los horarios actuales del evento para poder insertar los nuevos
            await connection.query(
                `DELETE FROM horarios WHERE evento_id = ?`,
                [evento_id]
            );
    
            // Insertar los nuevos horarios si existen
            if (Array.isArray(horarios) && horarios.length > 0) {
                for (const horario of horarios) {
                    await connection.query(
                        `INSERT INTO horarios (evento_id, hora_inicio, hora_fin) VALUES (?, ?, ?)`,
                        [evento_id, horario.hora_inicio, horario.hora_fin]
                    );
                }
            }
    
            await connection.commit(); // Confirmar la transacción
            return result;
        } catch (error) {
            await connection.rollback(); // Revertir en caso de error
            throw error;
        } finally {
            connection.release(); // Liberar la conexión
        }
    },
    
    
    deleteEvent: async (evento_id) => {
        const connection = await pool.getConnection();
        try {
            await connection.beginTransaction();
    
            // Eliminar los horarios asociados al evento
            await connection.query(
                `DELETE FROM horarios WHERE evento_id = ?`,
                [evento_id]
            );
    
            // Ahora eliminar el evento
            const [result] = await connection.query(
                `DELETE FROM eventos WHERE evento_id = ?`,
                [evento_id]
            );
    
            await connection.commit(); // Confirmar la transacción
            return result;
        } catch (error) {
            await connection.rollback(); // Revertir en caso de error
            throw error;
        } finally {
            connection.release(); // Liberar la conexión
        }
    },

    getApprovedEvents: async () => {
        // Obtener eventos con estado "Aprobado"
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
            WHERE 
                e.estado = 'Aprobado'` // Filtrar eventos con estado "Aprobado"
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
    
}


// const eventModel = {
//     getPendingEvents: async () => {
//         try {
//             const [rows] = await pool.query(
//                 `SELECT e.evento_id, e.nombre AS evento_nombre, e.fecha_inicio, e.fecha_termino, e.hora, 
//                         te.nombre AS tipo_evento, c.nombre AS categoria, 
//                         e.ubicacion, e.max_per, e.estado, e.autorizado_por, e.fecha_autorizacion, e.validacion_id, 
//                         (SELECT i.imagen_url FROM Imagenes i WHERE i.evento_id = e.evento_id LIMIT 1) AS imagen_url,
//                         (SELECT p.monto FROM Pagos p WHERE p.evento_id = e.evento_id LIMIT 1) AS monto,
//                         (SELECT s.forma FROM Escenario s WHERE s.evento_id = e.evento_id LIMIT 1) AS forma_escenario,
//                         (SELECT d.descripcion FROM Detalles_Evento d WHERE d.evento_id = e.evento_id LIMIT 1) AS descripcion
//                  FROM Eventos e
//                  JOIN Tipos_Evento te ON e.tipo_evento_id = te.tipo_evento_id
//                  JOIN Categorias c ON e.categoria_id = c.categoria_id
//                  WHERE e.estado = 'Pendiente'`
//             );
//             return rows;
//         } catch (error) {
//             console.error('Error al obtener la lista de eventos pendientes:', error);
//             throw error;
//         }
//     },

//     updateEventStatus: async (evento_id, estado) => {
//         try {
//             const [result] = await pool.query(
//                 `UPDATE Eventos SET estado = ? WHERE evento_id = ?`,
//                 [estado, evento_id]
//             );
//             return result;
//         } catch (error) {
//             console.error('Error al actualizar el estado del evento:', error);
//             throw error;
//         }
//     },
// }


module.exports = Event;
