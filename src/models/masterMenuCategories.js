const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(`postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

const MasterMenuCategories = sequelize.define('MasterMenuCategories', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false
  },
  created_by: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  updated_at: {
    type: DataTypes.DATE
  },
  updated_by: {
    type: DataTypes.INTEGER
  },
  deleted_at: {
    type: DataTypes.DATE
  },
  deleted_by: {
    type: DataTypes.INTEGER
  }
}, {
  timestamps: false
});

module.exports = MasterMenuCategories;