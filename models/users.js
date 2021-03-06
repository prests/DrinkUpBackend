/**
 * Users Model - Schema for Users table
 * @author Shayne F. Preston <prests@rpi.edu>
 */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Administrators', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};