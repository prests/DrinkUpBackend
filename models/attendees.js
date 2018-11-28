'use strict';
module.exports = (sequelize, DataTypes) => {
  const Attendees = sequelize.define('Attendees', {
    firstName: DataTypes.STRING,
    middle_name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dateOfBirth: DataTypes.DATEONLY,
    age: DataTypes.INTEGER,
    left: DataTypes.DATE,
    license_number: DataTypes.INTEGER,
  }, {});
  Attendees.associate = function(models) {
    // associations can be defined here
  };
  return Attendees;
};
