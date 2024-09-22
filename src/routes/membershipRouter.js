const express = require('express');
const router = express.Router();
const membershipController = require('../controllers/membershipController');

// Rutas para membresías

/**
 * @swagger
 * /api/membership:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags: 
 *       - Membresia
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - tipo
 *               - descripcion
 *               - costo
 *             properties:
 *               tipo:
 *                 type: string
 *                 example: "ejemplo"
 *               descripcion:
 *                 type: string
 *                 example: "ejemplo"
 *               costo:
 *                 type: number
 *                 format: float
 *                 example: 25.5
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: All fields are required
 *       500:
 *         description: Error creating user
 */
router.post('/', membershipController.createMembership);


/**
 * @openapi
 * /api/membership/{membresia_id}:
 *   get:
 *     summary: obtiene al usuario por id
 *     description: Obtiene un usuario por su ID.
 *     tags:
 *       - Membresia
 *     parameters:
 *       - name: membresia_id
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
 *                   membresia_id:
 *                     type: integer
 *                     example: 1
 *                   tipo:
 *                     type: string
 *                     example: "ejemplo"
 *                   descripcion:
 *                     type: string
 *                     example: "ejemplo"
 *                   costo:
 *                     type: number
 *                     format: float
 *                     example: 125.5
 *       404:
 *         description: comentario no encontrado.
 *       500:
 *         description: Error al obtener el comentario.
 */
router.get('/:membresia_id', membershipController.getMembershipById);

/**
 * @openapi
 * /api/membership:
 *   get:
 *     summary: obtiene todos las membresias
 *     description: Obtiene todas los membresias.
 *     tags:
 *       - Membresia
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
 *                   membresia_id:
 *                     type: integer
 *                     example: 1
 *                   tipo:
 *                     type: string
 *                     example: "ejemplo"
 *                   descripcion:
 *                     type: string
 *                     example: "ejemplo"
 *                   costo:
 *                     type: number
 *                     format: float
 *                     example: 125.5
 *       500:
 *         description: Error al obtener las notificaciones.
 */
router.get('/', membershipController.getAllMemberships);

/**
 * @openapi
 * /api/membership/{membresia_id}:
 *   put:
 *     summary: Update an existing event
 *     tags: 
 *       - Membresia
 *     parameters:
 *       - in: path
 *         name: membresia_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: membresia id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - tipo
 *               - descripcion
 *               - costo
 *             properties:
 *                   tipo:
 *                     type: string
 *                     example: "ejemplo"
 *                   descripcion:
 *                     type: string
 *                     example: "ejemplo"
 *                   costo:
 *                     type: number
 *                     format: float
 *                     example: 125.5
 *     responses:
 *       200:
 *         description: Event updated successfully
 *       404:
 *         description: Event not found
 *       500:
 *         description: Internal server error
 */
router.put('/:membresia_id', membershipController.updateMembership);



/**
 * @openapi
 * /api/membership/{membresia_id}:
 *   delete:
 *     summary: Elimina una membresia por su ID.
 *     tags:
 *       - Membresia
 *     parameters:
 *       - name: membresia_id
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
router.delete('/:membresia_id', membershipController.deleteMembership);

module.exports = router;