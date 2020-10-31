'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

const changeBackground = function(background) {
    document.querySelector('body').style.backgroundColor = background;
};

const toggleNumber = function(number) {
    document.querySelector('.number').textContent = number;
};

const changeScore = function(score) {
    document.querySelector('.score').textContent = score;
};

const changeWidth = function(width) {
    document.querySelector('.number').style.width = width;
};

const guessValue = function(value) {
    document.querySelector('.guess').value = value;
};

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(guessValue(value));

    if(!guess) {
        displayMessage('⚠ Number required.');
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct number!');
        toggleNumber(secretNumber);
        changeBackground('#60b347');

        changeWidth('30rem');

        if (score > highscore) {
            highscore= score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess !== secretNumber) {
        if (score > 1) {
        displayMessage (guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        score--;
        changeScore(score);
        } else {
            displayMessage('❌ You lost!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    changeScore(score);
    toggleNumber('?');
    changeBackground('#222');

    displayMessage('Start guessing...');
    guessValue('');
    changeWidth('15rem');
})