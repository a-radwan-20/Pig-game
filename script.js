'use strict';

// const diceImages = [
//   'img/1.svg',
//   'img/2.svg',
//   'img/3.svg',
//   'img/4.svg',
//   'img/5.svg',
//   'img/6.svg'
// ]

const randNum = function () {
  return Math.trunc(Math.random() * 6) + 1
}

//DOM Elements selected

const score0Elem = document.querySelector('.score--0')
const score1Elem = document.querySelector('.score--1')
const currentScore0Elem = document.getElementById('current--0')
const currentScore1Elem = document.getElementById('current--1')

const diceElem = document.querySelector('.dice');
const btnNewElem = document.querySelector('.btn--new')
const btnRollElem = document.querySelector('.btn--roll')
const btnKeepElem = document.querySelector('.btn--keep')

//Global var
let currentScore = 0;
let totalScore = 0;
// let collectScore = 0;
let activePlayer = 0;
let scoreArray = [0, 0];

// score0Elem.textContent = '0'
// score1Elem.textContent = '0'
// diceElem.classList.add('.hidden');

//When click on roll btn
btnRollElem.addEventListener('click', function () {
  let currentRand = randNum()
  diceElem.src = `img/${currentRand}.svg`

  if (currentRand === 1) {

    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

  } else {

    currentScore += currentRand;
    totalScore = currentScore;

    document.getElementById(`current--${activePlayer}`).textContent = totalScore

  }

})

btnKeepElem.addEventListener('click', function () {

  // collectScore[activePlayer] = totalScore
  scoreArray[activePlayer] += totalScore
  currentScore = 0;

  if (collectScore >= 100) {
    document.getElementById(`score--${activePlayer}`).textContent = 'Winner';
  }

  document.getElementById(`score--${activePlayer}`).textContent = scoreArray[activePlayer]
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  totalScore = 0;




  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0;

})