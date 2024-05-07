'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.MasterMenuCatergories, {
        foreignKey: 'category_id'
        
      })
      
    }
  }
  Menu.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    price: DataTypes.DECIMAL(10,2),
    
  }, {
    sequelize,
    modelName: 'Menu',
  });
  return Menu;
};