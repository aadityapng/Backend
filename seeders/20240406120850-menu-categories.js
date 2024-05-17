"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("MasterMenuCategories", [
      {
        name: "Food",
        created_at: new Date(),
        created_by: 1,
      },
      {
        name: "Drink",
        created_at: new Date(),
        created_by: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("MasterMenuCategories", null, {});
  },
};
