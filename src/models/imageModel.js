const pool = require('../config/connection');

const update = (url, usuarioId) => {
    return new Promise((resolve, reject) => {
      console.log('Running query to update profile photo:', url, 'for user_id:', usuarioId);
      pool.query(
     'UPDATE Usuarios SET fotoPerfil = ? WHERE usuario_id = ?',
      [url, usuarioId],
      (err, results) => {
        if(err){
          console.error('Error saving image url in database:', err);
          reject(err);
        } else{
          console.log('Query result in the database:', results);
          resolve(results);
        }
      }
    );
  });
};


module.exports = {
  update
};





