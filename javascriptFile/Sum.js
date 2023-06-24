/**
 * Function to add two number together.
 * @param {number} a First number to add.
 * @param {number} b Second number to add.
 * @return {number} The sum of two parameter.
 */ //JSDoc comment
function sum(a, b) {
  return a + b;
}

let x = 3,
  y = 8;

console.log(`${x} + ${y} = ${sum(x, y)}`);
console.log("1 + 2 = " + sum(1, 2));
console.log(`${x} + ${y} = ${x + y}`);
console.log(sum(x, y));