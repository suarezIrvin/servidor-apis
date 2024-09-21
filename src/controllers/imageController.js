const { v2: cloudinary } = require('cloudinary');
const streamifier = require('streamifier');
const pool = require("../config/connection");
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Función para subir imagen a Cloudinary
const uploadStream = (file) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream((error, result) => {
      if (error) {
        console.error('Error uploading to Cloudinary:', error);
        reject(error);
      } else {
        resolve(result);
      }
    });
    streamifier.createReadStream(file.buffer).pipe(stream);
  });
};

// Función para actualizar la URL en la base de datos
const updateDatabase = (url, usuarioId) => {
  return new Promise((resolve, reject) => {
    console.log('Executing database query with URL:', url, 'and usuario_id:', usuarioId);
    pool.query(
      'UPDATE Usuarios SET fotoPerfil = ? WHERE usuario_id = ?',
      [url, usuarioId],
      (err, results) => {
        if (err) {
          console.error('Error saving image URL in database:', err);
          reject(err);
        } else {
          console.log('Database query result:', results);
          resolve(results);
        }
      }
    );
  });
};

const subirImagen = async (req, res) => {
  console.log('Request received:', req.file);

  if (!req.file) {
    console.log('No file uploaded');
    return res.status(400).json({ error: 'No file uploaded' });
  }

  try {
    console.log('Uploading to Cloudinary...');
    const result = await uploadStream(req.file);
    console.log('Image uploaded:', result.secure_url);

    // Enviar la respuesta al cliente antes de actualizar la base de datos
    res.status(200).json({ message: 'Image uploaded successfully', url: result.secure_url });

    // Actualizar la base de datos después de enviar la respuesta
    updateDatabase(result.secure_url, req.params.usuario_id)
      .then(() => console.log('Image URL saved'))
      .catch((err) => console.error('Error saving image URL in database:', err));
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to upload image' });
  }
};

module.exports = {
  subirImagen
};
