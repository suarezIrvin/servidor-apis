const { v2: cloudinary } = require('cloudinary');
const streamifier = require('streamifier');
const { update, updateImageForEvent, insertImages } = require('../models/imageModel'); // Mantener el nombre `update` para el usuario
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

// Función para cargar imagen de perfil de usuario
const uploadUserImage = async (req, res) => {
  const { usuario_id } = req.params; // Obtener usuario_id de los parámetros
  console.log('File received for user:', req.file);

  if (!req.file) {
    console.log('No file uploaded');
    return res.status(400).json({ error: 'No file uploaded' });
  }

  try {
    console.log('Uploading user image to Cloudinary...');
    const result = await uploadStream(req.file);
    console.log('User image uploaded:', result.secure_url);

    // Enviar la respuesta al cliente antes de actualizar la base de datos
    res.status(200).json({ message: 'User image uploaded successfully', url: result.secure_url });

    // Actualizar la base de datos con la imagen de perfil del usuario
    await update(result.secure_url, usuario_id); // Actualizar la foto de perfil del usuario
    console.log('User image URL saved in the database');

  } catch (error) {
    console.error('Error uploading user image:', error);
    res.status(500).json({ error: 'Failed to upload user image' });
  }
};

// Función para cargar imagen de evento
const uploadEventImage = async (req, res) => {
  const { imagen_id } = req.params; // Obtener evento_id de los parámetros
  console.log('File received for event:', req.file);

  if (!req.file) {
    console.log('No file uploaded');
    return res.status(400).json({ error: 'No file uploaded' });
  }

  try {
    console.log('Uploading event image to Cloudinary...');
    const result = await uploadStream(req.file);
    console.log('Event image uploaded:', result.secure_url);

    // Enviar la respuesta al cliente antes de actualizar la base de datos
    res.status(200).json({ message: 'Event image uploaded successfully', url: result.secure_url });

    // Actualizar la base de datos con la imagen del evento
    await updateImageForEvent(result.secure_url, imagen_id); // Actualizar la imagen del evento utilizando evento_id
    console.log('Event image URL saved in the database');

  } catch (error) {
    console.error('Error uploading event image:', error);
    res.status(500).json({ error: 'Failed to upload event image' });
  }
};

const insertImagesToDatabase = async (req, res) => {
  console.log('Files received for upload:', req.files);

  // Verificar que se hayan subido archivos
  if (!req.files || req.files.length === 0) {
      console.log('No files uploaded');
      return res.status(400).json({ error: 'No files uploaded' });
  }

  // Obtener usuario_id y evento_id del body
  const { usuario_id, evento_id } = req.body; // Cambiar a req.body

  console.log('usuario_id:', usuario_id, 'evento_id:', evento_id); // Imprimir para depuración

  // Validar usuario_id y evento_id
  if (!usuario_id || !evento_id) {
      console.log('Missing usuario_id or evento_id');
      return res.status(400).json({ error: 'Missing usuario_id or evento_id' });
  }

  try {
      const uploadPromises = req.files.map(file => uploadStream(file));
      const results = await Promise.all(uploadPromises);
      const imageUrls = results.map(result => result.secure_url);

      res.status(200).json({ message: 'Images uploaded successfully', urls: imageUrls, user: usuario_id, evento: evento_id });


      // Actualizar la base de datos con las URLs de las imágenes
      await insertImages(usuario_id, evento_id, imageUrls); 
      console.log('Event image URLs saved in the database');

     
  } catch (error) {
      console.error('Error uploading event images:', error);
      return res.status(500).json({ error: 'Failed to upload event images' });
  }
};


module.exports = {
  uploadUserImage,
  uploadEventImage,
  insertImagesToDatabase // Asegúrate de exportar la función
};
