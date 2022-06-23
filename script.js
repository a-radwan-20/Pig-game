'use strict';

//DOM Elements selected
const score0Elem = document.querySelector('.score--0')
const score1Elem = document.querySelector('.score--1')
const currentScore0Elem = document.querySelector('.current--0')
const currentScore1Elem = document.querySelector('.current--1')

const diceElem = document.querySelector('.dice');
const btnNewElem = document.querySelector('.btn--new')
const btnRollElem = document.querySelector('.btn--roll')
const btnKeepElem = document.querySelector('.btn--keep')
const inputScoreElem = document.querySelector('.input--score')
const btnScoreElem = document.querySelector('.btn--score')

//Global var
let currentScore = 0;
let totalScore = 0;

let activePlayer = 0;
let scoreArray = [0, 0];
let newScore = 100;

//Get a Random number
const randNum = function () {
  return Math.trunc(Math.random() * 6) + 1
}

//If another score value entered in bottom input text 
btnScoreElem.addEventListener('click', function () {
  newScore = Number(inputScoreElem.value)
})

//Function to switch a player
const switchPlayer = function () {
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
  document.getElementById(`current--${activePlayer}`).textContent = 0
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
}

//When New Game Initiated
const resetAll = function () {
  diceElem.src = `img/0.svg`

  btnKeepElem.removeAttribute('disabled', 'disabled')
  btnRollElem.removeAttribute('disabled', 'disabled')

  score0Elem.textContent = 0
  score1Elem.textContent = 0
  currentScore0Elem.textContent = 0
  currentScore1Elem.textContent = 0

  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')
  document.querySelector(`.player--0`).classList.add('player--active')

  currentScore = 0;
  totalScore = 0;
  activePlayer = 0;
  scoreArray = [0, 0]
}

//When click on roll btn
btnRollElem.addEventListener('click', function () {
  let currentRand = randNum()
  diceElem.src = `img/${currentRand}.svg`

  if (currentRand === 1) {
    switchPlayer()
  } else {
    currentScore += currentRand;
    totalScore = currentScore;
    document.getElementById(`current--${activePlayer}`).textContent = totalScore
  }
})

btnKeepElem.addEventListener('click', function () {

  scoreArray[activePlayer] += totalScore
  currentScore = 0;
  document.getElementById(`score--${activePlayer}`).textContent = scoreArray[activePlayer]

  if (scoreArray[activePlayer] >= newScore) {
    document.getElementById(`score--${activePlayer}`).textContent = `Winner`
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    btnKeepElem.setAttribute('disabled', 'disabled')
    btnRollElem.setAttribute('disabled', 'disabled')

  } else {
    switchPlayer()
  }

})

//When click on new Game btn
btnNewElem.addEventListener('click', resetAll)