const { Sequelize, Op, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize('escuela', 'root', 'Mafs1920', {
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
})()
db = {
    Sequelize, Op, DataTypes, sequelize
}
module.export = db;