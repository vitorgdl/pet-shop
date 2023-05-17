fetch('http://localhost:3000/api/user')
  .then(response => response.json())
  .then(data => {
    const userListContainer = document.getElementById('user-list-container')

    data.forEach(user => {
        const newUserDiv = document.createElement('div')
        
        newUserDiv.id = user.id
        newUserDiv.innerHTML = `
          <div>${user.name}</div>
          <div>${user.birthDate}</div>
          <div>${user.email}</div>
          <div>${user.cpf}</div>
          <div>${user.createdAt}</div>
          <div>${user.updatedAt}</div>
        `

        userListContainer.appendChild(newUserDiv)
    })
  })

const createUserButton = document.getElementById('create-user-button')

createUserButton.addEventListener('click', async (event) => {
    event.preventDefault()

    await fetch('http://localhost:3000/api/user', { 
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            name: 'Frontend Name',
            birthDate: '01/01/2001',
            email: 'john@example.com',
            cpf: '09876543201',
        })
    })
})