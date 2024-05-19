const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.menu = require("./menu");
db.menu_category = require("./masterMenuCategories");
db.orderDetail = require("./DetailOrderTransaction");

db.menu.belongsTo(db.menu_category, { foreignKey: 'category_id' });
db.menu_category.hasMany(db.menu, { foreignKey: 'category_id' });
db.menu.hasMany(db.orderDetail, { foreignKey: "menu_id" });
db.orderDetail.belongsTo(db.menu, {
  foreignKey: "menu_id",
});

module.exports = db;
