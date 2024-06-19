const computerChoiceArray = [
    "rock",
    "paper",
    "scissors",
]

function getComputerChoice() {
    return computerChoiceArray[Math.floor(Math.random() * computerChoiceArray.length)]
}

let computerChoice = getComputerChoice()
// console.log(computerChoice) this works

function getHumanChoice() {
    return prompt("Type rock, paper or scissor:")
}

let humanChoice = getHumanChoice() //this invokes getHumanChoice()
// console.log(humanChoice)

var humanScore = 0
var computerScore = 0

function playRound(humanChoice, computerChoice) {
    getHumanChoice()
    console.log(humanChoice)
}

