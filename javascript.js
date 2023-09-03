//randomly returns rock, paper, or scissors
function getComputerChoice() {
    //generate a random number between 0 and 100
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    if(randomNumber <= 33) {
        return 'rock';
    } else if(randomNumber <= 66) {
        return 'paper';
    } else {
        return 'scissors';
    }

}

//takes two arguments (one from the player and one from the computer) and plays one round of the game Rock, Paper, Scissors and returns the winner or tie
function playRound(playerSelection, computerSelection) {
    let winner;

/*
    if((typeof playerSelection) !== 'string') {
        return `Invalid input. Please pick 'rock', 'paper', or 'scissors' to play this game.`;
    } else {
        playerSelection = playerSelection.toLowerCase();
    }
*/
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

    //capitalize the first letter of the word
    const firstLetter1 = playerSelection.charAt(0).toUpperCase();
    const firstLetter2 = computerSelection.charAt(0).toUpperCase();
    let capPlayerSel = firstLetter1 + playerSelection.slice(1);
    let capCompSel = firstLetter2 + computerSelection.slice(1);

    //return different messages depending on the winner
    if(winner === "Tie") {
        return `${capPlayerSel} and ${capCompSel} ties!`;
    } else if(winner === playerSelection) {
        return `You win! ${capPlayerSel} beats ${capCompSel}`;
    } else {
        return `You lose! ${capCompSel} beats ${capPlayerSel}`;
    }
}

/*
//keeps track of score and output result after playing 5 rounds of Rock, Paper, Scissors
function game() {
    let win = 0;
    let lose = 0;
    let tie = 0;

    let playerSelection;
    let computerSelection;
    let roundMessage;

    for(let i = 0; i < 5; i++) {
        //prompt player for an input and save into playerSelection
        playerSelection = prompt("Please input 'rock', 'paper', or 'scissors' to start the game", '');
        computerSelection = getComputerChoice();

        roundMessage = playRound(playerSelection, computerSelection);

        //search roundMessage, if input is 'Invalid', play round again
        if(roundMessage.search('Invalid') >= 0) {
            i--;
        } else if(roundMessage.search('win') >= 0) {
            win += 1;
        } else if(roundMessage.search('lose') >= 0) {
            lose += 1;
        } else {
            tie += 1;
        }

        console.log(roundMessage);
    }
    
    //check the scores and output the results
    if(win < lose) {
        console.log(`You lose the game! You lost ${lose} out of 5 rounds with ${tie} ties`);
    } else if(win > lose) {
        console.log(`You win the game! You won ${win} out of 5 rounds with ${tie} ties`);
    }
    else {
        console.log('You tie!');
    }
}*/

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    const buttonID = button.id;
    button.addEventListener('click', () => {
        const result = playRound(buttonID, getComputerChoice());
        console.log(result);
    });
});