const express = require('express');
const router = express.Router();
const eventController = require("../controllers/eventController");
const { validateRole } = require('../middlewares/validateRole');


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
 * /api/events/events:
 *   get:
 *     summary: Esta ruta obtiene todos los eventos disponibles.
 *     description: Esta ruta sirve para obtener todos los eventos.
 *     tags: [Eventos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de eventos obtenida con éxito
 *       500:
 *         description: Error al obtener la lista de eventos
 */
router.get('/events', validateRole([1]), eventController.getEvent);

/**
 * @swagger
 * /api/events/find/{evento_id}:
 *   get:
 *     summary: Esta ruta obtiene un evento por medio de su ID.
 *     description: Esta ruta obtiene un evento por su ID.
 *     tags: [Eventos]
 *     parameters:
 *       - in: path
 *         name: evento_id 
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
router.get('/find/:evento_id', eventController.getIdEvent);

/**
 * @swagger
 * /api/events/search:
 *   get:
 *     summary: Search for events based on various filters.
 *     description: This endpoint allows searching for events using different filters such as name, location, date range, category, and event type.
 *     tags: [Eventos]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Name of the event.
 *       - in: query
 *         name: location
 *         schema:
 *           type: string
 *         description: Location of the event.
 *       - in: query
 *         name: start_date
 *         schema:
 *           type: string
 *           format: date
 *         description: The start date of the event (YYYY-MM-DD).
 *       - in: query
 *         name: end_date
 *         schema:
 *           type: string
 *           format: date
 *         description: The end date of the event (YYYY-MM-DD).
 *       - in: query
 *         name: category_id
 *         schema:
 *           type: integer
 *         description: The ID of the event's category.
 *       - in: query
 *         name: event_type
 *         schema:
 *           type: string
 *         description: The type of the event.
 *     responses:
 *       200:
 *         description: List of events that match the search criteria.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   nombre:
 *                     type: string
 *                     description: Name of the event.
 *                   fecha_inicio:
 *                     type: string
 *                     format: date
 *                     description: Start date of the event.
 *                   fecha_termino:
 *                     type: string
 *                     format: date
 *                     description: End date of the event.
 *                   ubicacion:
 *                     type: string
 *                     description: Location of the event.
 *       400:
 *         description: At least one search parameter must be provided.
 *       404:
 *         description: No events found matching the search criteria.
 *       500:
 *         description: Error while filtering events.
 */

router.get('/search', eventController.searchFilter);

/**
 * @swagger
 * /api/events/approved:
 *   get:
 *     summary: Obtiene la lista de eventos aprobados para clientes.
 *     description: Esta ruta sirve para obtener los eventos aprobados por clientes.
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
 *                 description: Nombre del evento
 *                 example: Concierto de Rock
 *               fecha_inicio:
 *                 type: string
 *                 format: date
 *                 description: Fecha de inicio del evento
 *                 example: 2024-11-20
 *               fecha_termino:
 *                 type: string
 *                 format: date
 *                 description: Fecha de término del evento
 *                 example: 2024-11-21
 *               requerimientos:
 *                 type: string
 *                 description: requerimientos
 *                 example: requerimientos
 *               organizador_id:
 *                 type: integer
 *                 description: ID del organizador del evento
 *                 example: 243
 *               escenario:
 *                 type: integer
 *                 description: Escenario del evento
 *                 example: 2
 *               tipo_evento:
 *                 type: integer
 *                 description: Tipo de evento (ID)
 *                 example: 1
 *               categoria_id:
 *                 type: integer
 *                 description: ID de la categoría del evento
 *                 example: 2
 *               ubicacion:
 *                 type: string
 *                 description: Ubicación del evento
 *                 example: Ciudad de México
 *               max_per:
 *                 type: integer
 *                 description: Capacidad máxima de personas para el evento
 *                 example: 5000
 *               imagen_url:
 *                 type: string
 *                 description: URL de la imagen del evento
 *                 example: https://example.com/imagen_evento.jpg
 *               precio:
 *                 type: number
 *                 format: float
 *                 description: Precio del evento
 *                 example: 150.00
 *               descripcion:
 *                 type: string
 *                 description: Descripción del evento
 *                 example: Un concierto de rock con bandas internacionales.
 *               horarios:
 *                 type: array
 *                 description: Lista de horarios del evento
 *                 items:
 *                   type: object
 *                   properties:
 *                     hora_inicio:
 *                       type: string
 *                       format: time
 *                       description: Hora de inicio
 *                       example: 19:00:00
 *                     hora_fin:
 *                       type: string
 *                       format: time
 *                       description: Hora de término
 *                       example: 21:00:00
 *             required:
 *               - nombre
 *               - fecha_inicio
 *               - fecha_termino
 *               - requerimientos
 *               - organizador_id
 *               - escenario
 *               - tipo_evento
 *               - categoria_id
 *               - ubicacion
 *               - max_per
 *               - imagen_url
 *               - precio
 *               - descripcion
 *               - horarios
 *     responses:
 *       201:
 *         description: Evento creado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: Evento creado correctamente
 *       400:
 *         description: Datos inválidos en la solicitud
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: Datos inválidos en la solicitud
 *       500:
 *         description: Error al crear el evento
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: Error al crear el evento
 */

router.post('/post/', eventController.postEvent);


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
 *                 example: "Concierto de Rock Actualizado"
 *               fecha_inicio:
 *                 type: string
 *                 format: date
 *                 example: "2024-11-22"
 *               fecha_termino:
 *                 type: string
 *                 format: date
 *                 example: "2024-11-23"
 *               escenario:
 *                 type: integer
 *                 example: 2
 *               tipo_evento:
 *                 type: integer
 *                 example: 1
 *               categoria_id:
 *                 type: integer
 *                 example: 3
 *               ubicacion:
 *                 type: string
 *                 example: "Ciudad de México"
 *               max_per:
 *                 type: integer
 *                 example: 5000
 *               imagen_url:
 *                 type: string
 *                 example: "https://example.com/imagen_actualizada_evento.jpg"
 *               precio:
 *                 type: number
 *                 format: float
 *                 example: 180.00
 *               descripcion:
 *                 type: string
 *                 example: "Un concierto de rock actualizado con bandas internacionales."
 *               requerimientos:
 *                 type: string
 *                 example: "Sonido profesional actualizado, iluminación especial"
 *               horarios:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     hora_inicio:
 *                       type: string
 *                       format: time
 *                       example: "18:00:00"
 *                     hora_fin:
 *                       type: string
 *                       format: time
 *                       example: "20:00:00"
 *             required:
 *               - nombre
 *               - fecha_inicio
 *               - fecha_termino
 *               - escenario
 *               - tipo_evento
 *               - categoria_id
 *               - ubicacion
 *               - max_per
 *               - imagen_url
 *               - precio
 *               - descripcion
 *               - requerimientos
 *               - horarios
 *     responses:
 *       200:
 *         description: Evento actualizado correctamente
 *       400:
 *         description: Datos inválidos en la solicitud
 *       404:
 *         description: Evento no encontrado
 *       500:
 *         description: Error al actualizar el evento
 */

router.put('/put/:id', eventController.putEvent);

/**
 * @swagger
 * /api/events/delete/{evento_id}:
 *   delete:
 *     summary: Eliminar un evento por su ID.
 *     description: Esta ruta elimina un evento por su ID utilizando el parámetro `evento_id` en la URL.
 *     tags: [Eventos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: evento_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del evento que se desea eliminar
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

router.delete('/delete/:evento_id', validateRole([1]), eventController.delete);


module.exports = router;
