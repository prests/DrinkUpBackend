'use strict';
module.exports = (sequelize, DataTypes) => {
  const Attendees = sequelize.define('Attendees', {
    firstName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dateOfBirth: DataTypes.DATEONLY,
    age: DataTypes.INTEGER,
    left: DataTypes.DATE,
    licenseNumber: DataTypes.INTEGER,
  }, {});
  Attendees.associate = function(models) {
    // associations can be defined here
  };
  return Attendees;
};
