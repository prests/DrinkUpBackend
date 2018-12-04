'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Attendees', 'license_number',
    {
      type: Sequelize.STRING(64)
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Attendees', 'license_number',
    {
      type: Sequelize.INTEGER
    });
  }
};
