'use strict';
module.exports = (sequelize, DataTypes) => {
  var PaymentMethod = sequelize.define('PaymentMethod', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    status: DataTypes.TINYINT
  }, {
    tableName: "payment_method"
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return PaymentMethod;
};