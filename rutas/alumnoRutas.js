const { Router } = require('express');
const router = Router();
const AlumnoController = require('../controller/alumnoController');

router.get('/', AlumnoController.get);
router.get('/:id', AlumnoController.getDetalle);
router.post('/', AlumnoController.postAgregar);
router.put('/:id', AlumnoController.putActualizar);
router.delete('/eliminar/:id', AlumnoController.eliminar);


module.exports = router;