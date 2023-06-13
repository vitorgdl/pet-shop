const express = require("express")
const { User } = require("./models")
const { Animal } = require("./models")
const { Service } = require('./models')


const app = express()
app.use(express.json())

app.use("/home", express.static("./index.html"))
app.use("/index.css", express.static("./index.css"))
app.use("/script.js", express.static("./script.js"))
app.use("/animais", express.static("./animais.html"))
app.use("/animais.css", express.static("./animais.css"))
app.use("/animais.js", express.static("./animais.js"))
app.use("/services", express.static("./service.html"))
app.use("/service.css", express.static("./service.css"))
app.use("/service.js", express.static("./service.js"))





app.delete("/api/user/:id", async(request, response) => {
    if (!request.params.id) {
        request
            .status(400)
            .send({ message: "É necessário um id para deleter este usuário. " })
        return
    }

    User.destroy({ where: { id: request.params.id } })
        .then((data) => {
            request.send({ deleteUsersCount: data })
        })
        .catch((erro) => {
            response.status(500).send({
                message: erro.message || "Ocorreu um erro ao tentar criar um novo usuário.",
            })
        })
})

app.delete("/api/animais/:id", async(request, response) => {
    if (!request.params.id) {
        request
            .status(400)
            .send({ message: "É necessário um id para deleter este animal. " })
        return
    }


    Animal.destroy({ where: { id: request.params.id } })
        .then((data) => {
            request.send({ deleteUsersCount: data })
        })
        .catch((erro) => {
            response.status(500).send({
                message: erro.message || "Ocorreu um erro ao tentar criar um novo animal.",
            })
        })
})


app.delete("/api/services/:id", async(request, response) => {
    if (!request.params.id) {
        request
            .status(400)
            .send({ message: "É necessário um id para deleter este serviço. " })
        return
    }

    Service.destroy({ where: { id: request.params.id } })
        .then((data) => {
            request.send({ deleteServicesCount: data })
        })
        .catch((erro) => {
            response.status(500).send({
                message: erro.message || "Ocorreu um erro ao tentar criar um novo serviço.",
            })
        })
})


app.get("/api/user", async(request, response) => {
    const users = await User.findAll()


    response.json(users)
})

app.get("/api/animais", async(request, response) => {
    const animais = await Animal.findAll()


    response.json(animais)
})

app.get("/api/services", async(request, response) => {
    const service = await Service.findAll()


    response.json(service)
})


app.post("/api/user", async(request, response) => {
    const newUser = {
        name: request.body.name,
        birthDate: request.body.birthDate,
        email: request.body.email,
        cpf: request.body.cpf,
        createdAt: new Date(),
        updatedAt: new Date(),
    }

    const user = await User.create(newUser)

    response.json(user)
})

app.post("/api/animais", async(request, response) => {
    const newAnimal = {
        name: request.body.name,
        breed: request.body.breed,
        age: request.body.age,
        weight: request.body.weight,
        owner: request.body.owner,
        vaccinated: request.body.vaccinated,
        createdAt: new Date(),
        updatedAt: new Date(),
    }

    const animais = await Animal.create(newAnimal)

    response.json(animais)
})

app.post("/api/services", async(request, response) => {
    const newService = {
        services: request.body.services,
        name: request.body.name,
        price: request.body.price,
        duration: request.body.duration,
        createdAt: new Date(),
        updatedAt: new Date(),
    }

    const service = await Service.create(newService)

    response.json(service)
})

app.listen(3000, () => {
    console.log(`Servidor está rodando em http://localhost:3000`)
})