'use strict';
module.exports = (sequelize, DataTypes) => {
  var Payment = sequelize.define('Payment', {
    id: {
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    method_id: DataTypes.INTEGER,
    customer_id: DataTypes.BIGINT,
    amount: DataTypes.DOUBLE,
    status: DataTypes.STRING
  }, {
    tableName: "payment"
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Payment;
};