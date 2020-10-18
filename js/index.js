const URL = "http://localhost:3000/monsters"

document.addEventListener("DOMContentLoaded", () => {
  fetchMonsters()
  monsterForm()
})

// `${URL}/?_limit=10`

function fetchMonsters() {
  fetch(`${URL}?_limit=50`) // show first 50
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

function monsterForm(){
  let createMonsterForm = document.getElementById("create-monster")
  let form = document.createElement("form")
  form.setAttribute = "monster-form"
  let nameEl = document.createElement("input")
  nameEl.id = "name"
  
  let ageEl = document.createElement("input")
  ageEl.id = "age"

  let descriptionEl = document.createElement("input")
  descriptionEl.id = "description"

  let formButton = document.createElement("button")
  formButton.innerText = "Create Monster"
  formButton.addEventListener("click", () => {
    event.preventDefault();
    addMonster();
    console.log("does this work");
  })

  createMonsterForm.append(form)
  form.append(nameEl, ageEl, descriptionEl, formButton)

}

function addMonster(){
debugger
  let newName = document.querySelector("input#name").value
  let newAge = document.querySelector("input#age").value
  let newDescription = document.querySelector("input#description").value

  let requestPackage = {};
  requestPackage.method = "POST";
  requestPackage.headers = {'Content-Type': 'application/json'};
  requestPackage.body = JSON.stringify({
    "name": newName,
    "age": newAge, 
    "description": newDescription
    });

    fetch(URL, requestPackage)
    .then(rsp => rsp.json())
    .then(newMonster => renderMonster(newMonster));

}