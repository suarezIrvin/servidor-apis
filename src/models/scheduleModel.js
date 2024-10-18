const pool = require('../config/connection');

const scheduleModel = {
  findByEventId: (eventId) => {
    return pool.execute(
      'SELECT * FROM horarios WHERE evento_id = ?',
      [eventId]
    );  
  },
}

module.exports = scheduleModel;