'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('alumnos', [
      {
        firstName: "martin",
        lastName: "flores",
        edad: 25
      },
      {
        firstName: "ddddd",
        lastName: "flores",
        edad: 25
      },
      {
        firstName: "eeee",
        lastName: "flores",
        edad: 25
      }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('alumnos', null, {});
  }
};
