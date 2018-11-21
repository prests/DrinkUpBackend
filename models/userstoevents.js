'use strict';
module.exports = (sequelize, DataTypes) => {
  const UsersToEvents = sequelize.define('UsersToEvents', {
    user_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER
  }, {});
  UsersToEvents.associate = function(models) {
    // associations can be defined here
  };
  return UsersToEvents;
};