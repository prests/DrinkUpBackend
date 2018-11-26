'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.renameTable("Users", "Administrators"),
      queryInterface.renameTable("UsersToEvents", "AdministratorsToEvents")
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
