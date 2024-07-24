const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const express = require("express");
const router = express.Router();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "APIS de Digital Event HUb",
      version: "1.0.0",
      description: "Documentación de la API",
    },
  },
  apis: [
    "src/routes/notificationRouter.js",
    "src/routes/eventoRouter.js",
    "src/routes/pagoRouter.js",
    "src/routes/resetPasswordRouter.js",
    "src/routes/authRoutes.js",
    "src/routes/eventRoutes.js",
    "src/routes/imagenRoutes.js",
    "src/routes/userRoutes.js",
    "src/routes/comentariosRouter.js",
    "src/routes/membresiaRouter.js"
  ],
};

const specs = swaggerJsdoc(options);

router.use("/", swaggerUi.serve);
router.get("/", swaggerUi.setup(specs));

module.exports = router;
