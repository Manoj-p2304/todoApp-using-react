const minNumber = 1;
const maxNumber = 100;
const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

let attempts = 0;

function promptUserForGuess() {
  const userGuess = parseInt(prompt("Guess the number between 1 and 100:"));

  if (!isNaN(userGuess)) {
    attempts++;

    if (userGuess === randomNumber) {
      console.log(`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`);
    } else if (userGuess < randomNumber) {
      console.log("Too low. Try again.");
      promptUserForGuess();
    } else {
      console.log("Too high. Try again.");
      promptUserForGuess();
    }
  } else {
    console.log("Invalid input. Please enter a valid number.");
    promptUserForGuess();
  }
}


promptUserForGuess();
