const computerChoiceArray = [
    "Rock",
    "Paper",
    "Scissors",
]

function getComputerChoice() {
    return computerChoiceArray[Math.floor(Math.random() * computerChoiceArray.length)]
}

let computerSelection = getComputerChoice()
// console.log(computerSelection) this works

function getHumanChoice() {
    return prompt("Type rock, paper or scissor:")
}

let humanChoice = getHumanChoice()
console.log(humanChoice)

// function playRound( playerSelection, computerSelection) {
//     if (playerSelection == computerChoice) {
//         console.log( "You tie!")
//     elsif (playerSelection == 
// }