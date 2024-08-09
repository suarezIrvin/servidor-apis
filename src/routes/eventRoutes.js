const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
const teoController = require("../controllers/teoController");
const authMiddleware = require("../middlewares/authMiddleware");

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
 *   name: Admin events - Team Brayan
 *   description: Rutas para la administración de eventos
 */


/**
 * @swagger
 * /api/events/create:
 *   post:
 *     summary: Crear un nuevo evento
 *     tags: [Evento - Stephanie]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - fecha_inicio
 *               - fecha_termino
 *               - hora
 *               - ubicacion
 *               - max_per
 *               - tipo_evento_id
 *               - categoria_id
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
 *               ubicacion:
 *                 type: string
 *               max_per:
 *                 type: integer
 *               tipo_evento_id:
 *                 type: integer
 *               categoria_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Event created successfully
 *       500:
 *         description: Internal server error
 */
router.post("/create",  eventController.createEvent);

/**
 * @swagger
 * /api/events/update/{evento_id}:
 *   put:
 *     summary: Update an existing event
 *     tags: [Evento - Stephanie]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: evento_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - fecha_inicio
 *               - fecha_termino
 *               - hora
 *               - ubicacion
 *               - max_per
 *               - tipo_evento_id
 *               - categoria_id
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
 *               ubicacion:
 *                 type: string
 *               max_per:
 *                 type: integer
 *               tipo_evento_id:
 *                 type: integer
 *               categoria_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Event updated successfully
 *       404:
 *         description: Event not found
 *       500:
 *         description: Internal server error
 */
router.put("/update/:evento_id", authMiddleware, eventController.updateEvent);

/**
 * @swagger
 * /api/events/organizer:
 *   get:
 *     summary: List organizer's events
 *     tags: [Evento - Stephanie]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of events
 *       500:
 *         description: Internal server error
 */
router.get("/organizer", authMiddleware, eventController.listOrganizerEvents);

/**
 * @swagger
 * /api/events/pending:
 *   get:
 *     summary: List pending events
 *     tags: [Evento - Stephanie]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of pending events
 *       500:
 *         description: Internal server error
 */
router.get("/pending", eventController.listPendingEvents);

/**
 * @swagger
 * /api/events/approve/{evento_id}:
 *   post:
 *     summary: Approve an event
 *     tags: [Evento - Stephanie]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: evento_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event ID
 *     responses:
 *       200:
 *         description: Event approved successfully
 *       404:
 *         description: Event not found
 *       500:
 *         description: Internal server error
 */
router.post("/approve/:evento_id", authMiddleware, eventController.approveEvent);

/**
 * @swagger
 * /api/events/disapprove/{evento_id}:
 *   post:
 *     summary: Disapprove an event
 *     tags: [Evento - Stephanie]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: evento_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event ID
 *     responses:
 *       200:
 *         description: Event disapproved successfully
 *       404:
 *         description: Event not found
 *       500:
 *         description: Internal server error
 */
router.post(
  "/disapprove/:evento_id",
  authMiddleware,
  eventController.disapproveEvent
);

/**
 * @swagger
 * /api/events/get/img:
 *   get:
 *     summary: Obtener la lista de eventos detallados
 *     tags: [Admin events - Team Brayan]
 *     responses:
 *       200:
 *         description: Lista de eventos obtenida con éxito
 *       500:
 *         description: Error al obtener la lista de eventos
 */
router.get('/get/img', teoController.getImgEvent);

/**
 * @swagger
 * /api/events/get/img/{id}:
 *   get:
 *     summary: Obtener un evento por ID 
 *     tags: [Admin events - Team Brayan]
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
router.get('/get/img/:id', teoController.getIdImgEvent);
/**
 * @swagger
 * /api/events/get/approved:
 *   get:
 *     summary: Obtener la lista de eventos aprobados
 *     tags: [Admin events - Team Brayan]
 *     responses:
 *       200:
 *         description: Lista de eventos aprobados obtenida con éxito
 *       500:
 *         description: Error al obtener la lista de eventos aprobados
 */
router.get('/get/approved', teoController.getApprovedEvent);

/**
 * @swagger
 * /api/events/get/pending:
 *   get:
 *     summary: Obtener la lista de eventos pendientes
 *     tags: [Admin events - Team Brayan]
 *     responses:
 *       200:
 *         description: Lista de eventos pendientes obtenida con éxito
 *       500:
 *         description: Error al obtener la lista de eventos pendientes
 */
router.get('/get/pending', teoController.getPendingEvent);

/**
 * @swagger
 * /api/events/post/img:
 *   post:
 *     summary: Crear un nuevo evento - Organizador
 *     tags: [Admin events - Team Brayan]
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
router.post('/post/img', teoController.postImgEvent);

/**
 * @swagger
 * /api/events/post/pending:
 *   post:
 *     summary: Aprobar eventos - Administrador
 *     tags: [Admin events - Team Brayan]
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
router.post('/post/pending', teoController.postPendingEvent);

/**
 * @swagger
 * /api/events/put/img/{id}:
 *   put:
 *     summary: Actualizar un evento existente por ID
 *     tags: [Admin events - Team Brayan]
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
router.put('/put/img/:id', teoController.putImgEvent);

/**
 * @swagger
 * /api/events/delete/img/:
 *   delete:
 *     summary: Eliminar un evento 
 *     tags: [Admin events - Team Brayan]
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
router.delete('/delete/img/', teoController.deleteImgEvent);


module.exports = router;
