const { AlumnoModelo } = require('../db/conexion');


const AlumnoController = {

    guardar: async (req, res) => {
        const { firstname, lastname, edad } = req.body;

        try {
            await AlumnoModelo.create({firstname, lastname, edad});            
            console.log('se guardo el usuario');
        } catch (err) {
            console.log('ocurrio un error', err);
        }
        res.send('ok');

    },




};





module.exports = AlumnoController;