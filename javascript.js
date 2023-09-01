//randomly returns rock, paper, or scissors
function getComputerChoice() {
    //create a variable called randomNumber
    //initialize it using a random number generator
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    //if randomNumber <= 33, return rock
    if(randomNumber <= 33) {
        return 'rock';
    }
    //else if randomNumber <=66, return paper
    else if(randomNumber <= 66) {
        return 'paper';
    }
    //else return scissors
    else {
        return 'scissors'
    }

}

//create a function that takes two parameters 'playerSelection' and 'computerSelection'
function playRound(playerSelection, computerSelection) {
    //create variable called winner
    let winner;
    //turn playerSelection to all lower-case
    playerSelection = playerSelection.toLowerCase();
    //if playerSelection and computerSelection are same, winner = "Tie"
    if(playerSelection === computerSelection) {
        winner = "Tie";
    }
    //else if playerSelction = rock:
    else if(playerSelection === 'rock') {
        //if computerSelection = scissors, winner = playerSelection
        if(computerSelection === 'scissors') {
            winner = playerSelection;
        }
        //if computerSelection = paper, winner = computerSelection
        else {
            winner = computerSelection;
        }
    }
    //else if playerSelection = scissors:
    else if(playerSelection === 'scissors') {
        //if computerSelection = rock, winner = computerSelection
        if(computerSelection === 'rock') {
            winner = computerSelection;
        }
        //if computerSelection = paper, winner = playerSelection
        else {
            winner = playerSelection;
        }
    }
    //else if playerSelection = paper:
    else if(playerSelection === 'paper') {
        //if computerSelection = rock, winner = playerSelection
        if(computerSelection === 'rock') {
            winner = playerSelection;
        }
        //if computerSelection = scissors, winner = computerSelection
        else {
            winner = computerSelection;
        }
    }
    else {
        return `Invalid input. Please pick 'rock', 'paper', or 'scissors' to play this game.`;
    }

    //if winner = "Tie", output "playerSelection and computerSelection ties!"
    if(winner === "Tie") {
        return `${playerSelection} and ${computerSelection} ties!`;
    }
    //else if winner = playerSelection, output "You win! playerSelection beats computerSelection"
    else if(winner === playerSelection) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    //else if winner = computerSelection, output "You lose! computerSelection beats playerSelection"
    else if(winner === computerSelection) {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}