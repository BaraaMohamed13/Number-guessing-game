'use strict';
let secretNumber = Math.trunc(Math.random() * 21);
let score = 20;
let highscore = 0;
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
console.log(secretNumber);
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 21);
  console.log(`${secretNumber} new secret number`);

  displayMessage('start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(guess);
  // No number entered
  if (!guess) {
    displayMessage('No number entered!');
    // correct number entered
  } else if (guess == secretNumber) {
    displayMessage('Correct Number ✌👌');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;

    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // number is lower or higher than secretNumber
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#420d09';
    }
  }
});
