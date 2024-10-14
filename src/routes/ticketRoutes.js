const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

/**
 * @openapi
 * /api/ticket/list:
 *   get:
 *     summary: Obtiene todos los tickets.
 *     description: Esta ruta obtiene todos los tickets creados.
 *     tags:
 *       - Tickets
 *     responses:
 *       200:
 *         description: Lista de tickets.
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
 *         description: Error al obtener los tickets.
 */
router.get('/list', ticketController.getTickets);


/**
 * @openapi
 * /api/ticket/create:
 *   post:
 *     summary: Crear un nuevo ticket.
 *     description: Esta ruta crea un nuevo ticket asociado a un horario, generando automáticamente el código y el status.
 *     tags:
 *       - Tickets
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - info
 *               - id_horario
 *             properties:
 *               info:
 *                 type: string
 *                 example: "Información del ticket"
 *               id_horario:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Ticket creado exitosamente.
 *       400:
 *         description: Faltan datos requeridos.
 *       500:
 *         description: Error al crear el ticket.
 */
router.post('/create', ticketController.createTicket);


/* NEW CODE */
// Eliminar un ticket
router.delete('/:ticket_id', ticketController.deleteTicket);

// Obtener un ticket por su ID
router.get('/:ticket_id', ticketController.getTicketById);

// Obtener los tickets de un evento
router.get('/event/:evento_id', ticketController.getTicketsByEvent2);  

// Actualizar el status de un ticket
router.put('/:ticket_id', ticketController.updateStatusTicket);

// scaner del QR
router.post('/scan-ticket', ticketController.scanTicket);


module.exports = router;
