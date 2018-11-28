'use strict';
module.exports = (sequelize, DataTypes) => {
  const Events = sequelize.define('Events', {
    name: DataTypes.STRING,
    description: DataTypes.STRING(1234),
    owner: DataTypes.INTEGER,
    completed: DataTypes.BOOLEAN
  }, {});
  Events.associate = function(models) {
  };
  return Events;
};
