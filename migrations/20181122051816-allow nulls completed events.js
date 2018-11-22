'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Events', 'completed', {
      type: Sequelize.BOOLEAN,
      default: false
  });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Events', 'completed', {
      type: Sequelize.BOOLEAN,
      defaultValue: false
  });
  }
};
