// game function
function game() {
    //init variables for result tallies
    let computerScore = 0;
    let playerScore = 0;
    //loop till p or c wins 5 times
    while ((computerScore<5)||(playerScore<5)) {
        let roundResult = roundPlay();
        //display each round result with console
        console.log(roundResult);
        if (roundResult === 'Win') {
            playerScore += 1;
        } else if (roundResult === 'Lose') {
            computerScore += 1;
        }else continue;

        //display end result on console
        if (playerScore > 4) {
            console.log('You have won the game');
        } else if (computerScore > 4) {
            console.log('You have lost the game');
        }else continue;
    };

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
    

// roundPlay function (working as intended)
function roundPlay() {
    //take user input and turn to lower case rock paper or scissors
    let userInput = prompt('Please enter "rock", "paper" or "scissors":');
    userInput = userInput.toLowerCase();
    //check if input is rock,scissors,paper
    let boolCheck = true;
    if ((userInput === 'rock') || (userInput === 'paper') || (userInput === 'scissors')) {
        boolCheck = false;
    }
    while(boolCheck) {
        userInput = prompt('That is not "rock","paper" or "scissors". Please enter again:');
        userInput = userInput.toLowerCase();
        if ((userInput === 'rock') || (userInput === 'paper') || (userInput === 'scissors')) {
            boolCheck = false;
        }
    }
    //take computerPlay return value
    let computerChoice = computerPlay();
    //compare the values and return winner of round
    if (computerChoice === userInput) {
        return 'Draw';
    } else if (computerChoice === 'rock'){
        if (userInput === 'paper'){
            return 'Win';
        } else {return 'Lose';}
    } else if (computerChoice === 'scissors') {
        if (userInput === 'rock'){
            return 'Win';
        }else {return 'Lose';}
    } else {
        if (userInput === 'scissors'){
            return 'Win';
        }else {return 'Lose';}
    }
};
    
