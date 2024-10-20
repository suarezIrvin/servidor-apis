const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const { validateRole } = require('../middlewares/validateRole');



/**
 * @openapi
 * /api/payment/payment:
 *   post:
 *     summary: Crea un PaymentIntent con Stripe y guarda el pago en la base de datos.
 *     tags:
 *       - payment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: integer
 *                 description: Monto del pago en centavos.
 *               currency:
 *                 type: string
 *                 description: Moneda del pago (ej. USD).
 *                 enum:
 *                   - "usd"
 *               usuario_id:
 *                 type: integer
 *                 description: ID del usuario que realiza el pago.
 *               evento_id:
 *                 type: integer
 *                 description: ID del evento para el que se realiza el pago.
 *               f_inicio_ep:
 *                 type: string
 *                 format: date
 *                 description: Fecha de inicio del evento.
 *               f_fin_ep:
 *                 type: string
 *                 format: date
 *                 description: Fecha de fin del evento.
 *     responses:
 *       '200':
 *         description: Respuesta exitosa. Devuelve el client_secret para confirmar el pago o un mensaje de éxito si el pago se completó.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de confirmación.
 *                 paymentIntentId:
 *                   type: string
 *                   description: ID del PaymentIntent creado.
 *                 client_secret:
 *                   type: string
 *                   description: Clave secreta del cliente para confirmar el pago.
 *       '400':
 *         description: Faltan campos obligatorios en la solicitud.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error detallado.
 *       '500':
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error detallado.
 */
router.post('/payment', paymentController.pay);


/**
 * @openapi
 * /api/payment/history/:
 *   get:
 *     summary: obtiene el historial de un usuario por medio de su id
 *     description: Obtiene el historial por medio del id del usuario
 *     tags:
 *       - payment
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Detalles del historial de pago de un usuario encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                   pago_id:
 *                     type: integer
 *                   monto:
 *                     type: string
 *                   fecha:
 *                     type: string
 *                     format: date
 *                   tipo_pago_id:
 *                     type: integer
 *                   usuario_id:
 *                     type: integer
 *                   evento_id:
 *                     type: integer
 *                   tarjeta:
 *                     type: object
 *                     properties:
 *                       tarjeta_id:
 *                         type: integer
 *                       numero_tarjeta:
 *                         type: string
 *                       fecha_expiracion:
 *                         type: string
 *                         format: date
 *                       cvv:
 *                         type: string
 *       404:
 *         description: historial no encontrado.
 *       500:
 *         description: Error al obtener el historial.
 */
router.get('/history/', validateRole([2]), paymentController.payHistoryByUserId);

/**
 * @openapi
 * /api/payment/history/detailed:
 *   get:
 *     summary: Obtiene el historial detallado de un usuario autenticado.
 *     description: Obtiene el historial detallado de pagos, eventos, tickets, y horarios del usuario autenticado.
 *     tags:
 *       - payment
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Detalles del historial de pago de un usuario encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 pago_id:
 *                   type: integer
 *                 monto:
 *                   type: string
 *                 fecha:
 *                   type: string
 *                   format: date
 *                 nombre_evento:
 *                   type: string
 *                 fecha_inicio:
 *                   type: string
 *                 fecha_termino:
 *                   type: string
 *                 ubicacion:
 *                   type: string
 *                 hora_inicio:
 *                   type: string
 *                 hora_fin:
 *                   type: string
 *                 ticket_id:
 *                   type: integer
 *                 info_ticket:
 *                   type: string
 *                 codigo_ticket:
 *                   type: string
 *       404:
 *         description: Historial no encontrado.
 *       500:
 *         description: Error al obtener el historial.
 */
router.get('/history/detailed', validateRole([2]), paymentController.payDetailedHistoryByUserId);

/**
 * @openapi
 * /api/payment/payments:
 *   get:
 *     summary: Obtiene todos los pagos.
 *     tags:
 *       - payment
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Lista de todos los pagos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   pago_id:
 *                     type: integer
 *                     description: ID del pago.
 *                   monto:
 *                     type: number
 *                     description: Monto del pago.
 *                   fecha:
 *                     type: string
 *                     format: date-time
 *                     description: Fecha del pago.
 *                   usuario_id:
 *                     type: integer
 *                     description: ID del usuario asociado al pago.
 *                   evento_id:
 *                     type: integer
 *                     description: ID del evento asociado al pago.
 *       '404':
 *         description: No se encontraron pagos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '500':
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error detallado.
 */
router.get('/payments', validateRole([1]), paymentController.getAllPayments);

module.exports = router;