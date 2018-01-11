'use strict';
module.exports = (sequelize, DataTypes) => {
  var AccessoriesAttribute = sequelize.define('AccessoriesAttribute', {
    id: {
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    pro_id: DataTypes.BIGINT,
    attribute: DataTypes.TEXT
  }, {
    tableName: "accessories_attribute"
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return AccessoriesAttribute;
};