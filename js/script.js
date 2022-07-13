"use strict";

// Store the value
let randomNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".guess").textContent = "🧐";
let score = 20;
let highScore = 0;

// Message function
const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
  document.querySelector(".message").style.fontWeight = "bold";
};

// Display score function
const displayScore = (score) => {
  document.querySelector(".score").textContent = score;
};

// Implement the logic
document.querySelector(".btn-check").addEventListener("click", () => {
  // Take the number from input
  const inputNumber = Number(document.querySelector(".input-number").value);
  // console.log(inputNumber, typeof inputNumber);

  // When there's no input
  if (!inputNumber) {
    displayMessage("🚫 No Number!");
    document.querySelector(".guess").textContent = "🙄";

    // Correct Number
  } else if (inputNumber === randomNumber) {
    displayMessage("🥳 Correct Number!");
    document.querySelector(".guess").textContent = randomNumber;
    document.querySelector("body").style.backgroundColor = "#abf7b1";

    // Implement the highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // Wrong number
  } else if (inputNumber !== randomNumber) {
    if (score > 1) {
      displayMessage(inputNumber > randomNumber ? "😜🔼 Too High!" : "😜🔻 Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
      // document.querySelector(".guess").textContent = "🤔";
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Play again button
document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").textContent = "🧐";
  displayMessage("Start Guessing...");
  displayScore(score);
  document.querySelector(".input-number").value = "";
  document.querySelector("body").style.backgroundColor = "#fff";
  document.querySelector(".message").style.fontWeight = "100";
});
