'use strict';
module.exports = (sequelize, DataTypes) => {
  var ProductPhoto = sequelize.define('ProductPhoto', {
    id: {
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    thumb_nail_photo: DataTypes.STRING,
    large_photo: DataTypes.STRING,
    primary: DataTypes.TINYINT
  }, {
    tableName: "ts_product_photo"
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ProductPhoto;
};