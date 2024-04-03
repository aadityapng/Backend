'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MasterMenuCategories extends Model {
    static associate(models) {
      // Definisikan asosiasi jika diperluin
    }
  }

  MasterMenuCategories.init({
    name: DataTypes.STRING,
    created_at: DataTypes.DATE,
    created_by: DataTypes.INTEGER,
    updated_at: DataTypes.DATE,
    updated_by: DataTypes.INTEGER,
    deleted_at: DataTypes.DATE,
    deleted_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MasterMenuCategories',
  });

  return MasterMenuCategories;
};