'use strict';
module.exports = (sequelize, DataTypes) => {
  var ExternalLogin = sequelize.define('ExternalLogin', {
    id: {
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    user_id: DataTypes.BIGINT,
    provider_id: DataTypes.STRING,
    provider_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    full_name: DataTypes.STRING,
    email: DataTypes.STRING,
    login_name: DataTypes.STRING
  }, {
    tableName: "ext_user_login"
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ExternalLogin;
};