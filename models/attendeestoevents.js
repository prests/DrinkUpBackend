'use strict';
module.exports = (sequelize, DataTypes) => {
  const AttendeesToEvents = sequelize.define('AttendeesToEvents', {
    event_id: DataTypes.INTEGER,
    attendee_id: DataTypes.INTEGER
  }, {});
  AttendeesToEvents.associate = function(models) {
    // associations can be defined here
  };
  return AttendeesToEvents;
};
