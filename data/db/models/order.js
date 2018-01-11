'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    id: {
      type:  DataTypes.BIGINT,
      primaryKey: true
    },
    customer_id: DataTypes.BIGINT,
    order_date: DataTypes.DATE,
    required_date: DataTypes.DATE,
    shipped_date: DataTypes.DATE,
    ship_name: DataTypes.STRING,
    ship_address: DataTypes.STRING,
    ship_address2: DataTypes.STRING,
    ship_city: DataTypes.STRING,
    shipper_id: DataTypes.STRING,
    phone: DataTypes.STRING,
    ship_postal_code: DataTypes.STRING,
    status: DataTypes.TINYINT,
    tax_amount: DataTypes.DOUBLE,
    sub_total: DataTypes.DOUBLE,
    shipping_cost: DataTypes.DOUBLE,
    total_amount: DataTypes.DOUBLE
  }, {
    tableName: "purchase_order"
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Order;
};