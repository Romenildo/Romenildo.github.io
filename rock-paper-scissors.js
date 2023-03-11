
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const posibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice

posibleChoices.forEach(p => p.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateRandomComputerChoice()
    resultDisplay.innerHTML = getResult()
}))

const generateRandomComputerChoice = () => {
    const randomNumber = Math.floor(Math.random()* 3 + 1)
    switch (randomNumber ) {
        case 1:
            computerChoice = 'rock'
            break;
        case 2:
            computerChoice = 'paper'
            break;
        case 3:
            computerChoice = 'scissors'
            break;
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

const getResult = () => {
    if(computerChoice === userChoice){
        return "It's a draw!"
    }
    if(computerChoice === 'rock'){
        return userChoice === 'paper'?'you Win!': 'computer Win!'
    }
    if(computerChoice === 'paper'){
        return userChoice === 'scissors'?'you Win!': 'computer Win!'
    }
    if(computerChoice === 'scissors'){
        return userChoice === 'rock'?'you Win!': 'computer Win!'
    }
}