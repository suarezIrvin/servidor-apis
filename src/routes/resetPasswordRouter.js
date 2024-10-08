const express = require('express');
const router = express.Router();
const resetPasswordController = require('../controllers/resetPasswordController');

/**
 * @openapi
 * /api/password/forgot-password:
 *   post:
 *     description: reset password.
 *     tags:
 *       - Reestablecer Contraseña
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: email de usuario.
 *     responses:
 *       '200':
 *         description: Respuesta exitosa. Devuelve el token para poder cambiar tu contraseña.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de confirmación.
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
router.post('/forgot-password', resetPasswordController.forgotPassword);

/**
 * @openapi
 * /api/password/reset-password/{token}:
 *   post:
 *     description: reset password.
 *     tags:
 *       - Reestablecer Contraseña
 *     parameters:
 *       - in: path
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               newPassword:
 *                 type: string
 *                 description: nueva contraseña del usuario.
 *     responses:
 *       '200':
 *         description: Respuesta exitosa. Devuelve el token para poder cambiar tu contraseña.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de confirmación.
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
router.post('/reset-password/:token', resetPasswordController.resetPassword);
router.get("/reset-password/:token", resetPasswordController.viewReset);

module.exports = router;  
