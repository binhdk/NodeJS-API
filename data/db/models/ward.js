'use strict';
module.exports = (sequelize, DataTypes) => {
  var Ward = sequelize.define('Ward', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    location: DataTypes.STRING,
    district_id: DataTypes.INTEGER,
    status: DataTypes.TINYINT
  }, {
    tableName: "ward"
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Ward;
};