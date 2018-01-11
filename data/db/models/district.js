'use strict';
module.exports = (sequelize, DataTypes) => {
  var District = sequelize.define('District', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    location: DataTypes.STRING,
    province_id: DataTypes.INTEGER,
    status: DataTypes.TINYINT
  }, {
    tableName: "district"
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return District;
};