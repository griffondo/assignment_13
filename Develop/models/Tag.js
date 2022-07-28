const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

Tag.DataTypes({
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'tag'
}
);

module.exports = Tag;
