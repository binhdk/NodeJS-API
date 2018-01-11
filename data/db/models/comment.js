'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    id: {
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    post_id: DataTypes.BIGINT,
    author: DataTypes.STRING,
    date: DataTypes.DATE,
    author_ip: DataTypes.STRING,
    content: DataTypes.TEXT,
    rating: DataTypes.STRING
  },{
    tableName: "comment"
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Comment;
};