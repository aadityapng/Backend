"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "OrderTransactions",
      [
        {
          table_id: 1,
          date: new Date(),
          payment_status: "Belum Dibayar",
          payment_method: "Cash",
        },
        {
          table_id: 2,
          date: new Date(),
          payment_status: "Sudah Dibayar",
          payment_method: "Debit Card",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("OrderTransactions", null, {});
  },
};
