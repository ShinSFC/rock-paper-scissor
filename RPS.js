const computerChoiceArray = [
    "rock",
    "paper",
    "scissors",
]

function getComputerChoice() {
    return computerChoiceArray[Math.floor(Math.random() * computerChoiceArray.length)]
} //this works

function getHumanChoice() {
    return prompt("Type rock, paper or scissor:")
} // this works

var humanScore = 0
var computerScore = 0

function playRound(humanChoice, computerChoice) {
    getHumanChoice()
    console.log(humanChoice)
}



