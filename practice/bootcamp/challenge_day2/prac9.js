function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function calculateSum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  
  function calculateAverage(arr) {
    if (arr.length === 0) return 0;
    const sum = calculateSum(arr);
    return sum / arr.length;
  }
  
  const randomArray = [];
  const arraySize = 75;
  
  for (let i = 0; i < arraySize; i++) {
    const randomInt = getRandomInt(0, 100);
    randomArray.push(randomInt);
  }
  
  const sum = calculateSum(randomArray);
  const average = calculateAverage(randomArray);
  
  console.log("Random Array:", randomArray);
  console.log("Sum:", sum);
  console.log("Average:", average);
  
