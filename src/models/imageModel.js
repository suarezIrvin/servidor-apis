const pool = require('../config/connection');

const update = (url, usuarioId) => {
    return new Promise((resolve, reject) => {
      console.log('Ejecutando query para actualizar la foto de perfil:', url, 'para el usuario_id:', usuarioId);
      pool.query(
     'UPDATE Usuarios SET fotoPerfil = ? WHERE usuario_id = ?',
      [url, usuarioId],
      (err, results) => {
        if(err){
          console.error('Error al guardar la url de la imagen en la base de datos:', err);
          reject(err);
        } else{
          console.log('Resultado de la query en la base de datos:', results);
          resolve(results);
        }
      }
    );
  });
};


module.exports = {
  update
};





