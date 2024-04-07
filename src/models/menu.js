const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(`postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

const Menu = sequelize.define('Menus', {
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "MasterMenuCategories",
          key: "id",
        },
        onUpdate: "CASCADE",
      },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  createBy: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
  updatedBy: {
    type: DataTypes.STRING,
  },
  deleteAt: {
    type: DataTypes.DATE,
  },
  deleteBy: {
    type: DataTypes.STRING,
  },
}, {
    timestamps: false
  });

module.exports = Menu;