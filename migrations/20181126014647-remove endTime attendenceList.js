'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Attendees", "createdAt", {
      type: Sequelize.DATE,
      allowNull: false,
    })
  },

  down: (queryInterface, Sequelize) => {

  }
};
