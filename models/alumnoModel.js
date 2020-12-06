const { Sequelize, DataTypes } = require('sequelize');


const User = Sequelize.define('alumnos', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
    freezeTableName: true,
    timestamps: false,
});

console.log(User);

module.exports = User;