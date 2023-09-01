//randomly returns rock, paper, or scissors
function getComputerChoice() {
    //generate a random number between 0 and 100
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    if(randomNumber <= 33) {
        return 'rock';
    } else if(randomNumber <= 66) {
        return 'paper';
    } else {
        return 'scissors'
    }

}

//create a function that takes two parameters 'playerSelection' and 'computerSelection'
function playRound(playerSelection, computerSelection) {
    let winner;

    if((typeof playerSelection) !== 'string') {
        return `Invalid input. Please pick 'rock', 'paper', or 'scissors' to play this game.`;
    } else {
        playerSelection = playerSelection.toLowerCase();
    }

    if(playerSelection === computerSelection) {
        winner = "Tie";
    } else if(playerSelection === 'rock') {
        if(computerSelection === 'scissors') {
            winner = playerSelection;
        } else {
            winner = computerSelection;
        }
    } else if(playerSelection === 'scissors') {
        if(computerSelection === 'rock') {
            winner = computerSelection;
        } else {
            winner = playerSelection;
        }
    } else if(playerSelection === 'paper') {
        if(computerSelection === 'rock') {
            winner = playerSelection;
        } else {
            winner = computerSelection;
        }
    } else {
        return `Invalid input. Please pick 'rock', 'paper', or 'scissors' to play this game.`;
    }

    if(winner === "Tie") {
        return `${playerSelection} and ${computerSelection} ties!`;
    } else if(winner === playerSelection) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if(winner === computerSelection) {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}