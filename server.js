const express = require("express")
const { User } = require("./models")

const app = express()
app.use(express.json())

app.use("/home", express.static("./index.html"))
app.use("/index.css", express.static("./index.css"))
app.use("/script.js", express.static("./script.js"))

app.get("/api/user", async (request, response) => {
  const users = await User.findAll()

  response.json(users)
})
app.post("/api/user", async (request, response) => {
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

// serviços => serviceTypes
//   nome => name
//   preço => price
//   duração => duration

// animais => animals
//   nome => name
//   raça => breed
//   idade => age
//   peso => weight
//   nome do dono => owneName
//   é vacinado => isVacinated

// atendimentos => services
//   serviço => serviceType
//   animal => animal
//   data agendada => scheduledDate

app.listen(3000, () => {
  console.log(`Servidor está rodando em http://localhost:3000`)
})
