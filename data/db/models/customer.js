'use strict';
module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('Customer', {
    id: {
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    full_name: DataTypes.STRING,
    address: DataTypes.STRING,
    address2: DataTypes.STRING,
    city: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    email_promt: DataTypes.TINYINT
  },{
    tableName: 'customer'
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  
  return Customer;
};