'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn('Tasks', 'userId', {
     type: Sequelize.INTEGER,
     allowNull: false,
     references: {
       model: 'Users',
       key: 'id'
     }
   })
  },

  down: (queryInterface, Sequelize) => {
  return queryInterface.removeColumn('Tasks', 'userId')
  }
};
