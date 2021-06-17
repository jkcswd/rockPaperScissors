
// game function
function game() {
    let computerScore = 0;
    let playerScore = 0;
    const buttons = document.querySelectorAll('button');
    const computerScoreDisplay = document.querySelector('.computer-score');
    const playerScoreDisplay = document.querySelector('.player-score');

    buttons.forEach(button => button.addEventListener('click', () => {
        let roundResult = roundPlay(button.textContent.toLowerCase());
        console.log(roundResult);
        if (roundResult === 'Win') {
            playerScore += 1;
            playerScoreDisplay.textContent = `Player Score: ${playerScore}`
        } else if (roundResult === 'Lose') {
            computerScore += 1;
            computerScoreDisplay.textContent = `Computer Score: ${computerScore}`
        };
        if (playerScore > 4) {
            console.log('You have won the game');
            playerScoreDisplay.textContent = `Player ${playerScore}:${computerScore} Computer`
            computerScoreDisplay.textContent = 'Player Wins! Refresh page to play again!'
        } else if (computerScore > 4) {
            console.log('You have lost the game');
            playerScoreDisplay.textContent = `Player ${playerScore}:${computerScore} Computer`
            computerScoreDisplay.textContent = 'Computer Wins! Refresh page to play again!'
        };
    }));
};


// computerPlay function (works as intended)
function computerPlay() {
    // assign variable using random number generator 0-1 
    let randomNumber = Math.random();
    //use conditional statement with 0-0.3333 = rock 0.3333-0.6666= paper 0.6666-1= scissors 
    //return strings of rock, paper or scissors.
    if (randomNumber <= 0.3333) {
        return 'rock';
    } else if ((randomNumber > 0.3333) && (randomNumber <= 0.6666)) {
        return 'paper';
    } else {
        return 'scissors';
    }
};
    

// roundPlay function (works as intended)
function roundPlay(playerSelection) {
    //take computerPlay return value
    let computerChoice = computerPlay();
    //compare the values and return winner of round
    if (computerChoice === playerSelection) {
        return 'Draw';
    } else if (computerChoice === 'rock'){
        if (playerSelection === 'paper'){
            return 'Win';
        } else {return 'Lose';}
    } else if (computerChoice === 'scissors') {
        if (playerSelection === 'rock'){
            return 'Win';
        }else {return 'Lose';}
    } else {
        if (playerSelection === 'scissors'){
            return 'Win';
        }else {return 'Lose';}
    }
};
    
