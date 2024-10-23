const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');
const {validateRole} = require('../middlewares/validateRole');
const authMiddleware = require('../middlewares/authMiddleware');

/**
 * @openapi
 * /api/ticket/list:
 *   get:
 *     summary: Obtiene todos los tickets.
 *     description: Esta ruta obtiene todos los tickets creados.
 *     tags:
 *       - Tickets
 *     security:
 *       - bearerAuth: []  
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
router.get('/list', validateRole([2, 3]), ticketController.getTickets);



router.get('/check',validateRole([2]), ticketController.checkTicket);


/**
 * @openapi
 * /api/ticket/create:
 *   post:
 *     summary: Crear un nuevo ticket.
 *     description: Esta ruta crea un nuevo ticket asociado a un horario, generando automáticamente el código y el status.
 *     tags:
 *       - Tickets
 *     security:
 *       - bearerAuth: []  # Requiere autenticación con token
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
 *       401:
 *         description: No autorizado, token no válido o no presente.
 *       403:
 *         description: No tienes permiso para acceder a este recurso.
 *       500:
 *         description: Error al crear el ticket.
 */
router.post('/create', validateRole([2]),ticketController.createTicket);


/* NEW CODE */
/**
 * @openapi
 * /api/ticket/{ticket_id}:
 *   delete:
 *     summary: Eliminar un ticket.
 *     description: Esta ruta elimina un ticket existente por su ID.
 *     tags:
 *       - Tickets
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: ticket_id
 *         required: true
 *         description: ID del ticket a eliminar.
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       204:
 *         description: Ticket eliminado exitosamente.
 *       404:
 *         description: Ticket no encontrado.
 *       500:
 *         description: Error al eliminar el ticket.
 */
router.delete('/:ticket_id', validateRole([1,3]), ticketController.deleteTicket);

// Obtener un ticket por su ID
/**
 * @openapi
 * /api/ticket/{ticket_id}:
 *   get:
 *     summary: Obtener un ticket por su ID.
 *     description: Esta ruta obtiene los detalles de un ticket existente por su ID.
 *     tags:
 *       - Tickets
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: ticket_id
 *         required: true
 *         description: ID del ticket a obtener.
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Detalles del ticket.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ticket_id:
 *                   type: integer
 *                   example: 1
 *                 info:
 *                   type: string
 *                   example: "Información sobre el ticket"
 *                 code:
 *                   type: string
 *                   example: "UTP-DEH-2024-10-13-1a2b3c4d"
 *                 status:
 *                   type: integer
 *                   example: 0
 *                 id_horario:
 *                   type: integer
 *                   example: 1
 *                 evento_nombre:
 *                   type: string
 *                   example: "Evento Ejemplo"
 *       404:
 *         description: Ticket no encontrado.
 *       500:
 *         description: Error al obtener el ticket.
 */
router.get('/:ticket_id', ticketController.getTicketById);

// Obtener los tickets de un evento
/**
 * @openapi
 * /api/ticket/event/{evento_id}:
 *   get:
 *     summary: Obtener los tickets de un evento.
 *     description: Esta ruta obtiene todos los tickets asociados a un evento por su ID.
 *     tags:
 *       - Tickets
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: evento_id
 *         required: true
 *         description: ID del evento para obtener sus tickets.
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Lista de tickets asociados al evento.
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
 *       404:
 *         description: Evento no encontrado.
 *       500:
 *         description: Error al obtener los tickets del evento.
 */
router.get('/event/:evento_id', ticketController.getTicketsByEvent2);

// Actualizar el status de un ticket
/**
 * @openapi
 * /api/ticket/{ticket_id}:
 *   put:
 *     summary: Actualizar el status de un ticket.
 *     description: Esta ruta actualiza el estado de un ticket existente por su ID.
 *     tags:
 *       - Tickets
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: ticket_id
 *         required: true
 *         description: ID del ticket a actualizar.
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Status actualizado exitosamente.
 *       400:
 *         description: Datos de entrada inválidos.
 *       404:
 *         description: Ticket no encontrado.
 *       500:
 *         description: Error al actualizar el ticket.
 */
router.put('/:ticket_id', validateRole([1,3,4]), ticketController.updateStatusTicket);

// scanner del QR
/**
 * @openapi
 * /api/ticket/scan:
 *   post:
 *     summary: Escanear un ticket.
 *     description: Esta ruta permite escanear un ticket utilizando un código QR.
 *     tags:
 *       - Tickets
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - qr_code
 *             properties:
 *               qr_code:
 *                 type: string
 *                 example: "QR-12345"
 *     responses:
 *       200:
 *         description: Ticket escaneado exitosamente.
 *       400:
 *         description: Datos de entrada inválidos.
 *       500:
 *         description: Error al escanear el ticket.
 */
router.post('/scan', validateRole([1,4]), authMiddleware, ticketController.scanTicket);
router.get('/history-scan/:hoster_id', validateRole([1,4]), ticketController.historyScan);
// verificar el Código del cupón - cliente
/**
 * @openapi
 * /api/ticket/check:
 *   post:
 *     summary: Verificar el código del cupón.
 *     description: Esta ruta verifica el código de un cupón enviado por el cliente.
 *     tags:
 *       - Tickets
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - coupon_code
 *             properties:
 *               coupon_code:
 *                 type: string
 *                 example: "CUPON-XYZ"
 *     responses:
 *       200:
 *         description: Cupón verificado exitosamente.
 *       400:
 *         description: Datos de entrada inválidos.
 *       404:
 *         description: Cupón no encontrado.
 *       500:
 *         description: Error al verificar el cupón.
 */
router.post('/check', ticketController.checkTicket);

// verificar el Código del cupón
/**
 * @openapi
 * /api/ticket/redeem:
 *   post:
 *     summary: Redimir tickets.
 *     description: Esta ruta permite redimir tickets utilizando un código de cupón.
 *     tags:
 *       - Tickets
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - coupon_code
 *             properties:
 *               coupon_code:
 *                 type: string
 *                 example: "CUPON-XYZ"
 *     responses:
 *       200:
 *         description: Tickets redimidos exitosamente.
 *       400:
 *         description: Datos de entrada inválidos.
 *       404:
 *         description: Cupón no encontrado.
 *       500:
 *         description: Error al redimir el cupón.
 */
router.post('/redeem', ticketController.redeemTickets);


module.exports = router;
