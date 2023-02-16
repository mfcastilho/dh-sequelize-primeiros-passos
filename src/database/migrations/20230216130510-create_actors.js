'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.createTable('actors',
     {  
       id:{
          type:Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },
        name:{
          type: Sequelize.DataTypes.STRING,
          allowNull: false
        }
     });
     
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.dropTable('actors');
   
  }
};
