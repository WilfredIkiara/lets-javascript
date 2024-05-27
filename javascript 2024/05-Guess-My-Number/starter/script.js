"use strict";

// console.log(document.querySelector(".message").textContent);
// // DOM manipulation ...AbortController.making javascript interact with the webpage
// //dom ...document object model, structured representation of html documents, allows javascript to access html elements and styles to manipulate them
// //conection btwn html and the broowser
// document.querySelector(".message").textContent = "Correct number";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

// HANDLING CLICK EVENTS
// REFACTORING CODE  keeping the code dry

let secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector(".message").textContent = "No number";
    //when there is no input
    displayMessage("No Number");
  } else if (guess === secret_number) {
    // document.querySelector(".message").textContent = "Correct number";
    displayMessage("...Correct Number...");
    document.querySelector("body").style.backgroundColor = "#60b347"; //how to do css
    document.querySelector(".number").textContent = secret_number;
    document.querySelector(".number").style.width = "30rem"; //css
    //when the user wins
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector(".highscore").textContent = highscore;
  } else if (guess !== secret_number) {
    if (score > 1) {
      //   document.querySelector(".message").textContent =
      // guess > secret_number ? "...Too High..." : "...Too low..."; //ternary operator to help keep the code dry
      displayMessage(
        guess > secret_number ? "...Too High..." : "...Too low..."
      );
      score--;
    } else {
      //   document.querySelector(".message").textContent = "You Lost The Game";
      displayMessage("...You completely and utterly lost the game...");
      document.querySelector(".score").textContent = 0;
    }
  }
  //   } else if (guess > secret_number) {
  //     //when the user looses
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "...Too High...";
  //       score--;
  //     } else {
  //       document.querySelector(".message").textContent = "You Lost The Game";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   } else if (guess < secret_number) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "...Too Low...";
  //       score--;
  //     } else {
  //       document.querySelector(".message").textContent = ".You Lost The Game";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
  document.querySelector(".score").textContent = score;
}); //listen for events //the second parameter is a function of what to happen after an event (click)
document.querySelector(".again").addEventListener("click", function () {
  secret_number = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector(".score").textContent = score;

  document.querySelector(".number").textContent = "?";

  document.querySelector(".message").textContent = "Start guessing...";

  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";

  console.log(secret_number);
});
