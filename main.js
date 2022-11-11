const restBtn=document.querySelector('.sleepiness')
const feedPetBtn=document.querySelector('.hunger')
const playBtn=document.querySelector('.boredom')
const age=document.querySelector('#age')

const myPet = {
    hunger: 0,
    boredom: 0,
    sleepiness: 0,
    lights: true,
    petsAge: 0
}

 


function changeAge() {
    myPet.petsAge += 1
    age.textContent = myPet.petsAge
}

setInterval(changeAge,1000)





