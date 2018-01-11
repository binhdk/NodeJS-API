'use strict';
module.exports = (sequelize, DataTypes) => {
  var ProductAttribute = sequelize.define('ProductAttribute', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true
    },
    pro_id: DataTypes.BIGINT,
    cpu_type: DataTypes.STRING,
    cpu_max_speed: DataTypes.TINYINT,
    cpu_tech: DataTypes.STRING,
    ram_type: DataTypes.STRING,
    ram_capacity: DataTypes.TINYINT,
    ram_max_capacity: DataTypes.TINYINT,
    ram_slot: DataTypes.TINYINT,
    disk_drive: DataTypes.STRING,
    disk_capacity: DataTypes.TINYINT,
    screen_size: DataTypes.TINYINT,
    screen_resolution: DataTypes.STRING,
    screen_tech: DataTypes.STRING,
    screen_touch: DataTypes.BOOLEAN,
    graphic_card: DataTypes.STRING,
    graphic_card_design: DataTypes.STRING,
    sound_card: DataTypes.STRING,
    pin_type: DataTypes.STRING,
    pin_design: DataTypes.STRING,
    os: DataTypes.STRING,
    length: DataTypes.FLOAT,
    height: DataTypes.FLOAT,
    width: DataTypes.FLOAT,
    weight: DataTypes.FLOAT,
    material: DataTypes.STRING,
    port: DataTypes.STRING,
    wireless: DataTypes.STRING,
    rom: DataTypes.STRING,
    ext_memory: DataTypes.TINYINT,
    camera_behind_resolution: DataTypes.TINYINT,
    flash: DataTypes.STRING,
    camera_record: DataTypes.STRING,
    advanced_camera: DataTypes.STRING,
    front_camera_resolution: DataTypes.TINYINT,
    video_call: DataTypes.BOOLEAN,
    front_camera_feature: DataTypes.STRING,
    radio: DataTypes.BOOLEAN,
    record: DataTypes.STRING,
    film: DataTypes.STRING,
    music: DataTypes.STRING,
    special_feature: DataTypes.STRING,
    sensor: DataTypes.STRING,
    mobile_network: DataTypes.STRING,
    sim1: DataTypes.STRING,
    sim2: DataTypes.STRING,
    wifi: DataTypes.STRING,
    gps: DataTypes.STRING,
    bluetooth: DataTypes.STRING,
    jack_phone: DataTypes.STRING,
    card_reader: DataTypes.STRING,
    webcam_type: DataTypes.STRING,
    webcam_resolution: DataTypes.TINYINT,
    optical_disk: DataTypes.BOOLEAN,
    charge_port: DataTypes.STRING,
    other_connect: DataTypes.STRING,
    others: DataTypes.STRING
  },{
    tableName: "product_attribute"
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ProductAttribute;
};