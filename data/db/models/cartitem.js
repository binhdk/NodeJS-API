'use strict';
module.exports = (sequelize, DataTypes) => {
  var CartItem = sequelize.define('CartItem', {
    id: {
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    product_id: DataTypes.BIGINT,
    cart_id: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {
    tableName: "cart_item"
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return CartItem;
};