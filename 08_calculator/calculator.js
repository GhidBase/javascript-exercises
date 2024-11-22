const add = function(number1, number2) {
	return number1 + number2;
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(inputArray) {
	let endSum = 0;
  inputArray.forEach((number) => {
    endSum += number;
  });
  return endSum;
};

const multiply = function(inputArray) {
  let endProduct = 1;
  inputArray.forEach((number) => {
    endProduct *= number;
  })
  return endProduct;
};

const power = function(number1, number2) {
	return number1 ** number2;
};

const factorial = function() {
	
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
