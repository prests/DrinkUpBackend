'use strict';
module.exports = (sequelize, DataTypes) => {
  const Events = sequelize.define('Events', {
    name: DataTypes.STRING,
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE,
    description: DataTypes.STRING(1234),
    owners: DataTypes.ARRAY(DataTypes.INTEGER),
    attendancelist: DataTypes.ARRAY(DataTypes.INTEGER),
    completed: DataTypes.BOOLEAN
  }, {});
  Events.associate = function(models) {
  };
  return Events;
};
