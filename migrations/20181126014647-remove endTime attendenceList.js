'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Attendees", "entered");
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Attendees", "createdAt", {
      type: Sequelize.DATE
    })
  }
};
