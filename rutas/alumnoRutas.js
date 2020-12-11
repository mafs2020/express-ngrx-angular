const { Router } = require('express');
const router = Router();
const AlumnoController = require('../controller/alumnoController');

router.get('/', AlumnoController.get);
router.post('/', AlumnoController.postAgregar);


module.exports = router;