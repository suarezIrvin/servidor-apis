const express = require('express');
const router = express.Router();
const detallesEventoController = require('../controllers/detalleEventoController');



router.get('/:evento_id', detallesEventoController.DetalleEventoController);

module.exports = router;
