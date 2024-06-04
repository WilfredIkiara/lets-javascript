"use strict";

//selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1"); //is faster than query selector
const current0El = document.getElementById("current--o"); //is faster than query selector
const current1El = document.getElementById("current--o"); //is faster than query selector

const diceEl = document.querySelector(".dice"); //class selecting
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
// const scores = [0, 0];
// let currentScore, activePlayer, playing;
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
let scoreLimit = 100;

const init = function () {
  document.querySelector(`.player--0`).classList.add("player--active");
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  (scores[0] = 0), (scores[1] = 0);

  diceEl.classList.add("hidden");
  for (let i = 0; i <= 1; i++) {
    document.querySelector(`.player--${i}`).classList.remove("player--winner");
    document.getElementById(`current--${i}`).textContent = 0;
    document.getElementById(`score--${i}`).textContent = 0;
  }
};

init();

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; //ternary operator switches 0 to 1 and 1 to 0
  player0El.classList.toggle("player--active"); //togggle adds the class if it is not there and removes it if it is
  player1El.classList.toggle("player--active");
};

//rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    //1. generate a random dice roll
    //2. display dice value
    //3. chck for rolld 1: if true switch to next player
    const dice = Math.trunc(Math.random() * 6) + 1;
    //   console.log(dice);

    //2. display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`; //changes the image by manipulating the source variable

    //check for rolled number
    if (dice !== 1) {
      //add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0El.textContent = currentScore; // Change later
    } else {
      //switch to next player
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // activePlayer = activePlayer === 0 ? 1 : 0; //ternary operator switches 0 to 1 and 1 to 0
      // player0El.classList.toggle("player--active"); //togggle adds the class if it is not there and removes it if it is
      // player1El.classList.toggle("player--active");
      switchPlayer();
    }
  }
});
btnHold.addEventListener("click", function () {
  if (playing) {
    //1. add curent score to score of active player
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // console.log(scores[activePlayer]);

    //2. check if score is 100
    if (scores[activePlayer] >= scoreLimit) {
      //player won
      playing = false;
      diceEl.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      //3. switch to next player
      switchPlayer();
    }
  }
});
btnNew.addEventListener("click", init);
