let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const userGuesses = document.querySelector('.guesses');
const lastGuess = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi'); 
const resultOver = document.querySelector('.resultParas'); 

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1;
let playGame = true;

if(playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    // to check if a guess is valid or not.
    if(isNaN(guess)) {
        alert("Please enter a valid number");
    } else if(guess < 1) {
        alert("Please enter a number more than 1");
    } else if(guess > 100) {
        alert("Please enter a number less than 100");
    } else {
        prevGuess.push(guess);

        if(numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over! Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess) {
    // to check if guess is ok .
    if(guess === randomNumber) {
        displayMessage(`You guessed it right`)
        endGame();
    } else if(guess < randomNumber) {
        displayMessage(`Number is too low!`);
    } else if(guess > randomNumber) {
        displayMessage(`Number is too high!`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    userGuesses.innerHTML += ` ${guess} `;
    numGuess++;
    lastGuess.innerHTML = `${11 - numGuess}`;

}

function displayMessage(message) {
    // this relate to dom work
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<h2 id = "newGame" > Start new Game. </h2>';
    resultOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        userGuesses.innerHTML = '';
        lastGuess.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        resultOver.removeChild(p);
        
        playGame = true;
    })
}