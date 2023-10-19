function fahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * (5/9);
  const fahrenheit = (celsius * 9/5) + 32;
  return celsius;
}


const celsius = fahrenheitToCelsius(fahrenheit);
console.log(`${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`);
console.log(`${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`);