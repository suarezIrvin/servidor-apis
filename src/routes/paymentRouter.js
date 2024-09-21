const express = require('express');
const router = express.Router();
const pagoController = require('../controllers/pagoController');



/**
 * @openapi
 * /api/pagos/pago:
 *   post:
 *     summary: Crea un PaymentIntent con Stripe.
 *     tags:
 *       - Pagos
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
 *     responses:
 *       '200':
 *         description: Respuesta exitosa. Devuelve el client_secret para confirmar el pago.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de confirmación.
 *                 client_secret:
 *                   type: string
 *                   description: Clave secreta del cliente para confirmar el pago.
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
router.post('/pago', pagoController.Pago);


/**
 * @openapi
 * /api/pagos/confirmarpago:
 *   post:
 *     summary: Confirma un PaymentIntent con Stripe.
 *     tags:
 *       - Pagos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               paymentIntentId:
 *                 type: string
 *                 description: ID del PaymentIntent generado en el endpoint /api/checkout.
 *               paymentMethod:
 *                 type: string
 *                 description: Método de pago utilizado para confirmar el PaymentIntent.
 *                 enum:
 *                   - "pm_card_visa"
 *     responses:
 *       '200':
 *         description: Respuesta exitosa. Devuelve el objeto PaymentIntent confirmado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID del PaymentIntent.
 *                 status:
 *                   type: string
 *                   description: Estado del PaymentIntent después de la confirmación.
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
router.post('/confirmarpago', pagoController.confirmarPago);



/**
 * @openapi
 * /api/pagos/historialpagos:
 *   get:
 *     summary: Obtiene el historial de pagos
 *     tags:
 *       - Pagos
 *     responses:
 *       '200':
 *         description: Respuesta exitosa. Devuelve un array de pagos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
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
 */
router.get('/historialpagos', pagoController.historialPagos);




/**
 * @openapi
 * /api/pagos/pagar:
 *   post:
 *     summary: Nuevo api de pagos mejorado con mas datos para pasar.
 *     tags:
 *       - Pagos
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
 *               descripcion:
 *                 type: string
 *                 description: Descripcion del producto, nombre del evento o producto.
 *               usuario_id:
 *                 type: integer
 *                 description: id del usuario que esta pagondo.
 *               evento_id:
 *                 type: integer
 *                 description: id del evento que se compra.
 *     responses:
 *       '200':
 *         description: Respuesta exitosa. Devuelve el client_secret para confirmar el pago.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de confirmación.
 *                 client_secret:
 *                   type: string
 *                   description: Clave secreta del cliente para confirmar el pago.
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
router.post('/pagar', pagoController.PagoMejorado);


/**
 * @openapi
 * /api/pagos/historial/{usuario_id}:
 *   get:
 *     summary: obtiene el historial de un usuario por medio de su id
 *     description: Obtiene el historial por medio del id del usuario
 *     tags:
 *       - Pagos
 *     parameters:
 *       - name: usuario_id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
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
router.get('/historial/:usuario_id', pagoController.historialPagosPorUsuarioID);

module.exports = router;