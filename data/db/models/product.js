'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    id: {
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    sku: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    promt_price: DataTypes.DOUBLE,
    manufacturer: DataTypes.STRING,
    guarantee: DataTypes.TINYINT,
    sub_category_id: DataTypes.INTEGER,
    supplier_id: DataTypes.BIGINT,
    description: DataTypes.TEXT,
    introduction: DataTypes.TEXT,
    status: DataTypes.TINYINT
  },{
    tableName: "product"
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Product;
};