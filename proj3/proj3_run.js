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

// Another way of writing the above code which is more readable, and production-type code is : 
// Select form and all required DOM elements
const form = document.querySelector('.form');
const userInput = document.querySelector('#guessField');
const guessesText = document.querySelector('.guesses');
const remainingText = document.querySelector('.lastResult');
const messageText = document.querySelector('.lowOrHi');
const resultContainer = document.querySelector('.resultParas');

// Constant for maximum allowed attempts
const MAX_ATTEMPTS = 10;

// Variables to store game state
let randomNumber;   // stores the random number to guess
let attempts;       // number of attempts used
let gameActive;     // flag to control if game is running or not

// Initialize the game when page loads
initGame();

// Listen for form submission (better than click)
form.addEventListener('submit', handleSubmit);


// Function to initialize/reset the game
function initGame() {
    // Generate random number between 1 and 100
    randomNumber = Math.floor(Math.random() * 100) + 1;

    // Reset attempts count
    attempts = 0;

    // Mark game as active
    gameActive = true;

    // Clear previous guesses display
    guessesText.textContent = '';

    // Reset remaining attempts display
    remainingText.textContent = MAX_ATTEMPTS;

    // Clear any previous message
    messageText.textContent = '';

    // Enable input field (in case it was disabled after game over)
    userInput.disabled = false;
}


// Function that runs when user submits a guess
function handleSubmit(e) {
    // Prevent page reload (default form behavior)
    e.preventDefault();

    // If game is over, do nothing
    if (!gameActive) return;

    // Convert input value to number
    const guess = Number(userInput.value);

    // Clear input field after taking value
    userInput.value = '';

    // Validate the guess; stop if invalid
    if (!isValidGuess(guess)) return;

    // Increase attempt count
    attempts++;

    // Update UI with current guess and remaining attempts
    updateUI(guess);

    // Check if guess is correct
    if (guess === randomNumber) {
        endGame("🎉 Correct! You won!");
    } 
    // Check if attempts are exhausted
    else if (attempts >= MAX_ATTEMPTS) {
        endGame(`💀 Game Over! Number was ${randomNumber}`);
    } 
    // Otherwise give hint
    else {
        showHint(guess);
    }
}


// Function to validate user input
function isValidGuess(guess) {
    // Check if input is empty, not a number, or out of range
    if (!guess || guess < 1 || guess > 100) {
        messageText.textContent = "Enter number between 1 and 100";
        return false; // invalid input
    }
    return true; // valid input
}


// Function to update UI after each guess
function updateUI(guess) {
    // Add current guess to previous guesses list
    guessesText.textContent += `${guess} `;

    // Update remaining attempts
    remainingText.textContent = MAX_ATTEMPTS - attempts;
}


// Function to show hint (high or low)
function showHint(guess) {
    // If guess is smaller than random number → too low
    // Otherwise → too high
    messageText.textContent = guess < randomNumber 
        ? "Too low 📉" 
        : "Too high 📈";
}


// Function to handle end of game
function endGame(message) {
    // Show final message (win or lose)
    messageText.textContent = message;

    // Mark game as inactive
    gameActive = false;

    // Disable input so user cannot play further
    userInput.disabled = true;

    // Create a button for restarting game
    const btn = document.createElement('button');
    btn.textContent = "Start New Game";

    // Add click event to restart game
    btn.addEventListener('click', initGame);

    // Add button to UI
    resultContainer.appendChild(btn);
}

