'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number!';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 27;
console.log(document.querySelector('.guess').value);*/

//объявляем рандомное число от 1 до 20
let secretNumber = Math.trunc(Math.random() * 20 + 1);
//объявляем переменную для score
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '❗ No number';
    displayMessage('❗ No number');
    // when player wins
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🎉Brilliant! You are right';
    displayMessage('🎉Brilliant! You are right');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //when guess is wrong
  } else if (guess != secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent = guess > secretNumber ? '📈Number is too high. Try again!' : '📉Number is too low. Try again!';
      displayMessage(
        guess > secretNumber
          ? '📈Number is too high. Try again!'
          : '📉Number is too low. Try again!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = '💥You lost the game!';
      displayMessage('💥You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
/*
    // when input number is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '📉Number is too low. Try again!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    //when inpur number is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '📈Number is too high. Try again!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  //console.log(guess, typeof guess);
});*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

/////////////////////////////////////s
//Coding Challenge #1
// Implement a game reset functionality, so that the player can make a new guess! Here is how:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the score and secretNumber variables
// 3. Restore the initial conditions of the message, number, score and guess input field
// 4. Also restore the original background color (#222) and number width (15rem)
// GOOD LUCK
