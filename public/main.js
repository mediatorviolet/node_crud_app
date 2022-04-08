"use strict"

const create = document.querySelector("#form-create")
const createName = document.querySelector('input[name="create-name"]')
const createPseudo = document.querySelector('input[name="create-pseudo"]')

create.addEventListener('submit', async (e) => {
    e.preventDefault()
    await fetch('/people', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: createName.value,
            pseudo: createPseudo.value
        })
    })
})

const deleteBtn = document.querySelectorAll("button[name='delete']")

deleteBtn.forEach(d => {
    d.addEventListener('click', async (e) => {
        e.preventDefault()
        await fetch(`/people/${d.id}`, {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' }
        })
    })
})