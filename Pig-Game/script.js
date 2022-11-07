'use strict';

//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0'); //select element by id with querySelector and #
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const winner0 = document.getElementById('winner--0');
const winner1 = document.getElementById('winner--1');
const showRules = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnOpenRules = document.querySelector('.btn--rules'); //button show rules
const btnCloseRules = document.querySelector('.close-modal'); //button close rules
let scores, currentScore, activePlayer, playing;

const openModal = function () {
  showRules.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  showRules.classList.add('hidden');
  overlay.classList.add('hidden');
};

const newGame = function () {
  // starting conditions
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  diceEl.classList.add('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  winner0.classList.add('hidden');
  winner1.classList.add('hidden');
};

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  //methods to switch the background of active player
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

newGame();

//Reseting the game
btnNew.addEventListener('click', newGame);
btnOpenRules.addEventListener('click', openModal);
btnCloseRules.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // check if rolled is 1 - switch to next player
    if (dice !== 1) {
      //add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to active player score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. Check if player's score is >=100 - finish game or switch to next player
    if (scores[activePlayer] >= 30) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`#winner--${activePlayer}`)
        .classList.remove('hidden');
      //remove the dice
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});
