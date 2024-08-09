const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const authMiddleware = require("./middlewares/authMiddleware");
const swaggerRouter = require("./config/swagger");

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use("/api", require("./routes/indexRouter"));
app.use("/", swaggerRouter);

// Ruta protegida por middleware de autenticación
app.get("/dashboard", authMiddleware, (req, res) => {
  res.json({ message: `Welcome ${req.userRole}` });
});

// Iniciar el servidor digital event
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor en el puerto  http://localhost:${PORT}`);
});
