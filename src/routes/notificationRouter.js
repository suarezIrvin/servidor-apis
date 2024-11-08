const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

/**
 * @openapi
 * /api/notification/send:
 *   post:
 *     summary: Esta ruta envía notificaciones para los clientes.
 *     description: Esta ruta sirve para que el organizador o administrador pueda enviar o crear una notificación.
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
 *       201:
 *         description: Notificación creada con éxito.
 *       400:
 *         description: Faltan campos obligatorios.
 *       500:
 *         description: Error al procesar la notificación.
 */
router.post('/send', notificationController.create);

/**
 * @openapi
 * /api/notification/get-all:
 *   get:
 *     summary: Esta ruta obtiene todos las notificaciones enviadas.
 *     description: Esta ruta obtiene todas las notificaciones enviadas por el organizador o administrador.
 *     tags:
 *       - Notificacion
 *     responses:
 *       200:
 *         description: Lista de notificaciones obtenida con éxito.
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