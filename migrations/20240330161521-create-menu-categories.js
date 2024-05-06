"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("MasterMenuCategories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      created_by: {
        type: Sequelize.INTEGER,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
      updated_by: {
        type: Sequelize.INTEGER,
      },
      deleted_at: {
        type: Sequelize.DATE,
      },
      deleted_by: {
        type: Sequelize.INTEGER,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("MasterMenuCategories");
  },
};
