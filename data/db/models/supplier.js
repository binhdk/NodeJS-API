'use strict';
module.exports = (sequelize, DataTypes) => {
  var Supplier = sequelize.define('Supplier', {
    id: {
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    company_name: DataTypes.STRING,
    contact_name: DataTypes.STRING,
    contact_title: DataTypes.STRING,
    address: DataTypes.STRING,
    address2: DataTypes.STRING,
    city: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    fax: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    url: DataTypes.STRING
  },{
    tableName: "ts_supplier"
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Supplier;
};