const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
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
 * /api/events/create:
 *   post:
 *     summary: Crear un nuevo evento
 *     tags: [Evento]
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
 *     tags: [Evento]
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
 *     tags: [Evento]
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
 *     tags: [Evento]
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
 *     tags: [Evento]
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
 *     tags: [Evento]
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

module.exports = router;
