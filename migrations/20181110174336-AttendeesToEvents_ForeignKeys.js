'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('AttendeesToEvents', ['event_id'], {
      type: 'foreign key',
      name: 'events_foreign_key',
      references: {
        table: 'Events',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    return queryInterface.addConstraint('AttendeesToEvents', ['attendee_id'], {
      type: 'foreign key',
      name: 'attendees_foreign_key',
      references: {
        table: 'Attendees',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
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
