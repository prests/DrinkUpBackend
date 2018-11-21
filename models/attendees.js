'use strict';
module.exports = (sequelize, DataTypes) => {
  const Attendees = sequelize.define('Attendees', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dateOfBirth: DataTypes.DATEONLY,
    age: DataTypes.INTEGER,
    entered: DataTypes.DATE,
    left: DataTypes.DATE
  }, {});
  Attendees.associate = function(models) {
    // associations can be defined here
  };
  return Attendees;
};
