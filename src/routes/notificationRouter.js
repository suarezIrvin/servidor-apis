const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

/**
 * @openapi
 * /api/notification/send:
 *   post:
 *     description: Recibe una notificación.
 *     tags:
 *       - Notificacion
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuario_id:
 *                 type: integer
 *                 example: 1
 *               mensaje:
 *                 type: string
 *                 example: "Notification message"
 *     responses:
 *       200:
 *         description: Notificación recibida.
 *       500:
 *         description: Error al procesar la notificación.
 */
router.post('/send', notificationController.create);


/**
 * @openapi
 * /api/notification/get-all:
 *   get:
 *     description: Obtiene todas las notificaciones.
 *     tags:
 *       - Notificacion
 *     responses:
 *       200:
 *         description: Lista de notificaciones.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   notificacion_id:
 *                     type: integer
 *                     example: 1
 *                   usuario_id:
 *                     type: integer
 *                     example: 1
 *                   mensaje:
 *                     type: string
 *                     example: "Notification message"
 *                   fecha_envio:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-07-10T14:48:00.000Z"
 *       500:
 *         description: Error al obtener las notificaciones.
 */
router.get('/get-all', notificationController.getAll);

module.exports = router;