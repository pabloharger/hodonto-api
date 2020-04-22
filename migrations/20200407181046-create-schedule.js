'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idDoctor: {
        type: Sequelize.INTEGER
      },
      idPatient: {
        type: Sequelize.INTEGER
      },
      dateTimeBegin: {
        type: Sequelize.DATE
      },
      dateTimeEnd: {
        type: Sequelize.DATE
      },
      observation: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('schedules')
  }
}
