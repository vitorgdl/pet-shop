const apiURL = "http://localhost:3000"

async function deleteAnimal(animalId) {
    const deleteResult = await fetch(`${apiURL}/api/animais/${animalId}`, {
        method: "DELETE",
    })

    const deleteResultJson = await deleteResult.json()

    if (deleteResultJson.deleteAnimalCount < 1) {
        console.error("Nenhum animal foi deletado")
        return
    }

    const animalToBeDeleted = document.getElementById(`animal-id-${animalId}`)
    animalToBeDeleted.remove()

    return deleteResultJson

}


async function getAnimalList() {
    const response = await fetch('http://localhost:3000/api/animais')
    const data = await response.json()
    const animal = document.querySelectorAll('tr > td')

    animal.forEach(td => {
        const tr = td.parentNode
        tr.remove()
    })
    const animalListContainer = document.getElementById('animal-list-container')

    data.forEach(animal => {
        const newAnimalTr = document.createElement('tr')

        newAnimalTr.id = `animal-id-${animal.id}`
        newAnimalTr.innerHTML = `
      <td>${animal.name}</td>
      <td>${animal.breed}</td>
      <td>${animal.age}</td>
      <td>${animal.weight}</td>
      <td>${animal.owner}</td>
      <td>${animal.vaccinated}</td>
      <td class="register-actions">
            <button
            class="delete-button"
            type="button"
            onclick="deleteAnimal(${animal.id})"
            >
            Excluir
            </button>
          </td>
    `

        animalListContainer.appendChild(newAnimalTr)
    })

}

getAnimalList()

const createAnimalButton = document.getElementById('create-animal-button')

createAnimalButton.addEventListener('click', async(event) => {
    event.preventDefault()

    const name = document.querySelector('input[name="name"]').value
    const breed = document.querySelector('input[name="breed"]').value
    const age = document.querySelector('input[name="age"]').value
    const weight = document.querySelector('input[name="weight"]').value
    const owner = document.querySelector('input[name="owner"]').value
    const vaccinated = document.querySelector('input[name="vaccinated"]').value

    await fetch('http://localhost:3000/api/animais', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            breed,
            age,
            weight,
            owner,
            vaccinated,
        })
    })

    await getAnimalList()
})