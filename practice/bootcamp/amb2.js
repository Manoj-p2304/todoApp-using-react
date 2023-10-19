function convertStringToASCIIArray(inputString) {
    const asciiArray = [];
  
    for (let i = 0; i < inputString.length; i++) {
      const char = inputString.charAt(i);
      const asciiValue = char.charCodeAt(0);
      asciiArray.push(asciiValue);
    }
  
    return asciiArray;
  }
  
  // Example usage:
  const inputString = "Hello, World!";
  const asciiValues = convertStringToASCIIArray(inputString);
  console.log("ASCII values:", asciiValues);
  