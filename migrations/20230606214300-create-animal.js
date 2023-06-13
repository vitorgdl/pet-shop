module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("animals", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            breed: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            age: {
                type: Sequelize.STRING,
            },
            weight: {
                type: Sequelize.STRING,
            },
            owner: {
                type: Sequelize.STRING,
            },
            vaccinated: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        })
    },

    async down() {
        await queryInterface.dropTable("animals")
    },
}