const cloudinary = require("cloudinary").v2;
const pool = require("../config/connection");
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const imagenController = {
  subirImagen: async (req, res) => {
    try {
      if (!req.file) {
        return res
          .status(400)
          .json({ error: "No se proporcionó ningún archivo" });
      }

      // Subir imagen a Cloudinary
      const resultado = await cloudinary.uploader.upload(req.file.path);

      // Actualizar la URL de la imagen en la base de datos
      const [result] = await pool.query(
        "UPDATE Usuarios SET fotoPerfil = ? WHERE usuario_id = ?",
        [resultado.secure_url, req.params.usuarioId]
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }

      res.json({ fotoPerfil: resultado.secure_url });
    } catch (error) {
      console.error("Error en subirImagen:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },
};

module.exports = imagenController;
