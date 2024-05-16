const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: "postgres",
    });

    const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.menu = require('./menu')
db.orderDetail = require('./DetailOrderTransaction')

db.menu.hasMany(db.orderDetail)
db.orderDetail.belongsTo(db.menu, {
    foreignKey: 'menu_id'
})

module.exports = db