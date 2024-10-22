const upload = require('../middlewares/multerConfig'); // Usando tu multerConfig
const express = require("express");
const imageController = require('../controllers/imageController');
const { validateRole } = require('../middlewares/validateRole');

const router = express.Router();

/**
 * @swagger
 * /api/images/upload/{usuario_id}:
 *   put:
 *     summary: Sube una foto de perfil de usuario
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: usuario_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Foto de perfil subida exitosamente
 *       400:
 *         description: No se proporcionó un archivo
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put("/upload/:usuario_id", upload.single('image'), imageController.uploadUserImage);

/**
 * @swagger
 * /api/image/event/{image_id}:
 *   put:
 *     summary: Actualiza una imagen para un evento
 *     tags: [Eventos]
 *     parameters:
 *       - in: path
 *         name: image_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del evento
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Imagen del evento subida exitosamente
 *       400:
 *         description: No se proporcionó un archivo
 *       404:
 *         description: Evento no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put("/event/:imagen_id", upload.single('image'), imageController.uploadEventImage);

/**
 * @swagger
 * /api/image/imageEvent/:
 *   post:
 *     summary: Sube varias imágenes o una imagen para un evento
 *     tags: [Eventos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *               evento_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Imágenes subidas exitosamente
 *       400:
 *         description: No se proporcionaron archivos o faltan usuario_id o evento_id
 *       500:
 *         description: Error interno del servidor
 */
router.post("/imageEvent/", validateRole([2]), upload.array('image'), imageController.insertImagesToDatabase);

/**
 * @swagger
 * /api/image/delete/{imagen_id}:
 *   delete:
 *     summary: Elimina una imagen de eventos
 *     tags: [Eventos]
 *     parameters:
 *       - in: path
 *         name: imagen_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la imagen a eliminar
 *     responses:
 *       200:
 *         description: Imagen eliminada exitosamente
 *       404:
 *         description: Imagen no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.delete('/delete/:imagen_id', imageController.deleteImage);

module.exports = router;
