const router = require('express').Router();
const puestosController = require('../controller/puestoController');

router.get('/', puestosController.get);
router.post('/', puestosController.postAgregar);

module.exports = router;