const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(/* URL koneksi database */);

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
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  total_price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'DetailOrderTransactions'
});

module.exports = DetailOrderTransaction;