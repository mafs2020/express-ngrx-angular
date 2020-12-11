const { UsuarioModel } = require('../db/conexion');

const AlumnoController = {

    get: async (req, res) => {
        let { pagina } = req.query || 1;
        try {
            const usuarios = await UsuarioModel.findAll({
                where: {},
                limit: 10,
                offset: pagina * 10
            });
            return res.json(usuarios);
        } catch (err) {
            console.log('ocurrio un error', err);
            return res.status(401).json({ok:false, msj:'ocurrio un error'});
        }
    },

    postAgregar: async (req, res) => {
        const {nombre, apellido, edad } = req.body;
        try {
            const puesto = await UsuarioModel.create({nombre, apellido, edad});
            return res.json(puesto);
        } catch (err) {
            return res.status(403).json({ok:false});
        }
    }




};





module.exports = AlumnoController;