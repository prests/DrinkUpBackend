'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Events', 'completed', {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        default: false
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Events', 'completed', {
        type: sequelize.BOOLEAN,
        allowNull: true,
    });
  }
};
