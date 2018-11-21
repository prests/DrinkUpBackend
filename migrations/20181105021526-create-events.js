'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      startTime: {
        type: Sequelize.DATE
      },
      endTime: {
        type: Sequelize.DATE
      },

  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Events');
  }
};
