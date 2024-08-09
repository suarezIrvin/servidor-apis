const pool = require("../config/connection");


const teoController = {

    getImgEvent: async (req, res) => {
        try {
            // Consulta SQL para obtener eventos con una sola imagen por evento y nombres correspondientes
            const [rows] = await pool.query(
                `SELECT e.evento_id, e.nombre AS evento_nombre, e.fecha_inicio, e.fecha_termino, e.hora, 
                        te.nombre AS tipo_evento, c.nombre AS categoria, e.ubicacion, e.max_per, 
                        e.estado, e.autorizado_por, e.fecha_autorizacion, e.validacion_id, 
                        (SELECT i.imagen_url FROM Imagenes i WHERE i.evento_id = e.evento_id LIMIT 1) AS imagen_url,
                        (SELECT p.monto FROM Pagos p WHERE p.evento_id = e.evento_id LIMIT 1) AS monto,
                        (SELECT s.forma FROM Escenario s WHERE s.evento_id = e.evento_id LIMIT 1) AS forma_escenario,
                        (SELECT d.descripcion FROM Detalles_Evento d WHERE d.evento_id = e.evento_id LIMIT 1) AS descripcion
                 FROM Eventos e
                 JOIN Tipos_Evento te ON e.tipo_evento_id = te.tipo_evento_id
                 JOIN Categorias c ON e.categoria_id = c.categoria_id`
            );
    
            // Verifica los datos que se obtienen de la consulta
            console.log('Datos obtenidos:', rows);
    
            // Enviar los resultados como respuesta
            res.status(200).json(rows);
        } catch (error) {
            console.error('Error al obtener la lista de eventos:', error);
            res.status(500).send('Error al obtener la lista de eventos');
        }
    },

    getIdImgEvent: async (req, res) => {
        try {
            const { id: evento_id } = req.params;
    
            const [rows] = await pool.query(
                `SELECT e.evento_id, e.nombre AS evento_nombre, e.fecha_inicio, e.fecha_termino, e.hora, 
                        te.nombre AS tipo_evento, c.nombre AS categoria, e.ubicacion, e.max_per, 
                        e.estado, e.autorizado_por, e.fecha_autorizacion, e.validacion_id, 
                        (SELECT i.imagen_url FROM Imagenes i WHERE i.evento_id = e.evento_id LIMIT 1) AS imagen_url,
                        (SELECT p.monto FROM Pagos p WHERE p.evento_id = e.evento_id LIMIT 1) AS monto,
                        (SELECT s.forma FROM Escenario s WHERE s.evento_id = e.evento_id LIMIT 1) AS forma_escenario,
                        (SELECT d.descripcion FROM Detalles_Evento d WHERE d.evento_id = e.evento_id LIMIT 1) AS descripcion
                 FROM Eventos e
                 JOIN Tipos_Evento te ON e.tipo_evento_id = te.tipo_evento_id
                 JOIN Categorias c ON e.categoria_id = c.categoria_id
                 WHERE e.evento_id = ?`,
                [evento_id]
            );
    
            if (rows.length === 0) {
                return res.status(404).json({ message: 'Evento no encontrado' });
            }
    
            res.status(200).json(rows[0]);
        } catch (error) {
            console.error('Error al obtener el evento:', error);
            res.status(500).send('Error al obtener el evento');
        }
    },

    postImgEvent: async (req, res) => {
        const { nombre, fecha_inicio, fecha_termino, hora, tipo_evento_id, categoria_id, ubicacion, max_per, imagen_url, monto, forma, descripcion } = req.body;

        // Validar que todos los campos necesarios estén presentes
        if (!nombre || !fecha_inicio || !fecha_termino || !hora || !tipo_evento_id || !categoria_id || !ubicacion || !max_per || !imagen_url || !monto || !forma || !descripcion) {
            return res.status(400).send('Todos los campos son obligatorios');
        }
    
        // Validar tipo_evento_id y categoria_id
        const validTipoEventoIds = [1, 2];
        const validCategoriaIds = [1, 2, 3, 4];
    
        if (!validTipoEventoIds.includes(tipo_evento_id)) {
            return res.status(400).send('Invalid tipo_evento_id');
        }
    
        if (!validCategoriaIds.includes(categoria_id)) {
            return res.status(400).send('Invalid categoria_id');
        }
    
        // Validar forma
        const validFormas = ['Cuadrado', 'Redondo', 'Triangular'];
        if (!validFormas.includes(forma)) {
            return res.status(400).send('Invalid forma');
        }
    
        try {
            // Insertar el evento
            const [resultEvento] = await pool.query(
                `INSERT INTO Eventos (nombre, fecha_inicio, fecha_termino, hora, tipo_evento_id, categoria_id, ubicacion, max_per, estado, autorizado_por, fecha_autorizacion, validacion_id)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'Pendiente', NULL, NULL, NULL)`,
                [nombre, fecha_inicio, fecha_termino, hora, tipo_evento_id, categoria_id, ubicacion, max_per]
            );
    
            const evento_id = resultEvento.insertId;
    
            // Insertar la imagen asociada al evento
            await pool.query(
                `INSERT INTO Imagenes (evento_id, imagen_url) VALUES (?, ?)`,
                [evento_id, imagen_url]
            );
    
            // Insertar el pago asociado al evento
            await pool.query(
                `INSERT INTO Pagos (evento_id, monto) VALUES (?, ?)`,
                [evento_id, monto]
            );
    
            // Insertar la forma y asiento en la tabla Escenario
            console.log(`Inserting forma: ${forma} with max_per: ${max_per} for evento_id: ${evento_id}`);
            await pool.query(
                `INSERT INTO Escenario (evento_id, forma, asiento) VALUES (?, ?, ?)`,
                [evento_id, forma, max_per]
            );
    
            // Insertar la descripción en la tabla Detalles_Evento
            await pool.query(
                `INSERT INTO Detalles_Evento (evento_id, descripcion) VALUES (?, ?)`,
                [evento_id, descripcion]
            );
    
            // Éxito al crear el evento
            res.status(201).send('Evento creado correctamente');
        } catch (error) {
            console.error('Error al crear el evento:', error);
            res.status(500).send('Error al crear el evento');
        }
    },

    putImgEvent: async (req, res) => {
        const { id } = req.params;
        const { nombre, fecha_inicio, fecha_termino, hora, tipo_evento_id, categoria_id, ubicacion, max_per, imagen_url, monto, forma, descripcion } = req.body;
    
        // Validar que todos los campos necesarios estén presentes
        if (!nombre || !fecha_inicio || !fecha_termino || !hora || !tipo_evento_id || !categoria_id || !ubicacion || !max_per || !imagen_url || !monto || !forma || !descripcion) {
            return res.status(400).send('Todos los campos son obligatorios');
        }
    
        // Validar tipo_evento_id y categoria_id
        const validTipoEventoIds = [1, 2];
        const validCategoriaIds = [1, 2, 3, 4];
    
        if (!validTipoEventoIds.includes(tipo_evento_id)) {
            return res.status(400).send('Invalid tipo_evento_id');
        }
    
        if (!validCategoriaIds.includes(categoria_id)) {
            return res.status(400).send('Invalid categoria_id');
        }
    
        // Validar forma
        const validFormas = ['Cuadrado', 'Redondo', 'Triangular'];
        if (!validFormas.includes(forma)) {
            return res.status(400).send('Invalid forma');
        }
    
        try {
            // Actualizar el evento
            await pool.query(
                `UPDATE Eventos 
                 SET nombre = ?, fecha_inicio = ?, fecha_termino = ?, hora = ?, tipo_evento_id = ?, categoria_id = ?, ubicacion = ?, max_per = ?
                 WHERE evento_id = ?`,
                [nombre, fecha_inicio, fecha_termino, hora, tipo_evento_id, categoria_id, ubicacion, max_per, id]
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
    
            // Actualizar la forma y asiento en la tabla Escenario
            await pool.query(
                `UPDATE Escenario 
                 SET forma = ?, asiento = ?
                 WHERE evento_id = ?`,
                [forma, max_per, id]
            );
    
            // Actualizar la descripción en la tabla Detalles_Evento
            await pool.query(
                `UPDATE Detalles_Evento 
                 SET descripcion = ?
                 WHERE evento_id = ?`,
                [descripcion, id]
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
            // Consulta SQL para obtener eventos con estado "Aprobado" y una sola imagen por evento y nombres correspondientes
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
    
            // Verifica los datos que se obtienen de la consulta
            console.log('Datos obtenidos:', rows);
    
            // Enviar los resultados como respuesta
            res.status(200).json(rows);
        } catch (error) {
            console.error('Error al obtener la lista de eventos aprobados:', error);
            res.status(500).send('Error al obtener la lista de eventos aprobados');
        }
    },
    
    getPendingEvent: async (req, res) => {
        try {
            // Consulta SQL para obtener eventos con estado "Pendiente" y una sola imagen por evento
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
    
            // Verifica los datos que se obtienen de la consulta
            console.log('Datos obtenidos:', rows);
    
            // Enviar los resultados como respuesta
            res.status(200).json(rows);
        } catch (error) {
            console.error('Error al obtener la lista de eventos pendientes:', error);
            res.status(500).send('Error al obtener la lista de eventos pendientes');
        }
    },
    
    postPendingEvent: async (req, res) => {
        const { evento_id, estado } = req.body;
    
        // Validar el estado
        if (!['Aprobado', 'Rechazado'].includes(estado)) {
            return res.status(400).send('Estado inválido');
        }
    
        try {
            // Actualizar el estado del evento
            const [result] = await pool.query(
                `UPDATE Eventos SET estado = ? WHERE evento_id = ?`,
                [estado, evento_id]
            );
    
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
    },

    deleteImgEvent: async (req, res) => {
        const connection = await pool.getConnection(); // Obtener una conexión del pool

        try {
            const { evento_id } = req.body;

            await connection.beginTransaction(); // Iniciar transacción

            // Luego, elimina las imágenes relacionadas
            await connection.query('DELETE FROM Imagenes WHERE evento_id = ?', [evento_id]);

            // Eliminar registros relacionados en las tablas 'Pagos', 'Escenario' y 'Detalles_Evento'
            await connection.query('DELETE FROM Pagos WHERE evento_id = ?', [evento_id]);
            await connection.query('DELETE FROM Escenario WHERE evento_id = ?', [evento_id]);
            await connection.query('DELETE FROM Detalles_Evento WHERE evento_id = ?', [evento_id]);

            // Finalmente, elimina el evento de la tabla 'Eventos'
            const [result] = await connection.query('DELETE FROM Eventos WHERE evento_id = ?', [evento_id]);

            if (result.affectedRows === 0) {
                await connection.rollback(); // Deshacer transacción si no se encontró el evento
                return res.status(404).send('Evento no encontrado');
            }

            await connection.commit(); // Confirmar transacción
            res.status(200).send('Evento eliminado exitosamente');
        } catch (error) {
            await connection.rollback(); // Deshacer transacción en caso de error
            console.error('Error al eliminar el evento:', error);
            res.status(500).send('Error al eliminar el evento');
        } finally {
            connection.release(); // Liberar la conexión del pool
        }
    },
}

module.exports = teoController;