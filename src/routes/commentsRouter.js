const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

// Ruta GET para obtener todos los comentarios

/**
 * @openapi
 * /api/comentario/list:
 *   get:
 *     summary: obtiene todos los comentarios
 *     description: Obtiene todas los comentarios.
 *     tags:
 *       - Comentarios
 *     responses:
 *       200:
 *         description: Lista de de comentarios.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   comentario_id:
 *                     type: integer
 *                     example: 1
 *                   usuario_id:
 *                     type: int
 *                     example: 1
 *                   evento_id:
 *                     type: int
 *                     example: 1
 *                   comentario:
 *                     type: string
 *                     example: "ejemplo"
 *                   fecha:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-07-10T14:48:00.000Z"
 *       500:
 *         description: Error al obtener las notificaciones.
 */
router.get('/list', commentsController.getComment);


/**
 * @openapi
 * /api/comentario/list/{evento_id}:
 *   get:
 *     summary: obtiene al usuario por id
 *     description: Obtiene un usuario por su ID.
 *     tags:
 *       - Comentarios
 *     parameters:
 *       - name: evento_id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Detalles del usuario encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                   comentario_id:
 *                     type: integer
 *                     example: 1
 *                   usuario_id:
 *                     type: int
 *                     example: 1
 *                   evento_id:
 *                     type: int
 *                     example: 1
 *                   comentario:
 *                     type: string
 *                     example: "ejemplo"
 *                   fecha:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-07-10T14:48:00.000Z"
 *       404:
 *         description: comentario no encontrado.
 *       500:
 *         description: Error al obtener el comentario.
 */
router.get('/list/:evento_id', commentsController.getCommentEvent);

/**
 * @swagger
 * /api/comentario/create:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags: 
 *       - Comentarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - evento_id
 *               - usuario_id
 *               - comentario
 *               - fecha
 *             properties:
 *               evento_id:
 *                 type: int
 *                 example: 1
 *               usuario_id:
 *                 type: int
 *                 example: 1
 *               comentario:
 *                 type: string
 *               fecha:
 *                 type: string
 *                 enum:
 *                   - "2024-07-10"
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: All fields are required
 *       500:
 *         description: Error creating user
 */
router.post('/create', commentsController.createComment);


/**
 * @openapi
 * /api/comentario/delete/{comentario_id}:
 *   delete:
 *     summary: Elimina un comentario por su ID.
 *     tags:
 *       - Comentarios
 *     parameters:
 *       - name: comentario_id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       204:
 *         description: Usuario eliminado correctamente.
 *       404:
 *         description: Usuario no encontrado.
 *       500:
 *         description: Error al eliminar el usuario.
 */
router.delete('/delete/:comentario_id', commentsController.deleteComment);


module.exports = router;