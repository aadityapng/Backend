"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "DetailOrderTransactions",
      [
        {
          order_id: 1,
          menu_id: 1,
          quantity: 2,
          total_price: 30000,
        },
        {
          order_id: 2,
          menu_id: 2,
          quantity: 1,
          total_price: 20000,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("DetailOrderTransactions", null, {});
  },
};
