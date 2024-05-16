"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("OrderTransactions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      table_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "MasterTables",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      payment_status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      payment_method: {
        type: Sequelize.STRING,
      },
      order_status: {
        type: Sequelize.STRING,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("OrderTransactions");
  },
};
