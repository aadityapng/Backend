"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    return queryInterface.bulkInsert("MasterMenuCategories", [
      {
        name: "Category 1",
        created_at: now,
        created_by: 1,
      },
      {
        name: "Category 2",
        created_at: now,
        created_by: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("MasterMenuCategories", null, {});
  },
};
