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
function game() {
    //create variables called win, lose, and tie and set them to 0
    let win = 0;
    let lose = 0;
    let tie = 0;
    //create variable called playerSelection
    let playerSelection;
    //create variable called computerSelection
    let computerSelection;
    //create variable called roundMessage
    let roundMessage;
    //create a loop for 5 rounds of the game
    for(let i = 0; i < 5; i++) {
        //prompt player for an input and save into playerSelection
        playerSelection = prompt("Please input 'rock', 'paper', or 'scissors' to start the game", '');
        //set computerSelection to a random outut from getComputerChoice()
        computerSelection = getComputerChoice();
        //playRound with playerSelection and computerSelection and put result into roundMessage
        roundMessage = playRound(playerSelection, computerSelection);

        //search roundMessage, if input is 'Invalid', play round again
        if(roundMessage.search('Invalid') >= 0) {
            i--;
        }
        //if you win, add 1 to win
        else if(roundMessage.search('win') >= 0) {
            win += 1;
        }
        //if you lose, add 1 to lose
        else if(roundMessage.search('lose') >= 0) {
            lose += 1;
        }
        else {
            tie += 1;
        }

        console.log(roundMessage);
    }
    //if win < lose, you lose
    if(win < lose) {
        console.log(`You lose the game! You lost ${lose} out of 5 rounds with ${tie} ties`);
    }
    //else if win > lose, you win
    else if(win > lose) {
        console.log(`You win the game! You won ${win} out of 5 rounds with ${tie} ties`);
    }
    else {
        console.log('You tie!');
    }
}