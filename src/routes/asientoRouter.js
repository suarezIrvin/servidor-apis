const express = require("express");
const router = express.Router();
const pool = require("../config/connection");

// Read all

/**
 * @openapi
 * /api/asientos:
 *   get:
 *     summary: obtiene todos los asientos
 *     description: Obtiene todas los asientos.
 *     tags:
 *       - Asientos
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
 *                   asiento_id:
 *                     type: integer
 *                     example: 1
 *                   numero_asiento:
 *                     type: string
 *                     example: "a1"
 *                   estado:
 *                     type: string
 *                     example: "reservado"
 *                   usuario_id:
 *                     type: int
 *                     example: 1
 *       500:
 *         description: Error al obtener las notificaciones.
 */
router.get("/", async (req, res) => {
  try {
    const [rows, fields] = await pool.query("SELECT * FROM Asientos");
    res.json(rows);
  } catch (error) {
    console.error(error);
  }
});


/**
 * @openapi
 * /api/asientos/{id}:
 *   get:
 *     summary: obtiene el asiento por id
 *     description: Obtiene un asiento por su ID.
 *     tags:
 *       - Asientos
 *     parameters:
 *       - name: id
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
 *                   asiento_id:
 *                     type: integer
 *                     example: 1
 *                   numero_asiento:
 *                     type: string
 *                     example: "a1"
 *                   estado:
 *                     type: string
 *                     example: "reservado"
 *                   usuario_id:
 *                     type: int
 *                     example: 1
 *       404:
 *         description: asiento no encontrado.
 *       500:
 *         description: Error al obtener el asiento.
 */
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [rows, fields] = await pool.query(
      "SELECT * FROM Asientos WHERE asiento_id = ?",
      [id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ error: "Asiento no encontrado" });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error(error);
  }
});


/**
 * @swagger
 * /api/asientos:
 *   post:
 *     summary: Registrar un nuevo Asiento
 *     tags: 
 *       - Asientos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - numero_asiento
 *               - estado
 *               - usuario_id
 *             properties:
 *               numero_asiento:
 *                 type: string
 *                 example: "a1"
 *               estado:
 *                 type: string
 *                 example: "Reservado"
 *               usuario_id:
 *                 type: int
 *                 example: 1
 *     responses:
 *       201:
 *         description: Asiento created successfully
 *       400:
 *         description: All fields are required
 *       500:
 *         description: Error creating user
 */
router.post("/", async (req, res) => {
  const { numero_asiento, estado, usuario_id } = req.body;
  if (!numero_asiento || !estado || !usuario_id) {
    return res.status(400).json({
      error: "numero_asiento, estado y usuario_id son campos requeridos",
    });
  }

  try {
    const [usuarios] = await pool.query(
      "SELECT * FROM Usuarios WHERE usuario_id = ?",
      [usuario_id]
    );
    if (usuarios.length === 0) {
      return res
        .status(404)
        .json({ error: `Usuario con el id ${usuario_id} no encontrado` });
    }

    const [rows, fields] = await pool.query(
      "INSERT INTO Asientos (numero_asiento, estado, usuario_id) VALUES (?, ?, ?)",
      [numero_asiento, estado, usuario_id]
    );
    res.json({
      message: "Asiento creado exitosamente",
      asiento: {
        asiento_id: rows.insertId,
        numero_asiento,
        estado,
        usuario_id,
      },
    });
  } catch (error) {
    console.error(error);
  }
});


/**
 * @openapi
 * /api/asientos/{id}:
 *   put:
 *     summary: edita un asiento
 *     tags: 
 *       - Asientos
 *     parameters:
 *       - in: path
 *         name: id
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
 *               - numero_asiento
 *               - estado
 *               - usuario_id
 *             properties:
 *               numero_asiento:
 *                 type: string
 *                 example: "A1"
 *               estado:
 *                 type: string
 *                 example: "Reservado"
 *               usuario_id:
 *                 type: int
 *                 example: 1
 *     responses:
 *       200:
 *         description: asiento updated successfully
 *       404:
 *         description: asiento not found
 *       500:
 *         description: Internal server error
 */
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const [asientos] = await pool.query(
      "SELECT * FROM Asientos WHERE asiento_id = ?",
      [id]
    );

    if (asientos.length === 0) {
      return res.status(404).json({ error: "Asiento no encontrado" });
    }

    const asiento = asientos[0];

    const numero_asiento = req.body.numero_asiento || asiento.numero_asiento;
    const estado = req.body.estado || asiento.estado;
    let usuario_id = undefined;

    if (req.body.usuario_id) {
      usuario_id = req.body.usuario_id;
      const [usuarioss] = await pool.query(
        "SELECT * FROM Usuarios WHERE usuario_id = ?",
        [usuario_id]
      );
      if (usuarioss.length === 0) {
        return res
          .status(404)
          .json({ error: `Usuario con el id ${usuario_id} no encontrado` });
      }
    } else {
      usuario_id = asiento.usuario_id;
    }
    const values = [numero_asiento, estado, usuario_id];

    const [result] = await pool.query(
      "UPDATE Asientos SET numero_asiento = ?, estado = ?, usuario_id = ? WHERE asiento_id = ?",
      [...values, id]
    );

    if (result.affectedRows > 0) {
      const [updatedAsientos] = await pool.query(
        "SELECT * FROM Asientos WHERE asiento_id = ?",
        [id]
      );
      const updatedAsiento = updatedAsientos[0];

      res.status(200).json({
        message: "Asiento actualizado exitosamente",
        asiento: updatedAsiento,
      });
    }
  } catch (error) {
    console.error(error);
  }
});


/**
 * @openapi
 * /api/asientos/{id}:
 *   delete:
 *     summary: Elimina un asiento por su ID.
 *     tags:
 *       - Asientos
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       204:
 *         description: asiento eliminado correctamente.
 *       404:
 *         description: asiento no encontrado.
 *       500:
 *         description: Error al eliminar el usuario.
 */
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [asientos] = await pool.query(
      "SELECT * FROM Asientos WHERE asiento_id = ?",
      [id]
    );
    if (asientos.length === 0) {
      return res.status(404).json({ error: "Asiento no encontrado" });
    }
    const [rows, fields] = await pool.query(
      "DELETE FROM Asientos WHERE asiento_id = ?",
      [id]
    );
    res.json({ message: "Asiento eliminado exitosamente" });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
