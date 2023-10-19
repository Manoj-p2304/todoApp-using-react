const minNumber = 1;
const maxNumber = 100;
const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

const maxAttempts = 10; 
let attempts = 0;


function promptUserForGuess() {
  const userGuess = parseInt(prompt(`Guess the number between 1 and 100 (Attempts left: ${maxAttempts - attempts}):`));

  if (!isNaN(userGuess)) {
    attempts++;

    if (userGuess === randomNumber) {
      console.log(`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts. You win!`);
    } else if (attempts < maxAttempts) {
      if (userGuess < randomNumber) {
        console.log("Too low. Try again.");
      } else {
        console.log("Too high. Try again.");
      }
      promptUserForGuess();
    } else {
      console.log(`Sorry, you've reached the maximum number of attempts. The correct number was ${randomNumber}. Computer wins.`);
    }
  } else {
    console.log("Invalid input. Please enter a valid number.");
    promptUserForGuess();
  }
}


promptUserForGuess();
