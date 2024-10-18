const pool = require('../config/connection');

// Modelo para gestionar las imágenes
const Image = {
  // Actualizar la foto de perfil del usuario
  update: (url, usuario_id) => {
    return new Promise((resolve, reject) => {
      console.log('Running query to update profile photo:', url, 'for usuario_id:', usuario_id);
      pool.query(
        'UPDATE usuarios SET fotoPerfil = ? WHERE usuario_id = ?',
        [url, usuario_id],
        (err, results) => {
          if (err) {
            console.error('Error saving image URL in database:', err);
            reject(err);
          } else {
            console.log('Query result in the database:', results);
            resolve(results);
          }
        }
      );
    });
  },

  // Actualizar la imagen de un evento
  updateImageForEvent: (url, imagen_id) => {
    return new Promise((resolve, reject) => {
      console.log('Running query to update image URL:', url, 'for imagen_id:', imagen_id);
      pool.query(
        'UPDATE imagenes SET imagen_url = ? WHERE imagen_id = ?',
        [url, imagen_id],
        (err, results) => {
          if (err) {
            console.error('Error saving image URL in database for event:', err);
            reject(err);
          } else {
            console.log('Query result in the database for event:', results);
            resolve(results);
          }
        }
      );
    });
  },

  // Insertar varias imágenes a la base de datos
  insertImages: (userId, eventoId, urls) => {
    return new Promise((resolve, reject) => {
      const values = urls.map(url => [userId, eventoId, url, 0]); // Asumiendo que tipo_img es 0 por defecto
      const query = 'INSERT INTO imagenes (usuario_id, evento_id, imagen_url, tipo_img) VALUES ?';

      pool.query(query, [values], (err, results) => {
        if (err) {
          console.error('Error inserting images into database:', err);
          reject(err); 
        } else {
          console.log('Inserted images into database:', results);
          resolve(results);
        }
      });
    });
  },

  // Eliminar imagen por id
  deleteImage: (imagen_id) => {
    return new Promise((resolve, reject) => {
      console.log('Running query to delete image with imagen_id:', imagen_id);
      pool.query(
        'DELETE FROM imagenes WHERE imagen_id = ?',
        [imagen_id],
        (err, results) => {
          if (err) {
            console.error('Error deleting image from database:', err);
            reject(err);
          } else {
            console.log('Deleted image with imagen_id:', imagen_id, 'Results:', results);
            resolve(results);
          }
        }
      );
    });
  }
};

module.exports = Image;
