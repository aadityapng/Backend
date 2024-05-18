const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
);

const ListMenu = sequelize.define(
  "ListMenu",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    // stock: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // }
  },
  {
    timestamps: false,
    tableName: "Menus",
  }
);

module.exports = ListMenu;
