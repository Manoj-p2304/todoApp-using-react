function IntOpt(a, b, c) {
    const result1 = a + b * c;
    const result2 = a * b + c;
    const result3 = c + a / b;
    const result4 = a % b + c;
  
    console.log(`a + b * c = ${result1}`);
    console.log(`a * b + c = ${result2}`);
    console.log(`c + a / b = ${result3}`);
    console.log(`a % b + c = ${result4}`);
  }

  const a = 5.98;
  const b = 3.45;
  const c = 2.77;

  IntOpt(a, b, c);
  