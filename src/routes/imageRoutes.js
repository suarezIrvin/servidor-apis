const upload = require('../middlewares/multerConfig');
const express = require("express");
const { uploadImage } = require('../controllers/imageController');

const router = express.Router();

/**
 * @swagger
 * /api/imagenes/upload/{usuario_id}:
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
 *         description: Internal server error
 */
router.put("/upload/:usuario_id", upload.single('image'), uploadImage);

module.exports = router;
