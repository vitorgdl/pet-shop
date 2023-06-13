module.exports = (sequelize, Sequelize) => {
    const service = sequelize.define("service", {
        services: {
            type: Sequelize.STRING,
        },
        name: {
            type: Sequelize.STRING,
        },
        price: {
            type: Sequelize.STRING,
        },
        duration: {
            type: Sequelize.STRING,
        },
    })

    return service
}