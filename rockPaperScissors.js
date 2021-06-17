game();
 
// game function
function game() {
    //init variables for result tallies
    let computerScore = 0;
    let playerScore = 0;
    //loop till p or c wins 5 times
    while ((computerScore<5)||(playerScore<5)) {

        let roundResult = roundPlay(userClick);
        //display each round result with console
        console.log(roundResult);
        if (roundResult === 'Win') {
            playerScore += 1;
        } else if (roundResult === 'Lose') {
            computerScore += 1;
        };

        //display end result on console
        if (playerScore > 4) {
            return console.log('You have won the game');
        } else if (computerScore > 4) {
            return console.log('You have lost the game');
        };
            
    };

};

//user click function
function userClick() {
    

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
    

// roundPlay function 
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
    
