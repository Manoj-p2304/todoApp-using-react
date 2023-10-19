function printFrequencies(arr) {
    const frequencyMap = {};
  
    // Count the frequencies of each element in the array
    for (const element of arr) {
      if (frequencyMap[element]) {
        frequencyMap[element]++;
      } else {
        frequencyMap[element] = 1;
      }
    }
  
    // Print the frequencies
    for (const key in frequencyMap) {
      console.log(`Element: ${key}, Frequency: ${frequencyMap[key]}`);
    }
  }
  
  // Example usage:
  const array = [1, 2, 2, 3, 4, 4, 4, 5];
  printFrequencies(array);
  