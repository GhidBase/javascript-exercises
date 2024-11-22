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

const factorial = function(inputNumber) {
	if(inputNumber == 0 || inputNumber == 1){
    return 1;
  }

  let currentProduct = 1;
  for (let i = inputNumber; i > 0; i--) {
    currentProduct *= i;
  }
  return currentProduct;
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
