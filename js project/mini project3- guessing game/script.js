//initializing some values
let totalAttempts = 5;
let attemts = 0;
let totalWon = 0;
let totalLost = 0;

//selecting elements
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = document.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const lostWonMessage = document.createElement("p");
const remainingAttemts = cardBody.querySelector(".remaining-attemts");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  attemts++;
  if (attemts == 5) {
    guessingNumber.disabled = true;
    checkButton.disabled = true;
  }
  if (attemts < 6) {
    let guessingNumber = Number(guessingNumber.value);
    checkResult(guessingNumber.value);
    remainingAttemts.innerHTML = `remaining attemts: ${
      totalAttempts - attemts
    }`;
  }
  guessingNumber.value = "";
});

function checkResult(guessingNumber) {
  const randomNumber = getRandomNumber(5);

  if (guessingNumber == randomNumber) {
    resultText.innerHTML = "You have won";
    totalWon++;
  } else {
    resultText.innerHTML = `You have lost; random number was : ${randomNumber}`;
    totalLost++;
  }
  lostWonMessage.innerHTML = `Won: ${totalWon}, Lost: ${totalLost}`;
  lostWonMessage.classList.add("large-text");
  cardBody.appendChild(lostWonMessage);
}
function getRandomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}
