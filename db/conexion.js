const { Sequelize } = require('Sequelize');

const sequelize = new Sequelize('xxxxxx', 'xxxxxx', 'xxxxxx', {
    host: 'localhost',
    dialect: 'mysql'
});


( async ()=> {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

const Usuario = require('../models/usuario');
const PuestoModelo = require('../models/puesto')(sequelize, Sequelize);


const UsuarioModel = Usuario(sequelize, Sequelize);

module.exports = {
    UsuarioModel,
    PuestoModelo
};
