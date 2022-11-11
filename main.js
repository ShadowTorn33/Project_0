const restBtn=document.querySelector('.sleepiness')
const feedPetBtn=document.querySelector('.hunger')
const playBtn=document.querySelector('.boredom')
const age=document.querySelector('#age')
const hungerLevel=document.querySelector('#hunger')
const boredomLevel=document.querySelector('#boredom')
const sleepinessLevel=document.querySelector('#sleepiness')

const myPet = {
    hunger: 0,
    boredom: 0,
    sleepiness: 0,
    lights: true,
    petsAge: 0
}

 


function changeAge() {
    myPet.petsAge += 1
    myPet.hunger += 1
    myPet.sleepiness += 1
    myPet.boredom += 1
    age.textContent = myPet.petsAge
    hungerLevel.textContent = myPet.hunger
    sleepinessLevel.textContent = myPet.sleepiness
    boredomLevel.textContent = myPet.boredom
}

setInterval(changeAge,1000)





