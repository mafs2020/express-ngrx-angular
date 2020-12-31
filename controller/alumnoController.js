const { UsuarioModel } = require('../db/conexion');

const AlumnoController = {

    get: async (req, res) => {
        let { pagina } = req.query;
        if(!pagina) pagina = 0;
        
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
    getDetalle: async (req, res) => {
        let { id } = req.params;
        if(!id) return res.status(401).json({ok:false, msj: 'ocurrio un error'});
        
        try {
            const usuario = await UsuarioModel.findByPk(id);
            return res.json(usuario);
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
            return res.status(400).json({ok:false});
        }
    },

    putActualizar: async (req, res) => {
        const { nombre, apellido, edad } = req.body;
        // const { id } = req.params;
        if(!nombre || !apellido || !edad) return res.status(401).json({ok:false, msj:'faltan datos'});
        try {
            const usuario = await UsuarioModel.update({ nombre, apellido, edad }, { where: { id }, fields: ['nombre', 'apellido', 'edad'] });
            return res.json(usuario);
        } catch (err) {
            return res.status(401).json({ok:false, msj: 'ocurrio un error al actualizar'});
        }

    },
    eliminar: async (req, res) => {
        let { id } = req.params;
        if(!id) return res.status(400).json({ok:false, msj:'datos incorrectos'});
        
        try {
            const usuarioBorrar = await UsuarioModel.destroy( { where: { id } } );
            return res.json({usuario:usuarioBorrar});
        } catch (err) {
            return res.status(401).json({ok:false, msl:'ocurrio un error'});
        }

    }



};





module.exports = AlumnoController;