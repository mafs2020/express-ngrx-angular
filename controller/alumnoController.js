const { UsuarioModel } = require('../db/conexion');

const ModeloClase = require('../classes/crudClass');
const modeloClase = new ModeloClase(UsuarioModel);

const AlumnoController = {

    guardar: async (req, res) => {
        const { nombre, apellido, edad } = req.body;

        try {
            // await UsuarioModel.create({ nombre, apellido, edad });
            const usuarios = await modeloClase.get();
            return res.json(usuarios)
        } catch (err) {
            console.log('ocurrio un error', err);
        }
        res.send('ok');

    },




};





module.exports = AlumnoController;