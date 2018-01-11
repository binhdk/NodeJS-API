'use strict';
module.exports = (sequelize, DataTypes) => {
  var Shipper = sequelize.define('Shipper', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    company_name: DataTypes.STRING,
    ship_rate: DataTypes.TINYINT,
    phone: DataTypes.STRING
  }, {
    tableName: "shipper"
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Shipper;
};