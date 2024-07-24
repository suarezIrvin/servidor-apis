const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads", // Carpeta en Cloudinary donde se guardarán las imágenes
    format: async (req, file) => file.mimetype.split("/")[1], // Usa el formato del archivo subido
    public_id: (req, file) => `${file.originalname}-${Date.now()}`, // Nombre único para cada imagen
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
