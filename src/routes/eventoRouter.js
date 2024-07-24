const express = require('express');
const router = express.Router();
const eventoController = require('../controllers/eventoController');

/**
 * @openapi
 * /api/eventos/events:
 *   get:
 *     description: Obtiene todas las notificaciones.
 *     tags:
 *       - Eventos
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
 *                   evento_id:
 *                     type: integer
 *                     example: 1
 *                   nombre_evento:
 *                     type: string
 *                     example: "ejemplo"
 *                   fecha_inicio:
 *                     type: string
 *                     example: "ejemplo"
 *                   fecha_termino:
 *                     type: string
 *                     example: "ejemplo"
 *                   hora:
 *                     type: string
 *                     example: "ejemplo"
 *                   max_per:
 *                     type: integer
 *                     example: 100
 *                   estado:
 *                     type: string
 *                     example: "ejemplo"
 *                   fecha_autorizacion:
 *                     type: string
 *                     example: "ejemplo"
 *                   tipo_evento:
 *                     type: string
 *                     example: "ejemplo"
 *                   organizador_nombre:
 *                     type: string
 *                     example: "ejemplo"
 *                   autorizado_nombre:
 *                     type: string
 *                     example: "ejemplo"
 *                   categoria_nombre:
 *                     type: string
 *                     example: "ejemplo"
 *                   imagen_url:
 *                     type: string
 *                     example: "urlejemplo"
 *       500:
 *         description: Error al obtener las notificaciones.
 */
router.get('/events', eventoController.Evento);

/**
 * @openapi
 * /api/eventos/filtro:
 *   get:
 *     summary: Obtener eventos filtrados por categoría y tipo de evento.
 *     tags:
 *       - Eventos
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Nombre de la categoría de eventos a filtrar.
 *       - in: query
 *         name: tipo_evento
 *         schema:
 *           type: string
 *         description: Nombre del tipo de evento a filtrar.
 *     responses:
 *       '200':
 *         description: Lista de eventos filtrados.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   evento_id:
 *                     type: integer
 *                   nombre_evento:
 *                     type: string
 *                   fecha_inicio:
 *                     type: string
 *                     format: date
 *                   fecha_termino:
 *                     type: string
 *                     format: date
 *                   hora:
 *                     type: string
 *                   ubicacion:
 *                     type: string
 *                   max_per:
 *                     type: integer
 *                   estado:
 *                     type: string
 *                   fecha_autorizacion:
 *                     type: string
 *                     format: date
 *                   tipo_evento:
 *                     type: string
 *                   organizador_nombre:
 *                     type: string
 *                   autorizado_nombre:
 *                     type: string
 *                   categoria_nombre:
 *                     type: string
 *       '404':
 *         description: No se encontraron eventos según los criterios de búsqueda.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: No existen eventos para la categoría de evento Tecnologia
 *       '500':
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Error en la consulta SQL
 */
router.get('/filtro', eventoController.filtroEvento)

module.exports = router;