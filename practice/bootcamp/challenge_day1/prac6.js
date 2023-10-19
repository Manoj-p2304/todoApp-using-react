function findRoots(a, b, c) {
    const delta = b * b - 4 * a * c;
    if (delta > 0) {
      const root1 = (-b + Math.sqrt(delta)) / (2 * a);
      const root2 = (-b - Math.sqrt(delta)) / (2 * a);
      return [root1, root2];
    } else if (delta === 0) {
      const root = -b / (2 * a);
      return [root];
    } else {
      const realPart = -b / (2 * a);
      const imaginaryPart = Math.sqrt(-delta) / (2 * a);
      return [`${realPart} + ${imaginaryPart}i`, `${realPart} - ${imaginaryPart}i`];
    }
  }
  const a = parseFloat(66);
  const b = parseFloat(55);
  const c = parseFloat(99);
  const roots = findRoots(a, b, c);
  if (roots.length === 2) {
    console.log(`Root 1: ${roots[0]}`);
    console.log(`Root 2: ${roots[1]}`);
  } else if (roots.length === 1) {
    console.log(`Root: ${roots[0]}`);
  } else {
    console.log(`Complex Roots:`);
    console.log(`Root 1: ${roots[0]}`);
    console.log(`Root 2: ${roots[1]}`);
  }
  