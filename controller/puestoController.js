const { PuestoModelo } = require('../db/conexion');

// const modeloClase = require('../classes/crudClass');
// const puestoModelo = new modeloClase(PuestoModelo);

const puestoController = {
    get: async (req, res) => {
        try {
            const puestos = await PuestoModelo.findAll({
                where: {},
                limit: 12,
                offset: 0
            });
            return res.json(puestos);
        } catch (err) {
            console.log('ocurrio un error', err);
            return res.status(401).json({ok:false, msj:'ocurrio un error'});
        }
    },

    postAgregar: async (req, res) => {
        const { nombre, sueldo } = req.body;
        try {
            const puesto = await PuestoModelo.create({nombre, sueldo});
            return res.json(puesto);
        } catch (err) {
            return res.status(403).json({ok:false});
        }
    }
};

module.exports = puestoController;