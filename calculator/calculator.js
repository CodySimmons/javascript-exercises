function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
function sum(obj) {
  return obj.reduce((total, nextNumber) => total + nextNumber, 0);
}

function multiply(obj) {
  return obj.length
    ? obj.reduce((total, nextNumber) => total * nextNumber, 1)
    : 0;
}

function power(a, b) {
  return Math.pow(a, b);
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }
  let factorialArray = [];
  for (let i = 1; i <= x; i++) {
    factorialArray.push(i);
  }
  return multiply(factorialArray);
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

let sumArray = [1, 2, 3, 4, 5, 6, 7, 8];
// let sumArray = [];
// console.log(sum(sumArray));
// console.log(sum([7]));
console.log(multiply([8, 2]));
console.log(multiply([]));
// console.log(factorial(5));
