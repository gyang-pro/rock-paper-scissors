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

    //Capitalize the first letter of the word
    const firstLetter1 = playerSelection.charAt(0).toUpperCase();
    const firstLetter2 = computerSelection.charAt(0).toUpperCase();
    let capPlayerSel = firstLetter1 + playerSelection.slice(1);
    let capCompSel = firstLetter2 + computerSelection.slice(1);


    if(winner === "Tie") {
        return `${capPlayerSel} and ${capCompSel} ties!`;
    } else if(winner === playerSelection) {
        return `You win! ${capPlayerSel} beats ${capCompSel}`;
    } else if(winner === computerSelection) {
        return `You lose! ${capCompSel} beats ${capPlayerSel}`;
    }
}

//create function called 'game'
//create variable called score and set it to 0
//create variable called playerSelection
//create variable called computerSelection
//create variable called roundMessage
//create a loop for 5 rounds of the game
    //prompt player for an input
    //set computerSelection to a random outut from getComputerChoice()
    //playRound with playerSelection and computerSelection and put result into roundMessage
    //search roundMessage:
        //if you win, add 1 to score and output roundMessage
        //if you lose, minus 1 from score and output roundMessage
//if score < 2, player lose
//else if score > 2, player win
//else player ties