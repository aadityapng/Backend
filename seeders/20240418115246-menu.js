"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      "Menus",
      [
        {
          category_id: 1,
          name: "Nasi Goreng",
          price: 25000,
          menu_photo: 'nasi_goreng.jpg',
          createdAt: new Date(),
          createdBy: 1,
          updatedAt: new Date(),
          updatedBy: 1,
        },
        {
          category_id: 1,
          name: "Mie Goreng",
          price: 20000,
          menu_photo: 'mie_goreng.jpg',
          createdAt: new Date(),
          createdBy: 1,
          updatedAt: new Date(),
          updatedBy: 1,
        },
        {
          category_id: 2,
          name: "Es Teh",
          price: 5000,
          menu_photo: 'es_teh.jpg',
          createdAt: new Date(),
          createdBy: 1,
          updatedAt: new Date(),
          updatedBy: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
