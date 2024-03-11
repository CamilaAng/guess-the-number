const maxiNumber = 10;
const maxiTries = 3;
let secretNumber = Math.floor(Math.random()*maxiNumber)+1;
let tries = 1;

const startButton = document.getElementById("start");
const guessButton = document.getElementById("guess");
const guessInput = document.getElementById("guess-number");
const initialText = document.getElementById("initial-text");
const triesText = document.getElementById("tries-text");
const newGame = document.getElementById("new-game");
const restartButton = document.getElementById("restart-button");
const finishButton = document.getElementById("finish-button");
const majorText = document.getElementById("major-text"); 
const minorText = document.getElementById("minor-text");
const succesText = document.getElementById("succes-text");
const failureText = document.getElementById("failure-text");

startButton.addEventListener("click", function() {
    showPlayContainer();
    hideStartContainer();
    guessInput.focus();
    guessInput.value = "";
});

function guess() {
    const guessedNumber = parseInt(guessInput.value); 
    
    if (guessedNumber == secretNumber) {
        succesText.textContent = `Acertaste el número es: ${secretNumber} Lo hiciste en ${tries} ${tries == 1 ? 'intento' : 'intentos'}`;
        showNewGameContainer();
        hidePlayContainer();
        showSuccesText();
        hideFailureText();
    } else { 
        if (guessedNumber > secretNumber) { 
            minorText.textContent = `El número es menor a ${guessedNumber}`;
            showMinorContainer();
            hideMajorContainer();
        } else {
            majorText.textContent = `El número es mayor a ${guessedNumber}`;
            showMajorContainer();
            hideMinorContainer();
        }
        tries++ ;
        if (tries > maxiTries) {
            failureText.textContent = `Fallaste, el número era ${secretNumber}`;
            showNewGameContainer();
            hidePlayContainer();
            showFailureText();
            hideSuccesText();
        }
    }
}

guessInput.addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        guess();
        guessInput.value = "";
    }
});

guessButton.addEventListener("click", function() {
    guess();
    guessInput.focus();
    guessInput.value = "";
});

finishButton.addEventListener("click", function() {
    showThanksContainer();
    hideNewGameContainer();
})

restartButton.addEventListener("click", function() {
    secretNumber = Math.floor(Math.random()*maxiNumber)+1;
    tries = 1;
    showPlayContainer();
    hideNewGameContainer();
    hideMajorContainer();
    hideMinorContainer();
})

function changeDisplay(containerName, display) {
    const container = document.getElementById(containerName);
    container.style.display = display;
}

function showContainer(containerName) {
    changeDisplay(containerName, "block");
}

function hideContainer(containerName) {
    changeDisplay(containerName, "none");
}

function showStartContainer() {
    showContainer("start-container");
}

function showPlayContainer() {
    showContainer("play-container");
}

function showMajorContainer () {
    showContainer("major-container");
}

function showMinorContainer () {
    showContainer("minor-container");
}

function showNewGameContainer() {
    showContainer("new-game-container");
}

function showThanksContainer () {
    showContainer("thanks-container");
}

function showSuccesText () {
    showContainer("succes-text");
}

function showFailureText () {
    showContainer("failure-text"); 
}

function hideStartContainer() {
    hideContainer("start-container");
}

function hidePlayContainer () {
    hideContainer("play-container");
}

function hideMajorContainer () {
    hideContainer("major-container");
}

function hideMinorContainer () {
    hideContainer("minor-container");
}

function hideNewGameContainer () {
    hideContainer("new-game-container");
}

function hideThanksContainer () {
    hideContainer("thanks-container");
}

function hideSuccesText () {
    hideContainer("succes-text");
}

function hideFailureText () {
    hideContainer("failure-text"); 
}
