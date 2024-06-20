const computerChoiceArray = [
    "rock",
    "paper",
    "scissors",
];

function getComputerChoice() {
    return computerChoiceArray[Math.floor(Math.random() * computerChoiceArray.length)];
} //this works

function getHumanChoice() {
    return prompt("Type rock, paper or scissor:");
} // this works

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase(); // this works
    console.log(`Human: ${humanChoice}`);
    console.log(`Computer: ${computerChoice}`);
    if (humanChoice == computerChoice) {
        console.log("Tie!"); // this works
    } else if ((humanChoice == "rock") && (computerChoice == "paper")) {
        console.log("You lose! Paper beats rock!");
        ++computerScore;
    } else if ((humanChoice == "rock") && (computerChoice == "scissors")) {
        console.log("You win! Rock beats scissors!");
        ++humanScore; 
    } else if ((humanChoice == "paper") && (computerChoice == "scissors")) {
        console.log("You Lose! Scissors beats paper!");
        ++computerScore;
    } else if ((humanChoice == "paper") && (computerChoice == "rock")) {
        console.log("You win! Paper beats rock!"); 
        ++humanScore;
    } else if ((humanChoice == "scissors") && (computerChoice == "rock")) {
        console.log("You lose! Rock beats scissors!");
        ++computerScore;
    } else if ((humanChoice == "scissors") && (computerChoice == "paper")) {
        console.log("You win! Scissors beats paper!");
        ++humanScore;
    }
}

const humanSelection = getHumanChoice(); //this works
const computerSelection = getComputerChoice(); //this works

playRound(humanSelection, computerSelection);
console.log(`My score is ${humanScore}`); 
console.log(`Computer score is ${computerScore}`);



