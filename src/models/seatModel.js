const pool = require('../config/connection');

const Seat = {
    create: (numberSeat, status, userId, scenaryId) => {
        return pool.execute(
            'INSERT INTO asientos (numero_asiento, estado, usuario_id, escenario_id) VALUES (?, ?, ?, ?)',
            [numberSeat, status, userId, scenaryId]
        );
    },

    findById: (seatId) => {
      return pool.execute(
        'SELECT * FROM asientos WHERE asiento_id = ?',
        [seatId]
      );  
    },


    findAll: () => {
      return pool.execute('SELECT * FROM asientos');
    },
    
    update:(numberSeat, status, userId, scenaryId, seatId) =>{
      return pool.execute(
        'UPDATE asientos SET numero_asiento = ?, estado = ?, usuario_id = ?, escenario_id = ? WHERE asiento_id = ?',
        [numberSeat,status,userId,scenaryId,seatId]
      )
    },

    delete:( seatId ) => {
        return pool.execute(
        'DELETE FROM asientos WHERE asiento_id = ?',
        [seatId]
        )
    }
}

module.exports = Seat;