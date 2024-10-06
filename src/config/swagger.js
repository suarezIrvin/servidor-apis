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
    "src/routes/eventRouter.js",
    "src/routes/paymentRouter.js",
    "src/routes/resetPasswordRouter.js",
    "src/routes/authRouter.js",
    "src/routes/eventRouter.js",
    "src/routes/imageRouter.js",
    "src/routes/userRoutes.js",
    "src/routes/commentsRouter.js",
    "src/routes/membresiaRouter.js",
    "src/routes/seatsRouter.js",
    "src/routes/sceneryRouter.js"
  ],
};

const specs = swaggerJsdoc(options);

router.use("/", swaggerUi.serve);
router.get("/", swaggerUi.setup(specs));

module.exports = router;
