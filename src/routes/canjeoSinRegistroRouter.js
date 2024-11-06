const express = require('express');
const router = express.Router();
const CanjeoSinRegistroController = require('../controllers/canjeoSinRegistroController');

/**
 * @openapi
 * /api/canjeo-sin-registro:
 *   post:
 *     summary: Canjear un ticket sin registro.
 *     description: Permite a los usuarios canjear un ticket utilizando un código sin necesidad de registro previo.
 *     tags:
 *       - Canjeo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - code
 *               - user_id
 *             properties:
 *               code:
 *                 type: string
 *                 example: "ABC123"
 *               user_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Ticket canjeado exitosamente.
 *       400:
 *         description: El ticket ya ha sido canjeado o no se encontró el ticket.
 *       404:
 *         description: Ticket no encontrado.
 *       500:
 *         description: Error interno del servidor.
 */
router.post('/', CanjeoSinRegistroController.redeemTicket);

module.exports = router;
