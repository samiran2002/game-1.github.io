const computerChoicedisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay  = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice 
let computerChoice
let result
possibleChoices.forEach( possibleChoice => possibleChoice.addEventListener('click',(event)=>{
    userChoice = event.target.id
    userChoiceDisplay.innerHTML = userChoice

    generateComputerChoice();
    getResult()
}));

function generateComputerChoice(){
    const randomNumber =Math.floor( Math.random() * 3)
    if (randomNumber === 0){
        computerChoice = 'rock'
    }
    if (randomNumber === 1){
        computerChoice = 'scissors'
    }
    if (randomNumber === 2){
        computerChoice = 'paper'
    }
    computerChoicedisplay.innerHTML= computerChoice
}
function getResult(){
    if (computerChoice === userChoice){
        result = "It's a draw !" 
    }
    if (computerChoice === 'rock' && userChoice === 'paper'){
        result = "You win !" 
    }
    if (computerChoice === 'rock' && userChoice === 'scissors'){
        result = "You lost !" 
    }
    if (computerChoice === 'paper' && userChoice === 'scissors'){
        result = "You win !" 
    }
    if (computerChoice === 'paper' && userChoice === 'rock'){
        result = "You lost !" 
    }
    if (computerChoice === 'scissors' && userChoice === 'rock'){
        result = "You win !" 
    }
    if (computerChoice === 'scissors' && userChoice === 'paper'){
        result = "You lost !" 
    }
    resultDisplay.innerHTML = result
} 