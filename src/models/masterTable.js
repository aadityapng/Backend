const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(`postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

const MasterTable = sequelize.define('MasterTable', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  no: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'MasterTables'
});

module.exports = MasterTable;