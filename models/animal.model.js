module.exports = (sequelize, Sequelize) => {
    const animal = sequelize.define("animal", {
        name: {
            type: Sequelize.STRING,
        },
        breed: {
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
    })

    return animal
}