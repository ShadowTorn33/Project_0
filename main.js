const restBtn=document.querySelector('#lightbulb')
const feedPetBtn=document.querySelector('.hunger')
const playBtn=document.querySelector('.play-with-me')
const startGame=document.querySelector('#start-game')

const age=document.querySelector('#age')
const hungerLevel=document.querySelector('#hunger')
const boredomLevel=document.querySelector('#boredom')
const sleepinessLevel=document.querySelector('#sleepiness')

const form = document.querySelector('#form')

const myPet = {
    hunger: 0,
    boredom: 0,
    sleepiness: 0,
    lights: true,
    petsAge: 0
}

const timer = setInterval(changeAge,5000)
    

function changeAge() {
    myPet.petsAge += 2
    myPet.hunger += 1
    myPet.sleepiness += 1
    myPet.boredom += 1
    age.textContent = myPet.petsAge
    hungerLevel.textContent = myPet.hunger
    sleepinessLevel.textContent = myPet.sleepiness
    boredomLevel.textContent = myPet.boredom
        if(myPet.hunger === 10 || myPet.sleepiness === 10 || myPet.boredom === 10) {
            clearInterval(timer)
            return alert("You killed the motha fker")
        }
    }
    
const petRestTime = () => {
    if(myPet.boredom > 0){
    myPet.sleepiness -= 1
    sleepinessLevel.textContent = myPet.sleepiness
    }
}

const petFeedTime = () => {
    if(myPet.hunger > 0) {
    myPet.hunger -= 1
    hungerLevel.textContent = myPet.hunger 
    }
}
const petPlayTime = () => {
    if(myPet.boredom > 0) {
    myPet.boredom -= 1
    boredomLevel.textContent = myPet.boredom
    }
}
 
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const h1 = document.createElement('h1');
    const input = document.querySelector('#input-name')
    h1.textContent=input.value;
    document.querySelector('div').appendChild(h1)
    event.target.reset()
})






startGame.addEventListener('click',changeAge)
restBtn.addEventListener('click', petRestTime)
feedPetBtn.addEventListener('click', petFeedTime)
playBtn.addEventListener('click', petPlayTime)









