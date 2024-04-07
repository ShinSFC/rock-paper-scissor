const playerSelection = "rock";
let myArray = [
    "Rock",
    "Paper",
    "Scissors",
]

function getComputerChoice() {
    return myArray[Math.floor(Math.random() * myArray.length)]
}

const computerSelection = getComputerChoice()
console.log(computerSelection)

function playRound( playerSelection, computerSelection) {
    return "You Lose! Paper beats Rock" 
}