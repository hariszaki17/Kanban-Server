'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn('Users', 'organization', {
     type: Sequelize.STRING
   })
  },

  down: (queryInterface, Sequelize) => {
  return queryInterface.removeColumn('Users', 'organization')
  }
};
