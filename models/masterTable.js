'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MasterTable extends Model {}

  MasterTable.init({
    no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'MasterTable',
    tableName: 'MasterTables',
    timestamps: false,
  });

  return MasterTable;
};