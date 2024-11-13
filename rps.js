function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const chosen = choice[Math.floor(Math.random() * choice.length)];
    return chosen;
}

function getHumanChoice() {
    const choice = prompt("Please enter a choice (rock, paper, or scissors):").toLowerCase();
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        console.log(`computerChoice chose: ${computerChoice}`);
        console.log(`You chose: ${humanChoice}`);
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            console.log("You win!");
            humanScore += 1;
        } else {
            console.log("Computer wins!");
            computerScore += 1;
        }
        console.log(`Human Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }

    const counter = parseInt(prompt("Enter number of rounds to play:"), 10);
    for (let i = 0; i < counter; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore) {
        console.log(`Human Wins. Score = ${humanScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Computer Wins. Score = ${computerScore}`);
    } else {
        console.log(`It's a Tie: Human Score = ${humanScore}, Computer Score = ${computerScore}`);
    }
}

playGame();
