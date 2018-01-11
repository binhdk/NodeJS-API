'use strict';
module.exports = (sequelize, DataTypes) => {
  var Province = sequelize.define('Province', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    location: DataTypes.STRING,
    phone_code: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    status: DataTypes.TINYINT
  }, {
    tableName: "province"
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Province;
};