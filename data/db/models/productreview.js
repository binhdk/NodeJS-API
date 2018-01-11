'use strict';
module.exports = (sequelize, DataTypes) => {
  var ProductReview = sequelize.define('ProductReview', {
    product_id: DataTypes.BIGINT,
    reviewer_name: DataTypes.STRING,
    date: DataTypes.DATE,
    rating: DataTypes.TINYINT,
    comment: DataTypes.TEXT
  }, {
    tableName: "product_review"
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ProductReview;
};