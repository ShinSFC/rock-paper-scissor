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
    humanChoice = humanChoice.toLowerCase() // this works
    console.log(humanChoice)
    console.log(computerChoice)
    if (humanChoice == computerChoice) {
        console.log("Tie!") // this works
    } else if ((humanChoice == "rock") && (computerChoice == "paper")) {
        console.log("You lose!")
    } else if ((humanChoice == "rock") && (computerChoice == "scissors")) {
        console.log("You win!")
    } else if ((humanChoice == "paper") && (computerChoice == "scissors")) {
        console.log("You Lose!")
    } else if ((humanChoice == "paper") && (computerChoice == "rock")) {
        console.log("You win!") // works till this point
    } else if ((humanChoice == "scissors") && (computerChoice == "paper")) {
        console.log("You lose!")
    } else if ((humanChoice == "scissors") && (computerChoice == "rock")) {
        console.log("You win!")
    }
}

const humanSelection = getHumanChoice() //this works
const computerSelection = getComputerChoice() //this works

playRound(humanSelection, computerSelection)



