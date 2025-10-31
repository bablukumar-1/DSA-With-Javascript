let prompt = require("prompt-sync")();
// let n = prompt("enter your value  ")
// console.log(n);

let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessNumber;

while (true) {
  guessNumber = Number(prompt("Guess a number between 1 and 100:"));

  if (isNaN(guessNumber)) {
    console.log("❌ Please enter a valid number!");
    continue;
  }

  if (guessNumber < 1 || guessNumber > 100) {
    console.log("⚠️ Number must be between 1 and 100!");
    continue;
  }

  if (guessNumber > randomNumber) {
    console.log("🔺 Too high! Try again.");
  } else if (guessNumber < randomNumber) {
    console.log("🔻 Too low! Try again.");
  } else {
    console.log(`🎉 Congrats! You guessed it right: ${guessNumber}`);
    break;
  }
}
