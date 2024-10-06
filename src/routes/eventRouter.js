const express = require('express');
const router = express.Router();
const eventController = require("../controllers/eventController");

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * tags:
 *   name: Eventos
 *   description: Rutas para la administración de eventos
 */

/**
 * @openapi
 * /api/events/get:
 *   get:
 *     summary: Esta ruta obtiene todos los eventos disponibles.
 *     description: Esta ruta sirve para obtener todos los eventos.
 *     tags: [Eventos]
 *     responses:
 *       200:
 *         description: Lista de eventos obtenida con éxito
 *       500:
 *         description: Error al obtener la lista de eventos
 */
router.get('/get', eventController.getEvent);


/**
 * @swagger
 * /api/events/get/{evento_id}:
 *   get:
 *     summary: Esta ruta obtiene un evento por medio de su ID.
 *     description: Esta ruta obtiene un evento por su ID.
 *     tags: [Eventos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del evento
 *     responses:
 *       200:
 *         description: Evento obtenido con éxito
 *       404:
 *         description: Evento no encontrado
 *       500:
 *         description: Error al obtener el evento
 */
router.get('/get/:evento_id', eventController.getIdEvent);

/**
 * @swagger
 * /api/events/get/approved:
 *   get:
 *     summary: Obtiene la lista de eventos desaprobados para administradores.
 *     description: Esta ruta sirve para obtener los eventos desaprobados por los administradores.
 *     tags: [Eventos]
 *     responses:
 *       200:
 *         description: Lista de eventos aprobados obtenida con éxito
 *       500:
 *         description: Error al obtener la lista de eventos aprobados
 */
router.get('/approved', eventController.getApprovedEvent);

/**
 * @swagger
 * /api/events/get/pending:
 *   get:
 *     summary: Obtiene los eventos pendientes para aprobar o desaprobar para organizador.
 *     description: Esta ruta sirve para obtener todos los eventos pendientes por aprobar o desaprobar.
 *     tags: [Eventos]
 *     responses:
 *       200:
 *         description: Lista de eventos pendientes obtenida con éxito
 *       500:
 *         description: Error al obtener la lista de eventos pendientes
 */
router.get('/pending', eventController.getPendingEvent);

/**
 * @swagger
 * /api/events/post:
 *   post:
 *     summary: Esta ruta crea un nuevo evento exclusivamente para el organizador.
 *     description: Esta ruta sirve para crear un nuevo evento por el organizador.
 *     tags: [Eventos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               fecha_inicio:
 *                 type: string
 *                 format: date
 *               fecha_termino:
 *                 type: string
 *                 format: date
 *               hora:
 *                 type: string
 *                 format: time
 *               tipo_evento_id:
 *                 type: integer
 *               categoria_id:
 *                 type: integer
 *               ubicacion:
 *                 type: string
 *               max_per:
 *                 type: integer
 *               imagen_url:
 *                 type: string
 *               monto:
 *                 type: number
 *                 format: float
 *               descripcion:
 *                 type: string
 *             required:
 *               - nombre
 *               - fecha_inicio
 *               - fecha_termino
 *               - hora
 *               - tipo_evento_id
 *               - categoria_id
 *               - ubicacion
 *               - max_per
 *               - imagen_url
 *               - monto
 *               - descripcion
 *     responses:
 *       201:
 *         description: Evento creado correctamente
 *       400:
 *         description: Datos inválidos en la solicitud
 *       500:
 *         description: Error al crear el evento
 */
router.post('/post/', eventController.postPendingEvent);

/**
 * @swagger
 * /api/events/post/pending:
 *   post:
 *     summary: Esta ruta es exclusiva para los administradores, se trata de actualizar el estado del evento.
 *     description: Esta ruta actualiza el estado de un evento.
 *     tags: [Eventos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               evento_id:
 *                 type: integer
 *               estado:
 *                 type: string
 *                 enum: [Aprobado, Rechazado]
 *             required:
 *               - evento_id
 *               - estado
 *     responses:
 *       200:
 *         description: Estado del evento actualizado correctamente
 *       400:
 *         description: Estado inválido en la solicitud
 *       404:
 *         description: Evento no encontrado
 *       500:
 *         description: Error al actualizar el estado del evento
 */
router.post('/post/pending', eventController.postPendingEvent);

/**
 * @swagger
 * /api/events/put/{id}:
 *   put:
 *     summary: Actualizar un evento existente por ID del evento.
 *     description: Esta ruta actualiza la información general de un evento por medio de su ID.
 *     tags: [Eventos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del evento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               fecha_inicio:
 *                 type: string
 *                 format: date
 *               fecha_termino:
 *                 type: string
 *                 format: date
 *               hora:
 *                 type: string
 *                 format: time
 *               tipo_evento_id:
 *                 type: integer
 *               categoria_id:
 *                 type: integer
 *               ubicacion:
 *                 type: string
 *               max_per:
 *                 type: integer
 *               imagen_url:
 *                 type: string
 *               monto:
 *                 type: number
 *                 format: float
 *               descripcion:
 *                 type: string
 *             required:
 *               - nombre
 *               - fecha_inicio
 *               - fecha_termino
 *               - hora
 *               - tipo_evento_id
 *               - categoria_id
 *               - ubicacion
 *               - max_per
 *               - imagen_url
 *               - monto
 *               - descripcion
 *     responses:
 *       200:
 *         description: Evento actualizado correctamente
 *       400:
 *         description: Datos inválidos en la solicitud
 *       500:
 *         description: Error al actualizar el evento
 */
router.put('/put/:id', eventController.putEvent);

/**
 * @swagger
 * /api/events/delete/{evento_id}:
 *   delete:
 *     summary: Eliminar un evento por su ID.
 *     description: Esta ruta elimina un evento por su ID.
 *     tags: [Eventos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               evento_id:
 *                 type: integer
 *                 description: ID del evento que se desea eliminar
 *             required:
 *               - evento_id
 *     responses:
 *       200:
 *         description: Evento eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: Evento eliminado exitosamente
 *       404:
 *         description: Evento no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: Evento no encontrado
 *       500:
 *         description: Error al eliminar el evento
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: Error al eliminar el evento
 */
router.delete('/delete/:evento_id', eventController.delete);


module.exports = router;
