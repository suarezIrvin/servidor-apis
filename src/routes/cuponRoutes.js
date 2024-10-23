const express = require('express');
const router = express.Router();
const couponController = require('../controllers/cuponController');

/**
 * @openapi
 * /api/cupon/upload-coupons:
 *   post:
 *     summary: Subir cupones en lote.
 *     description: Sube una lista de cupones y los guarda en la base de datos.
 *     tags:
 *       - Cupons
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               required:
 *                 - info
 *                 - code
 *                 - status
 *               properties:
 *                 info:
 *                   type: string
 *                   example: "Información del ticket"
 *                 code:
 *                   type: string
 *                   example: "ABC123"
 *                 status:
 *                   type: string
 *                   example: "activo"
 *     responses:
 *       201:
 *         description: Cupones guardados exitosamente.
 *       400:
 *         description: No se enviaron cupones válidos.
 *       401:
 *         description: No autorizado, token no válido o no presente.
 *       500:
 *         description: Error al insertar cupones.
 */
router.post('/upload-coupons', couponController.uploadCoupons);

/**
 * @openapi
 * /api/cupon/all-coupons:
 *   get:
 *     summary: Obtener todos los cupones.
 *     description: Recupera todos los cupones de la base de datos.
 *     tags:
 *       - Cupons
 *     responses:
 *       200:
 *         description: Cupones obtenidos exitosamente.
 *       500:
 *         description: Error al obtener los cupones.
 */
router.get('/all-coupons', couponController.getAllCoupons); // Nueva ruta

module.exports = router;
