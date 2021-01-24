const { UsuarioModel } = require('../db/conexion');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const AlumnoController = {

    get: async (req, res) => {
        let { pagina } = req.query;
        if(!pagina) pagina = 0;
        pagina = parseInt(pagina);
        if(isNaN(pagina)) return res.status(401).json({ok:false, msj: 'ocurrio un error al obtener alumnos'});
        try {
            const resp = await UsuarioModel.findAndCountAll({
                where: {},
                limit: 10,
                offset: pagina * 10
            });
            const total = Math.ceil(resp.count/10);
            resp.total = total;
            resp.next = pagina < total;
            if(pagina < total){
                pagina += 1;
                resp.url = `http://localhost:3000/?pagina=${pagina}`;
            } else {
                resp.url = null;
            }
            pagina -= 2;
            if(pagina < 0){
                resp.prev = null;
            } else {
                resp.prev = `http://localhost:3000/?pagina=${pagina}`;
            }
            // resp.rows = [];
            return res.json(resp);
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
        const {nombre, apellido, edad, password= '123456' } = req.body;
        if(!nombre || !apellido || !edad) return res.status(400).json({ok:false, msj: 'faltan campos para agregar al usuario'});

        try {
            const hash = await bcrypt.hash(password, 10);
            const puesto = await UsuarioModel.create({nombre, apellido, edad, password:hash});
            return res.json(puesto);
        } catch (err) {
            return res.status(400).json({ok:false, err});
        }
    },

    putActualizar: async (req, res) => {
        const { nombre, apellido, edad } = req.body;
        const { id } = req.params;
        if(!id) return res.status(401).json({ok:false, msj:'faltan datos'});
        
        if(!nombre || !apellido || !edad) return res.status(401).json({ok:false, msj:'faltan campos'});
        try {
            const usuario = await UsuarioModel.update({ nombre, apellido, edad }, { where: { id }, fields: ['nombre', 'apellido', 'edad'] });
            return res.json(usuario);
        } catch (err) {
            return res.status(401).json({ok:false, msj: 'ocurrio un error al actualizar', err});
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

    },

    login: async (req, res) => {
        const { nombre, password = '123456' } = req.body;
        if(!nombre || !password) return res.status(400).json({ok:false, msj:'faltan datos al entrar'});

        try {
            const usuario = await UsuarioModel.findOne( { where: { nombre } } );
            if(!usuario) return res.status(400).json({ok:false, msj: `no se encuentra al usuario ${nombre}` });
            console.log('usuario.get() :>> ', usuario.get('password'));
            const match = await bcrypt.compare(password, usuario.get('password'));
            if(match){
                const token = jwt.sign({usuario}, 'secret', {expiresIn: '8h'});
                if(match) return res.json({ok:match, token});
            }
            return res.status(400).json({ok:false, msj: `ocurrio un error` });
        } catch (err) {
            return res.status(400).json({ok:false, msj: `ocurrio un error`, error: err });
        }


    }

};


module.exports = AlumnoController;