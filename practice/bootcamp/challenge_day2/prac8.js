function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  function getUserArraySize() {
    let attempts = 0;
    while (attempts < 3) {
      const size = parseInt(prompt("Enter the size of the array (between 1 and 10):"));
      if (!isNaN(size) && size >= 1 && size <= 10) {
        return size;
      } else {
        attempts++;
        alert("Invalid input. Please enter a number between 1 and 10.");
      }
    }
    alert("Array size entered is not correct. Exiting the program.");
    return null;
  }
  
  const arraySize = getUserArraySize();
  
  if (arraySize !== null) {
    const randomArray = [];
  
    for (let i = 0; i < arraySize; i++) {
      const randomNumber = getRandomNumber(100.0, 500.0);
      randomArray.push(randomNumber.toFixed(1)); 
    }
  
    console.log("Random Array:", randomArray);
  }
  