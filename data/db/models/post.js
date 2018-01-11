'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    id: {
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    author_id: DataTypes.BIGINT,
    content: DataTypes.TEXT,
    title: DataTypes.STRING,
    status: DataTypes.STRING,
    image: DataTypes.STRING,
    tag: DataTypes.TEXT,
    comment_count: DataTypes.BIGINT
  },{
    tableName: "post"
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Post;
};