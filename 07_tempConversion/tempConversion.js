const convertToCelsius = function(inputTemp) {
  //(x-32) * (5/9)
  let conversion = (inputTemp - 32) * (5/9);
  return (conversion % 1 == 0) ? conversion : +conversion.toFixed(1);
};

const convertToFahrenheit = function(inputTemp) {
  // (x * (9/5) + 32)
  let conversion = inputTemp * (9/5) + 32;
  return (conversion % 1 == 0) ? conversion : +conversion.toFixed(1);

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
