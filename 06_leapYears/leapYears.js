const isParamOneDivisibleByParamTwo = (a,b) => a % b == 0;

// Leap years follow these rules:
// - A year is a leap year if it is divisible by 4.
// - However, if the year is divisible by 100, it is NOT a leap year unless it is also divisible by 400.
// Example leap years: 1600, 2000, 1984, 2004.
// Example non-leap years: 1800, 1900, 2100.

const leapYears = function(inputYear) {
    // Not a leap year if divisible by 100 but not 400
    if (isParamOneDivisibleByParamTwo(inputYear,100) && !isParamOneDivisibleByParamTwo(inputYear,400)) {
        return false;
    }

    // Leap year if divisible by 4
    if (isParamOneDivisibleByParamTwo(inputYear,4)) {
        return true;
    }

    // Otherwise, not a leap year
    return false;
};



// Do not edit below this line
module.exports = leapYears;
