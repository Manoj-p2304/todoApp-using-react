function reverseString(input) {
    let reversed = '';
    for (let i = input.length - 1; i >= 0; i--) {
      reversed += input[i];
    }
    return reversed;
  }
  
  const inputString = 'Hello, World!';
  const reversedString = reverseString(inputString);
  console.log(reversedString); 
  