const express = require("express")

const app = express()

app.use(express.json())
app.use("/home", express.static('./index.html'))
app.use("/script.js", express.static('./script.js'))

let users = []

app.get('/api/user', (request, response) => {
    response.json(users)
})
app.post('/api/user', (request, response) => {
    users.push({
        id: users.length + 1,
        name: request.body.name,
        birthDate: request.body.birthDate,
        email: request.body.email,
        cpf: request.body.cpf,
        createdAt: new Date(),
        updatedAt: new Date(),
    })
})

app.listen(3000, () => {
    console.log(`Servidor está rodando em http://localhost:3000`)
})