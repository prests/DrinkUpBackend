'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Events", "createdAt");
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Events", "createdAt", {
      type: Sequelize.DATE,
      allowNull: false,
    });
  }
};
