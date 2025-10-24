const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, current) => total += current, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, current) => total *= current);
};

const power = function(base, pow) {
  return base ** pow;
};

const factorial = function(num) {
	let sum = 1;
  for (let i = 2; i <= num; i++) sum *= i;

  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
