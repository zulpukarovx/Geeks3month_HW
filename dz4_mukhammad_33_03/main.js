const button = document.querySelector('.btn')
let profiles = document.querySelector('.profiles')
const consoleBtn = document.querySelector('.console-btn')

consoleBtn.addEventListener('click', ()=>{
    const request = new XMLHttpRequest()
    request.open('GET', 'fake-people.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()

    request.addEventListener('load', ()=>{
        const data = JSON.parse(request.response)
        console.log(data)
    })
})


button.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'persons.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()

    request.addEventListener('load', () => {
        const characters = JSON.parse(request.response)
        profiles.innerHTML = ''

        characters.forEach((character) => {
            const profile = document.createElement('div')
            profile.setAttribute('class', 'characterProfile')

            profile.innerHTML = `
                <div class="avatar">
                    <img src="${character.person_photo}">
                </div
                <h3>Name: ${character.name}</h3>
                <p>Age: ${character.age}</p>
            `
            profiles.append(profile)
        })
    })
})
