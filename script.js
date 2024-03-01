'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highscore = 0;
// document.querySelector('.highscore').textContent = highscore;

document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, 'This is the type of guess ');

  if (!guess) {
    document.querySelector('.message ').textContent = '⛔No Number ';

    // If guess is equal to the secret number
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🏆 You Found the number ';
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.highscore').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Implement the high score in the guess
    if (score > highscore) {
      // document.querySelector('.highscore').textContent = score;
      highscore = score;
      // document.querySelector('.highscore').textContent = highscore;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is less than the secret number
  } else if (guess < secretNumber) {
    document.querySelector('.message ').textContent = '📉 Guess is too low ';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    }

    // If the secret number is greater than the guess
  } else if (guess > secretNumber) {
    document.querySelector('.message ').textContent = '📈 Score is too Hight ';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    }

    // If all condition is wrong than  Show this
  } else {
    document.querySelector('.messsage').textContent =
      '🚫 Maybe You doing something else ';
  }
});
// adding the again page
document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').style.width = '15rem';
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start Guessing...';
  // document.querySelector('.highscore').textContent = score;
});
