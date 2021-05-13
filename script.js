'use strict';

// Select an element from DOM
// document.querySelector('.comeClass')

/* 
console.log(document.querySelector('.message').textContent);
*/

// DOM is an structured representation of HTML elements. DOM stands for Document Objec Model.
// It is created by the browser when the page gets loaded in the browser

/* 
document.querySelector('.message').textContent = 'Stop gusessing...';
console.log(document.querySelector('.message').textContent);
 */

/* 
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 18;

// getting data from input field
document.querySelector('.guess').value = 17;
console.log(document.querySelector('.guess').value);
 */

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.score').textContent = score;

const displayContent = function (identifier, textString) {
  document.querySelector(`.${identifier}`).textContent = textString;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayContent('message', 'No Number!');
  } else if (guess === secretNumber) {
    displayContent('message', 'Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // document.querySelector('.number').textContent = secretNumber;
    displayContent('number', secretNumber);
    if (score > highScore) {
      highScore = score;
      // document.querySelector('.highscore').textContent = highScore;
      displayContent('highscore', highScore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayContent(
        'message',
        guess > secretNumber ? 'Too high!' : 'Too Low!'
      );
      score--;
      // document.querySelector('.score').textContent = score;
      displayContent('score', score);
    } else {
      displayContent('You lost the game!');
      // document.querySelector('.score').textContent = 0;
      displayContent('score', 0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  displayContent('message', 'Start guessing...');
  // document.querySelector('.score').textContent = score;
  displayContent('score', score);
  // document.querySelector('.number').textContent = '?';
  displayContent('number', '?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
