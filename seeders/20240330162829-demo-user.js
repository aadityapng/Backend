"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("admins", [
      {
        name: "Admin 1",
        username: "admin1",
        password:
          "$2a$12$M94fuZKz5.g1cNSB3V2auerdGvIOSINaNve1Jcvhm3y0I3lup1NFi",
        role_id: 1,
        created_by: 1,
        created_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("admins", null, {});
  },
};
