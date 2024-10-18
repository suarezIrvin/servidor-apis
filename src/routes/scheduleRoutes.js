const express = require('express');
const router = express.Router();
const scheduleController = require("../controllers/scheduleController");

/**
 * @openapi
 * /api/schedule/by-event/{evento_id}:
 *   get:
 *     summary: Obtiene los horarios por evento.
 *     description: Obtiene los horarios por evento.
 *     tags:
 *       - Schedule
 *     responses:
 *       200:
 *         description: Lista los horarios por evento
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   ticket_id:
 *                     type: integer
 *                     example: 1
 *                   info:
 *                     type: string
 *                     example: "Información sobre el ticket"
 *                   code:
 *                     type: string
 *                     example: "UTP-DEH-2024-10-13-1a2b3c4d"
 *                   status:
 *                     type: integer
 *                     example: 0
 *                   id_horario:
 *                     type: integer
 *                     example: 1
 *                   evento_nombre:
 *                     type: string
 *                     example: "Evento Ejemplo"
 *       500:
 *         description: Error .
 */
router.get('/by-event/:evento_id', scheduleController.getByEvent);



module.exports = router;
