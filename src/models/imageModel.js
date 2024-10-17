// imageModel.js
const pool = require('../config/connection');

const update = (url, usuarioId) => {
    return new Promise((resolve, reject) => {
        console.log('Running query to update profile photo:', url, 'for user_id:', usuarioId);
        pool.query(
            'UPDATE usuarios SET fotoPerfil = ? WHERE usuario_id = ?',
            [url, usuarioId],
            (err, results) => {
                if (err) {
                    console.error('Error saving image url in database:', err);
                    reject(err);
                } else {
                    console.log('Query result in the database:', results);
                    resolve(results);
                }
            }
        );
    });
};

const updateImageForEvent = (url, imagenId) => {
    return new Promise((resolve, reject) => {
        console.log('Running query to update image URL:', url, 'for imagen_id:', imagenId);
        pool.query(
            'UPDATE imagenes SET imagen_url = ? WHERE imagen_id = ?',
            [url, imagenId],
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
};

const insertImages = (usuarioId, imagenId, urls) => {
  return new Promise((resolve, reject) => {
      const values = urls.map(url => [usuarioId, imagenId, url, 0]); // Asumiendo tipo_img como 0
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
};


module.exports = {
    update,
    updateImageForEvent,
    insertImages
};
