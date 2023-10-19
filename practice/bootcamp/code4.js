function Quadratic() {
    const a = parseFloat(("10"));
    const b = parseFloat(("20"));
    const c = parseFloat(("30"));
    const delta = b * b - 4 * a * c;
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        console.error("Invalid input. Please enter valid numerical values for 'a', 'b', and 'c'.");
    } else if (delta > 0) {
        const root1 = (-b + Math.sqrt(delta)) / (2 * a);
        const root2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log(`Root 1 of x = ${root1}`);
        console.log(`Root 2 of x = ${root2}`);
    } else if (delta === 0) {
        const root = -b / (2 * a);
        console.log(`There is one real root of x = ${root}`);
    } else {
        const realPart = -b / (2 * a);
        const imaginaryPart = Math.sqrt(Math.abs(delta)) / (2 * a);
        console.log(`Root 1 of x = ${realPart} + ${imaginaryPart}i`);
        console.log(`Root 2 of x = ${realPart} - ${imaginaryPart}i`);
    }
}
Quadratic();
