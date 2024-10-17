const upload = require('../middlewares/multerConfig'); // Usando tu multerConfig
const express = require("express");
const { uploadEventImage, uploadUserImage, insertImagesToDatabase } = require('../controllers/imageController');
const { insertImages } = require('../models/imageModel');

const router = express.Router();

/**
 * @swagger
 * /api/images/upload/{usuario_id}:
 *   put:
 *     summary: Sube una foto de perfil
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: usuario_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Usuario ID
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
 *         description: Profile picture uploaded successfully
 *       400:
 *         description: No file provided
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server errorq
 */
router.put("/upload/:usuario_id", upload.single('image'), uploadUserImage); 

/**
 * @swagger
 * /api/image/event/{evento_id}:
 *   put:
 *     summary: Sube una imagen para un evento
 *     tags: [Eventos]
 *     parameters:
 *       - in: path
 *         name: evento_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del evento al que se le está subiendo la imagen
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
router.put("/event/:imagen_id", upload.single('image'), uploadEventImage);


router.post("/imageEvent/", upload.array('image'), insertImagesToDatabase); 

module.exports = router;
