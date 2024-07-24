const express = require("express");
const router = express.Router();

// Importar y usar otras rutas
const notificationRoutes = require("./notificationRouter");
const eventoRoutes = require("./eventoRouter");
const pagoRoutes = require("./pagoRouter");
const resetPassowrdRouter = require("./resetPasswordRouter");
const subirImagen = require("./imagenRoutes");
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const eventRoutes = require("./eventRoutes");
const asientoRoutes = require("./asientoRouter");
const escenarioRoutes = require("./escenarioRouter");
const comentarioRoutes = require('./comentariosRouter');
const membresiaRoutes = require("./membresiaRouter");

// Categorias de las rutas
router.use("/notification", notificationRoutes);
router.use("/eventos", eventoRoutes);
router.use("/pagos", pagoRoutes);
router.use("/password", resetPassowrdRouter);
router.use("/imagenes", subirImagen);
router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/events", eventRoutes);
router.use("/asientos", asientoRoutes);
router.use("/escenarios", escenarioRoutes);
router.use('/comentario', comentarioRoutes);
router.use('/membresia', membresiaRoutes);

module.exports = router;
