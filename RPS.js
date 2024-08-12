const computerChoiceArray = [
    "rock",
    "paper",
    "scissors",
];

function getComputerChoice() {
    return computerChoiceArray[Math.floor(Math.random() * computerChoiceArray.length)];
} 

function getHumanChoice() {
    return prompt("Type rock, paper or scissors:");
} 

// function playGame(humanChoice) {

    function playRound(humanChoice) {
        // let humanChoice = getHumanChoice(); // this works
        let computerChoice = getComputerChoice();
        humanChoice = humanChoice.toLowerCase();
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

        console.log(`My score is ${humanScore}`)
        console.log(`Computer score is ${computerScore}`)
    }   

    let humanScore = 0;
    let computerScore = 0;

    // [1, 2, 3, 4, 5].forEach(playRound); Removed per instructions
// }

const game = document.querySelector("div");
const paperBtn = document.createElement("button");
const rockBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

game.appendChild(paperBtn);
game.appendChild(rockBtn);
game.appendChild(scissorsBtn);

paperBtn.textContent = "Paper";
rockBtn.textContent = "Rock";
scissorsBtn.textContent = "Scissors";

paperBtn.addEventListener("click", () => {
    playRound("paper");
});
rockBtn.addEventListener("click", () => {
    playRound("rock");
});
scissorsBtn.addEventListener("click", () => {
    playRound("scissors");
});

// playGame() // this is from 1st iteration


