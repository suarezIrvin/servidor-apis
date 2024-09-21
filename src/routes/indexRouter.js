const express = require("express");
const router = express.Router();

// Importar y usar otras rutas
const notificationRoutes = require("./notificationRouter");
const eventRoutes = require("./eventRoutes");
const paymentRouter = require("./paymentRouter");
const resetPassowrdRouter = require("./resetPasswordRouter");
const imageRoutes = require("./imageRoutes");
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const seatsRoutes = require("./seatsRouter");
const sceneryRoutes = require("./sceneryRouter");
const commentsRoutes = require('./commentsRouter');
const membershipRoutes = require("./membershipRouter");
//const detalleEventoRoute = require('./detallesEventoRoute'); -> Optimizar con events

// Categorias de las rutas
router.use("/notification", notificationRoutes);
router.use("/events", eventRoutes);
router.use("/payment", paymentRouter);
router.use("/password", resetPassowrdRouter);
router.use("/image", imageRoutes);
router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/seats", seatsRoutes);
router.use("/scenerios", sceneryRoutes);
router.use('/comments', commentsRoutes);
router.use('/memberships', membershipRoutes);
//router.use('/detalle', detalleEventoRoute); -> Optimizar con events

module.exports = router;
