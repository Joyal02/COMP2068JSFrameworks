const prompt = require('prompt');

// Function to generate computer's selection
function generateComputerSelection() {
    const randomNum = Math.random();
    if (randomNum <= 0.34) {
        return 'PAPER';
    } else if (randomNum <= 0.67) {
        return 'SCISSORS';
    } else {
        return 'ROCK';
    }
}

// Function to determine the winner
function determineWinner(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        return "It's a tie";
    } else if (
        (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
        return 'User Wins';
    } else {
        return 'Computer Wins';
    }
}

// Prompt user to select ROCK, PAPER, or SCISSORS
prompt.start();
prompt.get(['userSelection'], function (err, result) {
    if (err) {
        console.error(err);
        return;
    }

    const userSelection = result.userSelection.toUpperCase();
    const computerSelection = generateComputerSelection();

    console.log('User Selection:', userSelection);
    console.log('Computer Selection:', computerSelection);

    const outcome = determineWinner(userSelection, computerSelection);
    console.log('Outcome:', outcome);
});
