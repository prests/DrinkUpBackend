'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn("AttendeesToEvents", "createdAt"),
      queryInterface.removeColumn("AttendeesToEvents", "updatedAt")
    ];
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
