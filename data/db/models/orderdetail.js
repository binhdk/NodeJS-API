'use strict';
module.exports = (sequelize, DataTypes) => {
  var OrderDetail = sequelize.define('OrderDetail', {
    id: {
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    order_id: DataTypes.BIGINT,
    product_id: DataTypes.BIGINT,
    unit_price: DataTypes.DOUBLE,
    sub_total: DataTypes.DOUBLE,
    quantity: DataTypes.INTEGER,
    discount: DataTypes.INTEGER
  },{
    tableName: "order_detail"
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return OrderDetail;
};