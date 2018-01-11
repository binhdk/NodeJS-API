'use strict';
module.exports = (sequelize, DataTypes) => {
  var SubCategory = sequelize.define('SubCategory', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    status: DataTypes.TINYINT,
    parent_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  },{
    tableName: "sub_category"
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return SubCategory;
};