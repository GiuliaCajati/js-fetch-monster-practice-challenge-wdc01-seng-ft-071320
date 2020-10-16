const URL = "http://localhost:3000/monsters"

document.addEventListener("DOMContentLoaded", () => {
  fetchMonsters()
  monsterForm()
})

function fetchMonsters() {
  fetch(URL)
  .then(rsp => rsp.json())
  .then(monsterArray => {
    monsterArray.forEach(monster => renderMonster(monster))
  });
}

function renderMonster(monster){
  let monsterContainer = document.getElementById("monster-container");

  let nameH2 = document.createElement("h2")
  nameH2.innerText = monster.name
  let ageH4 = document.createElement("h4")
  ageH4.innerText = `Age: ${monster.age}`
  let pDescription = document.createElement("p")
  pDescription.innerText = `Bio: ${monster.description}`


  monsterContainer.append(nameH2, ageH4, pDescription)

}

function monsterForm(monster){
  let createMonsterForm = document.getElementById("create-monster")
  let form = document.createElement("form")
  form.setAttribute = "monster-form"
  let nameEl = document.createElement("input")
  nameEl.setAttribute = ("id", "name")
  nameEl.setAttribute = ("placeholder", "name")
  let ageEl = document.createElement("input")

  let descriptionEl = document.createElement("input")
  let formButton = document.createElement("button")
  formButton.innerText = "Create Monster"

  createMonsterForm.append(form)
  form.append(nameEl, ageEl, descriptionEl, formButton)
}