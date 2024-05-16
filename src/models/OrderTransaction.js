const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(`postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

const OrderTransaction = sequelize.define('OrderTransaction', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  table_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  payment_status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  payment_method: {
    type: DataTypes.STRING
  },
  order_status: {
    type: DataTypes.STRING
  }
}, {
  timestamps: false,
  tableName: 'OrderTransactions'
});

module.exports = OrderTransaction;