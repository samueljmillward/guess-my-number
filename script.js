'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1

let score = 20;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)

    if(!guess) {
        document.querySelector('.message').textContent = '⚠ Number required.'
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct number!'
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor= '#60b347';

        document.querySelector('.number').style.width = '30rem';
    } else if (guess > secretNumber) {
        if (score > 1) {
        document.querySelector('.message').textContent = '📈 Too high!'
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '❌ You lost!';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
        document.querySelector('.message').textContent = '📉 Too low!'
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '❌ You lost!';
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1
    score = 20;

    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?'
    document.querySelector('body').style.backgroundColor= '#222';

    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
})