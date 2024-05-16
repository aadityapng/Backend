const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(`postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

const DetailOrderTransaction = sequelize.define('DetailOrderTransaction', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'OrderTransactions',
      key: 'id'
    }
  },
  menu_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Menus',
      key: 'id'
    }
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  total_price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  notes: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
}, {
  timestamps: false,
  tableName: 'DetailOrderTransactions'
});

module.exports = DetailOrderTransaction;