const AlumnoModel = require('../models/alumnoModel');


const AlumnoController = {

    guardar: (req, res) => {
        const { firstname, lastname, edad } = req.body;

        try {
            AlumnoModel.create({firstname, lastname, edad});            
            console.log('se guardo el usuario');
        } catch (err) {
            console.log('ocurrio un error', err);
        }
        res.send('ok');

    },




};





module.exports = AlumnoController;