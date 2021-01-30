function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
function sum(obj) {
  let sum = 0;
  //   console.log(obj);

  for (let key of obj) {
    sum += key;
  }
  return sum;
}

function multiply(obj) {
  let multiplyTotal = 1;
  for (let key of obj) {
    multiplyTotal *= key;
  }
  return multiplyTotal;
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

// let sumArray = [1, 2, 3, 4, 5, 6, 7, 8];
// let sumArray = [];
// console.log(sum(sumArray));
// console.log(sum([7]));
// console.log(multiply([8, 2]));
console.log(factorial(5));
