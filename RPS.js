const computerChoiceArray = [
    "Rock",
    "Paper",
    "Scissors",
]

function getComputerChoice() {
    return computerChoiceArray[Math.floor(Math.random() * computerChoiceArray.length)]
}

let computerSelection = getComputerChoice()
console.log(computerSelection)

// function playRound( playerSelection, computerSelection) {
//     if (playerSelection == computerChoice) {
//         console.log( "You tie!")
//     elsif (playerSelection == 
// }