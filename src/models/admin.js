require('dotenv').config()
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(`postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

const Admin = sequelize.define('admins', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  role_id: {
    type: DataTypes.INTEGER
  },
  created_by: {
    type: DataTypes.INTEGER
  },
  created_at: {
    type: DataTypes.STRING
  },
  created_by: {
    type: DataTypes.INTEGER
  },
  updated_at: {
    type: DataTypes.STRING
  },
  updated_by: {
    type: DataTypes.INTEGER
  },
  created_at: {
    type: DataTypes.STRING
  },
  deleted_by: {
    type: DataTypes.INTEGER
  },
  deleted_at: {
    type: DataTypes.STRING
  },
}, {
    timestamps: false
  });

module.exports = Admin;