const express = require("express");
const router = express.Router();
// Importar y usar otras rutas
const commentsRouter = require('./commentsRouter');
const eventRouter = require("./eventRouter");
const imageRouter = require("./imageRouter");
const membershipRouter = require("./membershipRouter");
const notificationRoutes = require("./notificationRouter");
const paymentRouter = require("./paymentRouter");
const resetPasswordRouter = require("./resetPasswordRouter");
const sceneryRoutes = require("./sceneryRouter");
const seatsRouter = require("./seatsRouter");
const userRoutes = require("./userRoutes");
const ticketRoutes = require("./ticketRoutes");
const scheduleRoutes = require("./scheduleRoutes");
const cuponRoutes = require('./cuponRoutes');
const canjeoSinRegistroRouter = require('./canjeoSinRegistroRouter'); // Nueva ruta

// Categorias de las rutas 
router.use('/comments', commentsRouter);
router.use("/events", eventRouter);
router.use("/image", imageRouter);
router.use('/membership', membershipRouter);
router.use("/notification", notificationRoutes);
router.use("/payment", paymentRouter);
router.use("/password", resetPasswordRouter);
router.use("/scenarios", sceneryRoutes);
router.use("/seats", seatsRouter);
router.use("/users", userRoutes);
router.use("/ticket", ticketRoutes);
router.use("/schedule", scheduleRoutes);
router.use("/cupon", cuponRoutes);
router.use("/canjeo-sin-registro", canjeoSinRegistroRouter); // Nueva ruta

module.exports = router;
