const { Router } = require('express');
const router = Router();
const AlumnoController = require('../controller/alumnoController');

router.post('/', AlumnoController.guardar);


module.exports = router;