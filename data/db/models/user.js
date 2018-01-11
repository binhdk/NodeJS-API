'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true
    },
    has_ext_login: DataTypes.TINYINT,
    full_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    password_salt: DataTypes.STRING,    
    avatar: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
    email_confirmation_token: DataTypes.STRING,
    status: DataTypes.INTEGER,
    password_reminder_token: DataTypes.STRING,
    password_reminder_expire: DataTypes.DATE
  }, {
    tableName: 'user'
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};