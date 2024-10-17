const scheduleModel = require('../models/scheduleModel');

const scheduleController = {

  getByEvent: async (req, res) => {
    const { evento_id } = req.params;
    try {
      const [schedule] = await scheduleModel.findByEventId(evento_id)
      // return res.status(200).json(schedule)
      res.json(schedule)
        
    } catch (error) {
        console.error('Error al obtener la lista de eventos:', error);
        res.status(500).send('Error al obtener la lista de eventos');
    }
  },
}

module.exports = scheduleController;